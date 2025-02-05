<template>
  <v-app>
  <v-app-bar :class="appBarClass" app :style="{ height: appBarHeight + 'px' }">
    <v-container class="d-flex align-center justify-space-between" style="margin-left: 0px; margin-right: 0px; max-width: 1910px;">
      <v-btn to="/" :active="false" style="font-size: 2rem; color: #D1C18B;">Survivor‘s Quest</v-btn>
      <v-sheet
        v-for="n in 1"
        :key="n"
        class="ma-2 pa-2 bg-secondary"
      >
      <template v-for="nav of navs" :key="nav.to">
        <v-btn v-if="nav.show" :to="nav.to" :prepend-icon="nav.icon">
          {{ nav.text }}
          <v-badge v-if="nav.to === '/cart'" :content="user.cart" floating color="red"></v-badge>
        </v-btn>
      </template>
    </v-sheet>
    <v-sheet
        v-for="n in 1"
        :key="n"
        class="ma-2 pa-2 bg-secondary"
      >
      <v-btn v-if="user.isLoggedIn" prepend-icon="mdi-account-arrow-right" @click="logout">{{ $t('nav.logout') }}</v-btn>
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props">
            <v-icon icon="mdi-translate"></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="lang in langs" :key="lang.value"
            @click="$i18n.locale = lang.value"
          >
            {{ lang.text }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>
    </v-container>
  </v-app-bar>
  <router-view></router-view>
  <v-main>
  </v-main>
</v-app>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const user = useUserStore()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()

const appBarHeight = ref(80)  // 初始高度
const hasHeightIncreased = ref(false)  // 標誌位，防止多次改變高度
const appBarClass = ref('transparent-app-bar')  // 初始 class，透明背景


const checkScrollPosition = () => {
  if (window.scrollY > 100 && !hasHeightIncreased.value) {  // 滾動超過 100px 時
    appBarHeight.value = 120  // 增加高度
    appBarClass.value = 'scrolled-app-bar'  // 改變 class，這樣背景顏色會改變
    hasHeightIncreased.value = true  // 設置標誌為已經改變過

  } else if (window.scrollY <= 100 && hasHeightIncreased.value) {
    // 回到頂端時恢復透明背景並還原原來的高度
    appBarHeight.value = 80  // 恢復到原始高度
    appBarClass.value = 'transparent-app-bar'  // 恢復透明背景
    hasHeightIncreased.value = false  // 重置標誌
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})

// 導覽列項目
const navs = computed(() => {
  return [
    { to: '/register', text: t('nav.register'), icon: 'mdi-account-plus', show: !user.isLoggedIn },
    { to: '/login', text: t('nav.login'), icon: 'mdi-account-arrow-left', show: !user.isLoggedIn },
    { to: '/shop', text: t('nav.shop'), icon: 'mdi-store', show: user.isLoggedIn},
    { to: '/activity', text: t('nav.activity'), icon: 'mdi-account-multiple', show: user.isLoggedIn},
    { to: '/cart', text: t('nav.cart'), icon: 'mdi-cart', show: user.isLoggedIn },
    { to: '/orders', text: t('nav.orders'), icon: 'mdi-format-list-bulleted', show: user.isLoggedIn },
    { to: '/admin', text: t('nav.admin'), icon: 'mdi-cog', show: user.isLoggedIn && user.isAdmin },
  ]
})

const langs = [
  { text: '繁體中文', value: 'zhHant' },
  { text: 'English', value: 'en' },
]

const logout = async () => {
  try {
    await apiAuth.delete('/user/logout')
  } catch (error) {
    console.log(error)
  }
  user.logout()
  createSnackbar({
    text: t('logout.success'),
    snackbarProps: {
      color: 'green'
    }
  })
  router.push('/')
}
</script>

<style scoped>
.transparent-app-bar {
  background-color: transparent !important;
  box-shadow: none !important;
  transition: background-color 0.3s ease, height 0.3s ease;
}

.scrolled-app-bar {
  background-color: #000000 !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2) !important;
  transition: background-color 0.3s ease, height 0.3s ease;
}

.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center; /* 確保內容垂直置中 */
  transition: height 0.3s ease; /* 平滑過渡導覽列高度 */
}

.v-btn-align {
  display: flex;
  align-items: center; /* 確保內容垂直置中 */
  transition: height 0.3s ease; /* 平滑過渡導覽列高度 */
}
</style>
