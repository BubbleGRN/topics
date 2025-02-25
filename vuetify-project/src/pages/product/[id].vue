<template>
  <v-container>
    <v-row>
      <v-col cols="11" class="d-flex justify-center" style="padding-left: 130px;">
        <h1>{{ product.name }}</h1>
      </v-col>
      <v-col cols="1" class="text-right">
        <v-btn prepend-icon="mdi-keyboard-backspace" @click="$router.go(-1)">返回上一頁</v-btn>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" md="6">
        <v-img :src="product.image"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>{{ $t( 'productCategory.'+ product.category) }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
        <v-row align="center">
        <v-col cols="auto" class="pt-8">
          <v-form :disabled="isCartSubmitting" @submit.prevent="submitCart">
            <v-text-field
              v-model.number="quantity.value.value"
              type="number"
              :error-messages="quantity.errorMessage.value"
              label="數量"
            ></v-text-field>
          </v-form>
        </v-col>

        <v-col cols="auto">
          <v-form :disabled="isCartSubmitting" @submit.prevent="submitCart">
            <v-btn
              type="submit"
              prepend-icon="mdi-cart"
              :loading="isSubmitting"
            >
              {{ $t('product.addCart') }}
            </v-btn>
          </v-form>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="auto">
          <v-form :disabled="isRentSubmitting" @submit.prevent="submitRent">
            <v-btn
              type="submit"
              prepend-icon="mdi-send"
              :loading="isRentting"
              @click="openDialog(product)"
            >
              {{ $t('product.addRent') }}
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay :model-value="!product.sell" class="align-center justify-center" scrim="black" opacity="0.8" persistent>
    <h1 class="text-center">{{ $t('api.productNotOnSell') }}</h1>
  </v-overlay>

  <v-dialog v-model="dialog.open" persistent max-width="600px">
    <v-form :disabled="isRentting" @submit.prevent="submitRent">
      <v-card>
        <v-card-title>
          {{  $t('product.rent') }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name.value.value"
            :label="$t('product.name')"
            :error-messages="name.errorMessage.value"
          ></v-text-field>

          <v-text-field
            v-model="rentdate.value.value"
            :label="$t('event.rentdate')"
            :error-messages="rentdate.errorMessage.value"
            type="date"
          ></v-text-field>

          <v-text-field
            v-model="returndate.value.value"
            :label="$t('event.returndate')"
            :error-messages="returndate.errorMessage.value"
            type="date"
          ></v-text-field>

          <v-text-field
            v-model="location.value.value"
            :label="$t('event.location')"
            :error-messages="location.errorMessage.value"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">{{ $t('adminEvent.cancel') }}</v-btn>
          <v-btn type="submit" :loading="isRentting">{{ $t('product.rentSubmit') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>

</template>

<script setup>
import { ref } from 'vue'
import { useAxios } from '@/composables/axios'
import { useRoute, useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

const { api, apiAuth } = useAxios()
const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const user = useUserStore()
const createSnackbar = useSnackbar()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: 'gun'
})

const getProduct = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value = data.result
    document.title = product.value.name + ' | 購物網站'
  } catch (error) {
    console.log(error)
    router.push('/')
  }
}
getProduct()

const cartSchema = yup.object({
  quantity: yup
    .number()
    .typeError(t('product.addCartQuantityInvalid'))
    .required(t('product.addCartQuantityInvalid'))
    .positive(t('product.addCartQuantityInvalid'))
    .integer(t('product.addCartQuantityInvalid'))
})
const { handleSubmit: handleCartSubmit, isSubmitting: isCartSubmitting } = useForm({
  validationSchema: cartSchema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submitCart = handleCartSubmit(async (values) => {
  if (!user.isLoggedIn) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/user/cart', {
      product: product.value._id,
      quantity: values.quantity
    })

    user.cart = data.result

    createSnackbar({
      text: t('product.addCartSuccess'),
      snackbarProps: {
        color: 'green'
      }
    })
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

const rentSchema = yup.object({
  name: yup.string().required(t('product.nameRequired')),
  rentdate: yup.date().required(t('product.rentDateRequired')).typeError(t('product.rentDateInvalid')),
  returndate: yup.date().required(t('product.returnDateRequired')).typeError(t('product.returnDateInvalid')),
  location: yup.string().required(t('product.locationRequired')),
})

const { handleSubmit: handleRentSubmit, isSubmitting: isRentting } = useForm({
  validationSchema: rentSchema,
  initialValues: {
    name: '',
    rentdate: '',
    returndate: '',
    location: ''
  }
})

const name = useField('name')
const rentdate = useField('rentdate')
const returndate = useField('returndate')
const location = useField('location')

const submitRent = handleRentSubmit(async () => {
  if (!user.isLoggedIn) {
    router.push('/login')
    return
  }

  try {
    const { data } = await apiAuth.patch('/user/rent', {
      product: product.value._id,
      name: name.value.value,
      rentdate: rentdate.value.value,
      returndate: returndate.value.value,
      location: location.value.value,
    })
    user.rent = data.result
    console.log(typeof user.rent, user.rent)

    createSnackbar({
      text: t('product.addRentSuccess'),
      snackbarProps: {
        color: 'green'
      }
    })
    closeDialog()
  } catch (error) {
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const dialog = ref({
  open: false,
  id: ''
})

const openDialog = (product) => {
  if (product) {
    dialog.value.id = product._id
    name.value.value = product.name
    rentdate.value.value = ''
    returndate.value.value = ''
    location.value.value = ''
  }
  dialog.value.open = true
}

const closeDialog = () => {
  dialog.value.id = ''
  dialog.value.open = false
}
</script>

<route lang="yaml">
meta:
  title: 'nav.product'
</route>
