<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
      </v-col>
      <v-col v-for="product of filteredProducts" :key="product._id" cols="12" md="6" lg="3" >
        <product-card v-bind="product"></product-card>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="bg-primary">
          <v-col>
            <v-list
            class="py-0 text-center bg-lime-lighten-1 w-100"
            :items="choices"
            >
            </v-list>
          </v-col>
    </v-card>
    </v-col>
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
const totalPage = computed(() => Math.ceil(products.value.length / ITEMS_PER_PAGE))

const products = ref([])
const search = ref('')
const filteredProducts = computed(() => {
  return products.value
    .filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()))
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

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        choices: [
        {
          title: '氣槍',
            value: 1,
        },
        {
          title: '護具',
          value: 2,
        },
        {
          title: '背包',
          value: 3,
        },
        {
          title: '頭盔',
          value: 4,
        },
        {
          title: '子彈',
          value: 5,
        },
        {
          title: '其他',
          value: 6,
        },
        {
          title: '租借',
          value: 7,
        },
      ],
      }
    },
  }
</script>

<route lang="yaml">
meta:
  login: false
  admin: false
  title: 'nav.home'
</route>


<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-col v-for="product of filteredProducts" :key="product._id" cols="12" md="6" lg="3" >
        <product-card v-bind="product"></product-card>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
      </v-col>
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
const totalPage = computed(() => Math.ceil(products.value.length / ITEMS_PER_PAGE))

const products = ref([])
const search = ref('')
const filteredProducts = computed(() => {
  return products.value
    .filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()))
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
  login: false
  admin: false
  title: 'nav.home'
</route> -->
