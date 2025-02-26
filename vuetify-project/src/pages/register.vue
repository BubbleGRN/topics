<template>
  <v-container style="margin-left: 0px; margin-right: 0px; max-width: 1903px; height: 950px; position: relative; top:-80px">
    <div class="backgroundIMG"></div>
    <v-row style="position: absolute; top: 220px; left: 680px; width: 600px; margin: auto;">
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.register') }}</h1>
      </v-col>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            :label="$t('user.account')"
            minlength="4"
            maxlength="20"
            counter
            class="custom-label"
          />
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            :label="$t('user.email')"
            class="custom-label"
          />
          <v-text-field
            v-model="password.value.value"
            type="password"
            :error-messages="password.errorMessage.value"
            :label="$t('user.password')"
            minlength="4"
            maxlength="20"
            counter
            class="custom-label"
          />
          <v-text-field
            v-model="passwordConfirm.value.value"
            type="password"
            :error-messages="passwordConfirm.errorMessage.value"
            :label="$t('user.passwordConfirm')"
            minlength="4"
            maxlength="20"
            counter
            class="custom-label"
          />
          <div class="text-center" style="padding-top: 30px;">
            <v-btn :loading="isSubmitting" type="submit" color="primary">{{ $t('register.submit') }}</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import validator from 'validator'
import { useI18n } from 'vue-i18n'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const { api } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  account: yup
    // 資料型態是文字
    .string()
    // 必填
    .required(t('api.userAccountRequired'))
    // 最短長度
    .min(4, t('api.userAccountTooShort'))
    // 最長長度
    .max(20, t('api.userAccountTooLong'))
    // 自訂驗證(自訂驗證名稱, 錯誤訊息, function)
    .test('isAlphanumeric', t('api.userAccountInvalid'), (value) =>
      validator.isAlphanumeric(value),
    ),
  email: yup
    .string()
    .required(t('api.userEmailRequired'))
    .test('isEmail', t('api.userEmailInvalid'), (value) => validator.isEmail(value)),
  password: yup
    .string()
    .required(t('api.userPasswordRequired'))
    .min(4, t('api.userPasswordTooShort'))
    .max(20, t('api.userPasswordTooLong')),
  passwordConfirm: yup
    .string()
    // .oneOf(陣列, 訊息)  必須要是陣列內其中一個值
    // .ref(欄位名稱)      取得欄位的值
    // .ref('password')   password 欄位的值
    .oneOf([yup.ref('password')], t('api.userPasswordNotMatch')),
})

// 建立表單
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
})
// 建立欄位
const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/user', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: t('register.success'),
      snackbarProps: {
        color: 'green'
      }
    })
    router.push('/login')
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
</script>

<route lang="yaml">
meta:
  title: 'nav.register'
</route>

<style>
.backgroundIMG {
  background: url(../../img/i_want_you.png) no-repeat center;
  height: 930px;
  filter: opacity(0.3);
  background-size: 100vw 100vh;
  z-index: -1;
}

.custom-label .v-label {
  font-weight: bold;
  color: #1B03A3;
}
</style>
