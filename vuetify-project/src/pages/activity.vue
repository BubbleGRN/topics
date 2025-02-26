<template>
  <v-container class="backgroundIMG" style="margin-left: 0px; margin-right: 0px; max-width: 1903px;">
    <v-row style="position: relative; top: 80px;">
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.adminEvents') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-data-table :items="events" :headers="headers" :search="search" items-per-page="5" style="border: 5px solid #D1C18B;">
          <template #top>
            <v-toolbar>
              <v-btn @click="openDialog(null)">{{ $t('adminEvent.new') }}</v-btn>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" variant="underlined"></v-text-field>
            </v-toolbar>
          </template>
          <template #[`item.name`]="{ value }">
            {{ value }}
          </template>
          <template #[`item.image`]="{ value }">
            <v-img :src="value" height="50"></v-img>
          </template>
          <template #[`item.date`]="{ value }">
            {{ new Date(value).toLocaleDateString() }}
          </template>
          <template #[`item.price`]="{ value }">
            {{ value }}
          </template>
          <template v-if="user.role === 1" #[`item.edit`]="{ item }">
            <v-btn icon="mdi-pencil" variant="text" @click="openDialog(item)"></v-btn>
          </template>
          <template #[`item.join`]="{ item }">
            <v-btn class="bg-primary-darken-1" variant="text" @click="joinEvent(item)">加入</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>&nbsp;</v-row>
    <v-row>&nbsp;</v-row>
    <v-row class="pt-3">
      <v-col>
      <v-card class="bg-primary">
        <v-card-title style="text-align: center;">注意事項:</v-card-title>
        <v-card-text style="text-align: center;">1. 安全須知: <br>
                    裝備準備：生存遊戲可能需要特定的裝備，例如防水衣物、登山靴、急救包、食物和水等。<br>
                    環境危險：如果是在野外環境進行遊戲，需了解可能的危險，如野生動物、天氣變化、地形隱患等。<br>
                    急救常識：在遇到意外情況時，懂得一些急救技能，如處理割傷、骨折、脫水等狀況。<br>
                    2. 心理挑戰: <br>
                    應對壓力：生存遊戲中的不確定性和挑戰會考驗你的心理素質，如何保持冷靜並作出正確決策是非常重要的。<br>
                    耐性和毅力：遊戲過程中可能會遇到困難，鍾大智需要保持毅力，面對挑戰不輕言放棄。<br>
                    3. 倫理和規範: <br>
                    遵守規則：遊戲中通常有明確的行為規範，避免作弊或不公平行為，尊重其他玩家。<br>
                    尊重環境：如果遊戲進行在戶外，要注意環保和可持續性，避免破壞自然環境。<br>
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog.open" persistent max-width="600px">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title>
          {{ dialog.id ? $t('adminEvent.edit') : $t('adminEvent.new') }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name.value.value"
            :label="$t('event.name')"
            :error-messages="name.errorMessage.value"
          ></v-text-field>

          <v-select
          v-model="status.value.value"
          item-title="text"
          :items="statusOptions"
          :label="$t('event.status')"
          :error-messages="status.errorMessage.value"
          >
          </v-select>

          <v-text-field
            v-model="date.value.value"
            :label="$t('event.date')"
            :error-messages="date.errorMessage.value"
            type="date"
          ></v-text-field>

          <v-text-field
            v-model="location.value.value"
            :label="$t('event.location')"
            :error-messages="location.errorMessage.value"
          ></v-text-field>

          <v-textarea
            v-model="description.value.value"
            :label="$t('event.description')"
            :error-messages="description.errorMessage.value"
          ></v-textarea>

          <v-text-field
            v-model="price.value.value"
            :label="$t('event.price')"
            :error-messages="price.errorMessage.value"
            type="number"
            ></v-text-field>

          <VueFileAgent
            ref="fileAgent"
            v-model="fileRecords"
            v-model:raw-model-value="rawFileRecords"
            accept="image/jpeg,image/png"
            deletable
            max-size="1MB"
            :help-text="$t('fileAgent.helpText')"
            :error-text="{ type: $t('fileAgent.errorType'), size: $t('fileAgent.errorSize') }"
          ></VueFileAgent>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">{{ $t('adminEvent.cancel') }}</v-btn>
          <v-btn type="submit" :loading="isSubmitting" @click="handleSubmit(submit)">{{ $t('adminEvent.submit') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useI18n } from 'vue-i18n'
import { reactive, computed, ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()
const user = useUserStore()
const events = reactive([])
const search = ref('')
const headers = computed(() => {
  return [
    { title: t('event.name'), key: 'name', sortable: false },
    { title: t('event.image'), key: 'image', sortable: false },
    { title: t('event.date'), key: 'date', sortable: true },
    { title: t('event.location'), key: 'location', sortable: true },
    { title: t('event.description'), key: 'description', sortable: false },
    { title: t('event.price'), key: 'price', sortable: true },
    { title: t('event.status'), key: 'status', sortable: true },
    { title: t('adminEvent.edit'), key: 'edit', sortable: false},
    { title: t('event.join'), key: 'join', sortable: false },
  ]
})

const getEvents = async () => {
  try {
    const { data } = await apiAuth.get('/event/all')
    console.log(data.result)
    events.push(...data.result)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
getEvents()

const statusOptions = [
  {
    text:'叛徒遊戲',value:'叛徒遊戲: 依人數兩隊之中2~3人為敵對叛徒，叛徒主要任務為暗中清除自方的所有選手，而非叛徒的選手則是要將叛徒與敵隊射殺。這之中2~3分鐘在地圖的某處會有卡片可得知叛徒的部分特徵。'
},
  {
    text:'劇情扮演',value:'劇情扮演: 雙方各分配一半人數進行對戰，一但雙方人數減少至一半時，被出局人與神秘人進行第三隊的加入，至於 一、二 隊可依照自行意願是否加入敵隊(僅一 、 二 隊)進行合作，主要任務為第三隊全滅勝利。'
  },
]

const dialog = ref({
  open: false,
  id: ''
})
const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    name.value.value = item.name
    date.value.value = item.date
    location.value.value = item.location
    price.value.value = item.price
    description.value.value = item.description
    status.value = item.status
  }
  dialog.value.open = true
}

const fileAgent = ref(null);
const closeDialog = () => {
  resetForm()
  dialog.value.id = ''
  dialog.value.open = false
  fileAgent.value.deleteFileRecord()
}

const schema = yup.object({
  name: yup
    .string()
    .required(t('api.eventNameRequired')),
  date: yup
    .string()
    .required(t('api.eventDateRequired')),
  location: yup
    .string()
    .required(t('api.eventLocationRequired')),
  description: yup
    .string()
    .required(t('api.eventDescriptionRequired')),
  status: yup
    .string()
    .required(t('api.eventStatusRequired')),
  price: yup
    .number()
    .required(t('api.eventPriceRequired')),
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    date: '',
    location: '',
    description: '',
    status:'',
    price: '',
  }
})
const name = useField('name')
const date = useField('date')
const location = useField('location')
const description = useField('description')
const price = useField('price')
const status = useField('status')
const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  console.log(values)
  if (fileRecords.value[0]?.error)      return
  if (dialog.value.id.length === 0 && fileRecords.value.length === 0) {
    createSnackbar({
      text: t('api.eventImageRequired'),
      snackbarProps: {
        color: 'red'
      }
    })
    return
  }

  try {
    const fd = new FormData()
    fd.append('name', values.name)
    fd.append('price', values.price)
    fd.append('description', values.description)
    fd.append('location', values.location)
    fd.append('status', values.status)
    fd.append('date', values.date)
    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    if (dialog.value.id.length > 0) {
      await apiAuth.patch('/event/' + dialog.value.id, fd)
    } else {
      await apiAuth.post('/event', fd)
    }

    events.splice(0, events.length)
    getEvents()
    createSnackbar({
      text: t(dialog.value.id.length > 0 ? 'adminProduct.editSuccess' : 'adminProduct.newSuccess'),
      snackbarProps: {
        color: 'green'
      }
    })
    closeDialog()
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const joinEvent = async (event) => {
  try {
    const payload = {
      eventId: event._id,
      userId: user.id
    }
    await apiAuth.post('/user/join-event', payload)
    createSnackbar({
      text: t('event.joinSuccess'),
      snackbarProps: { color: 'green' }
    })
  } catch (error) {
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: { color: 'red' }
    })
  }
}
</script>

<route lang="yaml">
  meta:
    login: true
    title: 'nav.activity'
  </route>

<style>
.backgroundIMG {
  background: url(../../img/jungle-navbar.png) no-repeat center top;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
