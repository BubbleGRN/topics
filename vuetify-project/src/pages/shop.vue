<template>
  <v-container>
    <v-row class="pt-10">
      <v-col>
      <v-btn style="background: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzX4WPbV--a55dKUnsGOLqA9i0cyla97F1tQ&s"
            height="225px"
          ></v-img>
          <v-card-title>
            Airsoft Gun 氣槍
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://m.media-amazon.com/images/I/71edrRO8qhL._AC_UY1000_.jpg"
            height="200px"
          ></v-img>
          <v-card-title class="mt-7">
            Vest 背心護具等
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://kamaradsvyhodami.cz//uploads/7c6aabe441ac72dee9eb2a4f7a326a8254bc0a4a.png"
            height="220px"
          ></v-img>
          <v-card-title class="mt-3">
            Backage 背包
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    </v-row>
    <v-row class="pt-10">
      <v-col>
      <v-btn style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://i.pinimg.com/736x/6c/b0/b3/6cb0b37327a544edefbdb6ac147b1386.jpg"
            height="225px"
          ></v-img>
          <v-card-title class="mt-3">
            Helmet 頭盔
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://i.ebayimg.com/00/s/MTMzM1gxNjAw/z/bykAAOSwvP1k7Ieo/$_57.JPG?set_id=8800005007"
            height="225px"
          ></v-img>
          <v-card-title class="mt-3">
            BB 子彈
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlykx70-J31RFfsgdvuE-0VdKi7zjT7lEgBA&s"
            height="225px"
          ></v-img>
          <v-card-title class="mt-3">
            Others 其他
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    </v-row>
  </v-container>
</template>

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
