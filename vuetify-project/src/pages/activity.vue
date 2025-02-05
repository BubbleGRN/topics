<template>
  <v-container class="activity_position">
    <v-row>
      <v-col cols="12" md="4">
    <v-row>
      <v-col cols="12">
        <v-carousel
        height="400"
        :show-arrows="false"
        hide-delimiters
        cycle
        hide-delimiter-background
        style="width: 95%;"
        >
        <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
        <v-text>注意事項:</v-text>
        <v-card class="bg-primary-darken-1" style="border-width: 20px; height: 405px;">
          <div class="d-flex flex-row h-100">
            <v-text class="scrollable-card bg-secondary">
              1. 安全須知: <br>
              裝備準備：生存遊戲可能需要特定的裝備，例如防水衣物、登山靴、急救包、食物和水等。 <br>
              環境危險：如果是在野外環境進行遊戲，需了解可能的危險，如野生動物、天氣變化、地形隱患等。 <br>
              急救常識：在遇到意外情況時，懂得一些急救技能，如處理割傷、骨折、脫水等狀況。 <br>
              2. 心理挑戰: <br>
              應對壓力：生存遊戲中的不確定性和挑戰會考驗你的心理素質，如何保持冷靜並作出正確決策是非常重要的。 <br>
              耐性和毅力：遊戲過程中可能會遇到困難，鍾大智需要保持毅力，面對挑戰不輕言放棄。 <br>
              3. 倫理和規範: <br>
              遵守規則：遊戲中通常有明確的行為規範，避免作弊或不公平行為，尊重其他玩家。 <br>
              尊重環境：如果遊戲進行在戶外，要注意環保和可持續性，避免破壞自然環境。
            </v-text>
      </div>
    </v-card>
    </v-col>
  </v-row>
</v-col>
<v-col cols="12" md="8">
  <v-card style="width: 100%; height: 100%;" color="primary">
    <v-card-title class="d-flex">
      <span class="headline">活動列表 :</span>
      <v-spacer></v-spacer>
      <v-btn color="secondary">創建</v-btn>
    </v-card-title>
    <v-card class="bg-bright ms-6" width="95%" height="90%">
      <v-card-item>
        <v-row>
          <v-col v-for="(event, index) in eventes" :key="event._id" cols="6">
            <v-card class="d-flex flex-column align-center pa-3" @click="openDialog(index)">
          <v-img :src="event.image" height="200px" contain></v-img>

          <v-card-title>{{ event.name }}</v-card-title>
          <v-card-subtitle>價格: ${{ event.price }}</v-card-subtitle>
          <v-card-subtitle>主持人: {{ event.host }}</v-card-subtitle>

          <!-- 可選的顯示其他基本資料 -->
          <v-card-actions>
            <v-btn color="primary" @click="openDialog(index)">查看詳細資訊</v-btn>
          </v-card-actions>
        </v-card>
          </v-col>
          <v-col cols="6">
            <v-btn class="d-flex flex-column" style="width: 100%; height: 100%; padding: 0;">
            <v-card>
              <v-card-title>活動2</v-card-title><br>
              <v-card-subtitle>$400</v-card-subtitle><br>
              <v-card-text>主持人:XXX</v-card-text>
            </v-card>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
</v-card>
</v-col>
</v-row>

<v-dialog v-for="(event, index) in eventes" :key="'dialog-' + event._id" v-model="dialogStates[index]" max-width="500px">
      <v-card>
        <v-card-title class="headline">{{ event.name }}</v-card-title>

        <v-card-text>
          <p>價格：${{ event.price }}</p>
          <p>主持人：{{ event.host }}</p>
          <p>保險：{{ event.insurance ? '有' : '無' }}</p>
          <p>{{ event.description }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="blue" @click="closeDialog(index)">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

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
            src: 'https://bookmestatic.net.nz/bookme-product-images/products/71967/71967_image1_fzQYhXxiaQ_AJGR_20240128_140907.jpg',
          },
          {
            src: 'https://www.abbeysupply.com/res/Airsoft-tactics.jpg',
          },
          {
            src: 'https://www.xtremeparkadventures.com/wp-content/uploads/2019/05/Airsoft-Fields-in-Raleigh.jpg',
          },
          {
            src: 'https://images.squarespace-cdn.com/content/v1/5ac9360aaa49a16d3b6ef162/1704673733296-7BXYQSGFXY5NJ4X8V93G/Untitled+design+%285%29.png?format=2500w',
          },
        ],
      tab: 'option-1',
      }
    },
}

import { ref, onMounted } from 'vue'
import { useAxios } from '@/composables/axios' // 假設這是你用來調用API的自定義組件

const { api } = useAxios()
const items = ref([])
const dialogStates = ref([])

const getItems = async () => {
  try {
    const response = await api.get('/events') // 假設你的後端 API 是這樣
    items.value = response.data
    // 根據資料長度設置對話框狀態的初始值（每個項目一個對應的對話框狀態）
    dialogStates.value = new Array(items.value.length).fill(false)
  } catch (error) {
    console.error('無法獲取活動資料', error)
  }
}

const openDialog = (index) => {
  dialogStates.value[index] = true
}

// 關閉對話框
const closeDialog = (index) => {
  dialogStates.value[index] = false
}

// 只在組件掛載時載入資料
onMounted(() => {
  getItems()
})
</script>

<route lang="yaml">
meta:
  login: false
  admin: false
  title: 'nav.home'
</route>

<style>
.v-slide-group--vertical .v-tab__slider {
    top: 68px;
    height: 100%;
    width: 100% !important;
    background: rgba(45,75,42,1);
    z-index: -1;
}

.scrollable-card {
  max-height: 365px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #7A9A5E #D1C18B;
}

.background-home {
  max-width: 1920px;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 100px;
  padding-right: 0px;
  padding-top: 0px;
  background: url(../../img/soldier.jpg) no-repeat;
  background-size: cover;
}

.activity_position {
  position: relative;
  top: 60px;
}

.v-btn__content {
  width: 100%;
}

.v-card-item .v-card {
  background: #7A9A5E;
  width: 100%;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
}
</style>
