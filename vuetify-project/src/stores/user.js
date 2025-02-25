// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import UserRole from '@/enums/UserRole'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const role = ref(UserRole.USER)
  const cart = ref([])
  const rent = ref([])

  const isLoggedIn = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const avatar = computed(() => {
    return `https://api.multiavatar.com/${account.value}.png`
  })

  const login = (data) => {
    if (data.token) {
      token.value = data.token
    }
    account.value = data.account
    role.value = data.role
    cart.value = data.cart || []
  }

  const logout = () => {
    token.value = ''
    account.value = ''
    role.value = UserRole.USER
    cart.value = []
  }

  return {
    token, account, role, cart,
    isLoggedIn, isAdmin, avatar,
    login, logout, rent
  }
}, {
  persist: {
    key: 'shop-user',
    pick: ['token', 'cart']
  }
})
