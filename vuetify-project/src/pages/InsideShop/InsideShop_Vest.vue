<template>
  <v-container class="position">
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-container v-if="filteredProducts.length === 0" class="text-center">
        <v-alert type="info" color="grey lighten-4" class="ma-4">
          無資料，可至商城購買物品
        </v-alert>
      </v-container>
      <v-col v-for="product of filteredProducts" :key="product._id" cols="12" md="6" lg="3" >
        <product-card v-bind="product" style="height: 560px"></product-card>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-right"><v-btn to="/shop" prepend-icon="mdi-keyboard-backspace">返回上一頁</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAxios } from '@/composables/axios'
import ProductCard from '@/components/ProductCard.vue'

const { api } = useAxios()

const ITEMS_PER_PAGE = 2
const currentPage = ref(1)
const totalPage = computed(() => Math.ceil(filteredtotalProduct.value.length / ITEMS_PER_PAGE))

const products = ref([])
const search = ref('')

const filteredtotalProduct = computed(() => {
  return products.value
    .filter ( product => product.category === 'gun' && product.name.toLowerCase().includes(search.value.toLowerCase()))
})

const filteredProducts = computed(() => {
  return products.value
    .filter ( product => product.category === 'vest' && product.name.toLowerCase().includes(search.value.toLowerCase()))
    // 一頁 2 筆
    // 第 1 頁 = 0 ~ 1
    // 第 2 頁 = 2 ~ 3
    // 第 3 頁 = 4 ~ 5
    // .slice(開始索引, 結束索引)
    // 不包含結束索引
    .slice((currentPage.value - 1) * ITEMS_PER_PAGE, currentPage.value * ITEMS_PER_PAGE)
})

const getProducts = async () => {
  try {
    const { data } = await api.get('/product')
    products.value.push(...data.result)
  } catch (error) {
    console.log(error)
  }
}
getProducts()
</script>

<route lang="yaml">
  meta:
    login: true
    title: 'nav.shop'
  </route>

<style>
  .position {
    position: relative;
    top: 60px;
  }
</style>
