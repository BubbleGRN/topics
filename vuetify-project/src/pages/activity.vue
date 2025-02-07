<template>
  <!-- 主要區域 -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.adminEvents') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <!-- 活動資料表格 -->
        <v-data-table :items="events" :headers="headers" :search="search">
          <template #top>
            <v-toolbar>
              <v-btn @click="openDialog(null)">{{ $t('adminEvent.new') }}</v-btn>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" variant="underlined"></v-text-field>
            </v-toolbar>
          </template>
          <!-- 資料顯示 -->
          <template #[`item.image`]="{ value }">
            <v-img :src="value" height="50"></v-img>
          </template>
          <template #[`item.date`]="{ value }">
            {{ new Date(value).toLocaleString() }}
          </template>
          <template #[`item.name`]="{ value }">
            {{ value }}
          </template>
          <template #[`item.edit`]="{ item }">
            <v-btn icon="mdi-pencil" variant="text" @click="openDialog(item)"></v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>

  <!-- 活動新增/編輯對話框 -->
  <v-dialog v-model="dialog.open" persistent max-width="600px">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title>
          {{ dialog.id ? $t('adminEvent.edit') : $t('adminEvent.new') }}
        </v-card-title>
        <v-card-text>
          <!-- 活動名稱 -->
          <v-text-field
            v-model="name.value.value"
            :label="$t('event.name')"
            :error-messages="name.errorMessage.value"
          ></v-text-field>

          <!-- 活動日期 -->
          <v-text-field
            v-model="date.value.value"
            :label="$t('event.date')"
            :error-messages="date.errorMessage.value"
            type="date"
          ></v-text-field>

          <!-- 活動地點 -->
          <v-text-field
            v-model="location.value.value"
            :label="$t('event.location')"
            :error-messages="location.errorMessage.value"
          ></v-text-field>

          <!-- 活動描述 -->
          <v-textarea
            v-model="description.value.value"
            :label="$t('event.description')"
            :error-messages="description.errorMessage.value"
          ></v-textarea>

          <!-- 上傳活動圖片 -->
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
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useI18n } from 'vue-i18n'
import { reactive, computed, ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()

// 活動資料
const events = reactive([])
const search = ref('')
const headers = computed(() => {
  return [
    { title: 'ID', key: '_id', sortable: true },
    { title: t('event.image'), key: 'image', sortable: false },
    { title: t('event.name'), key: 'name', sortable: true },
    { title: t('event.date'), key: 'date', sortable: true },
    { title: t('event.location'), key: 'location', sortable: true },
    { title: t('event.description'), key: 'description', sortable: true },
    { title: t('adminEvent.edit'), key: 'edit', sortable: false },
  ]
})

// 取得活動資料
const getEvents = async () => {
  try {
    const { data } = await apiAuth.get('/event/all')
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

// 開啟對話框，準備編輯資料
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
    description.value.value = item.description
  }
  dialog.value.open = true
}

const fileAgent = ref(null);
// 關閉對話框，重置資料
const closeDialog = () => {
  resetForm()
  dialog.value.id = ''
  dialog.value.open = false
  fileAgent.value.deleteFileRecord()
}

// 表單驗證規則
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
})

// 使用 vee-validate 處理表單驗證
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    date: '',
    location: '',
    description: '',
  }
})
const name = useField('name')
const date = useField('date')
const location = useField('location')
const description = useField('description')

// 上傳圖片的文件資料
const fileRecords = ref([])
const rawFileRecords = ref([])

// 提交表單
const submit = async () => {
  try {
    if (dialog.value.id) {
      await apiAuth.put(`/event/${dialog.value.id}`, {
        name: name.value.value,
        date: date.value.value,
        location: location.value.value,
        description: description.value.value,
        image: fileRecords.value[0] ? fileRecords.value[0].file : null,
      })
    } else {
      await apiAuth.post('/event', {
        name: name.value.value,
        date: date.value.value,
        location: location.value.value,
        description: description.value.value,
        image: fileRecords.value[0] ? fileRecords.value[0].file : null,
      })
    }
    createSnackbar({ text: t('adminEvent.successMessage'), snackbarProps: { color: 'green' } })
    getEvents() // 重新載入活動資料
    closeDialog()
  } catch (error) {
    console.error(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
</script>
