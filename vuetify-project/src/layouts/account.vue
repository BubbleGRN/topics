<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item :prepend-avatar="user.avatar" :title="user.account"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="nav in navs" :key="nav.to" :prepend-icon="nav.icon" :title="nav.text" :to="nav.to"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main :style="backgroundStyle">
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const user = useUserStore()
const route = useRoute();

const navs = computed(() => {
  return [
    { to: '/account/joinedActivity', text: t('nav.joinedActivity'), icon: 'mdi-account-multiple-plus-outline'},
    { to: '/account/rent', text: t('nav.rent'), icon: 'mdi-send-clock' },
    { to: '/', text: t('nav.home'), icon: 'mdi-home' },
  ]
})

const backgroundStyle = ref({
  background: 'url(../../img/background2.png) no-repeat',
  backgroundSize: '100vw 100vh',
  transition: 'background-color 0.3s',
});

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/account/joinedActivity' || newPath === '/account/rent') {
      backgroundStyle.value.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      backgroundStyle.value.backgroundColor = 'transparent';
    }
  },
  { immediate: true }
);

</script>
