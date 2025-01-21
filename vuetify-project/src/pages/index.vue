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
        <v-card class="bg-secondary" style="border-width: 20px;">
          <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="vertical"
        class="w-100 bg-primary-darken-1 justify-content-center"
        slider-color="transparent"
        color="white"
        dark
        flat
      >
        <v-tab text="氣槍" value="option-1" class=""></v-tab>
        <v-tab text="護具" value="option-2" class=""></v-tab>
        <v-tab text="背包" value="option-3" class=""></v-tab>
        <v-tab text="頭盔" value="option-4" class=""></v-tab>
        <v-tab text="子彈" value="option-5" class=""></v-tab>
        <v-tab text="其他" value="option-6" class=""></v-tab>
        <v-tab text="租借" value="option-7" class=""></v-tab>
      </v-tabs>
      </div>
    </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card>
    <v-toolbar color="primary" title="詳細資訊">
    </v-toolbar>
      <v-tabs-window v-model="tab" style="border: 20px solid #2D4B2A; height: 310px;">
        <v-tabs-window-item value="option-1">
          <v-card flat>
            <v-card-text v-scroll>
              <p>
                在生存遊戲中，氣槍通常是用來模擬真實武器射擊的一種道具。它透過壓縮氣體（如二氧化碳或空氣）來發射BB彈或其他小型彈丸。氣槍的設計可以非常接近真實槍械，並且能提供一種比較安全且低傷害的射擊體驗，適合於模擬戰爭、競技射擊或戶外生存遊戲。
              </p>

              <h2>氣槍的特點：</h2>
              <p>
                動力系統：氣槍一般使用壓縮空氣、CO2或氮氣等氣體作為推動力。CO2氣瓶是最常見的選擇，因為它能提供穩定且持久的動力，讓氣槍的射擊體驗更加真實。

射擊方式：氣槍的射擊方式可以分為單發、連發或半自動。根據型號的不同，玩家可以選擇合適的射擊模式來進行遊戲。

彈藥：氣槍通常使用BB彈作為彈藥，BB彈是小型塑膠球，直徑大約為6mm。這種彈藥的優點是便宜、輕便且較為安全。

精度與射程：雖然氣槍的射程通常不及真實武器，但高品質的氣槍仍能提供相對精確的射擊。射程通常在30至50米之間，但也有一些高端型號能夠達到更遠的射程。

遊戲模式：氣槍常用於生存遊戲（例如Airsoft或Paintball），這些遊戲通常包括策略、合作與模擬戰鬥，玩家需要利用氣槍來進行對抗、執行任務或佔領區域。

安全性：雖然氣槍的彈丸速度較低，比起真實武器安全許多，但仍需要佩戴防護裝備，特別是眼睛和臉部防護，以避免受傷。
              </p>

              <h2>氣槍的應用：</h2>
              <p class="mb-0">
                生存遊戲（Airsoft）：氣槍在生存遊戲中是一個重要的道具，玩家通過這些氣槍模擬戰鬥，進行團隊合作或對抗。這些遊戲通常有不同的任務目標和規則，並且注重策略和戰術。

訓練工具：氣槍也可用作槍械訓練工具，幫助玩家練習瞄準和射擊技巧。它相對便宜且無需使用實彈，因此是一種較為安全的訓練選擇。
              </p>
            </v-card-text>
          </v-card>
        </v-tabs-window-item>

        <v-tabs-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-tabs-window-item>

        <v-tabs-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
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
      tab: 'option-1',
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

<style>
.v-slide-group--vertical .v-tab__slider {
    top: 0;
    height: 100%;
    width: 100% !important;
    background: rgba(45,75,42,1);
    z-index: -1;
}
</style>


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
