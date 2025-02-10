<template>
  <v-app>
  <v-app-bar :class="appBarClass" app :style="{ height: appBarHeight + 'px' }">
    <v-container class="d-flex align-center justify-space-between" style="margin-left: 0px; margin-right: 0px; max-width: 1910px;">
      <v-btn to="/" :active="false" style="font-size: 2rem; color: #D1C18B;">Survivor‘s Quest</v-btn>
      <v-sheet
        v-for="n in 1"
        :key="n"
        class="ma-2 pa-2"
        :style="{color:'white', backgroundColor:backgroundColor}"
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
        class="ma-2 pa-2"
        :style="{color:'white', backgroundColor:backgroundColor}"
      >
      <v-btn v-if="user.isLoggedIn" prepend-icon="mdi-account-arrow-right" @click="logout">{{ $t('nav.logout') }}</v-btn>
      <v-menu>
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
import { useRouter, useRoute  } from 'vue-router'

const { t } = useI18n()
const user = useUserStore()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()
const route = useRoute()

const appBarHeight = ref(80)
const hasHeightIncreased = ref(false)
const appBarClass = ref('transparent-app-bar')


const checkScrollPosition = () => {
  if (window.scrollY > 100 && !hasHeightIncreased.value) {
    appBarHeight.value = 120
    appBarClass.value = 'scrolled-app-bar'
    hasHeightIncreased.value = true

  } else if (window.scrollY <= 100 && hasHeightIncreased.value) {
    appBarHeight.value = 80
    appBarClass.value = 'transparent-app-bar'
    hasHeightIncreased.value = false
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

const backgroundColor = computed(() => {
  if (route.path === '/activity') {
    return '#427542';
  } else if (route.path === '/shop') {
    return '#427542';
  } else if (route.path === '/cart') {
    return '#427542';
  } else if (route.path === '/orders') {
    return '#427542';
  } else if (route.path === '/InsideShop_Gun') {
    return '#427542';
  } else if (route.path === '/InsideShop_Vest') {
    return '#427542';
  } else if (route.path === '/InsideShop_Backpack') {
    return '#427542';
  } else if (route.path === '/InsideShop_Helmet') {
    return '#427542';
  } else if (route.path === '/InsideShop_BB') {
    return '#427542';
  } else if (route.path === '/InsideShop_Other') {
    return '#427542';
  } else {
    return 'transparent';
  }
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
  justify-content: center;
  transition: height 0.3s ease;
}


.v-btn-align {
  display: flex;
  align-items: center;
  transition: height 0.3s ease;
}
</style>
