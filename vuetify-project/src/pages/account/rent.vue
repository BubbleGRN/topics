<template>
  <v-container>
    <v-row style="position: relative; top: 80px;">
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.rent') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-row class="d-flex" style="overflow-x: auto; white-space: nowrap;">
          <template v-for="item in rents" :key="item._id">
            <v-col cols="12" sm="6" md="4" lg="3" style="display: inline-block; margin-right: 16px;">
              <v-card>
                <v-img :src="item.product.image" aspect-ratio="1.5"></v-img>
                <v-card-title>{{ item.product.name }}</v-card-title>
                <v-card-text>
                  <div><strong>{{ $t('rent.date') }}:</strong> {{ item.date }}</div>
                  <div><strong>{{ $t('rent.location') }}:</strong> {{ item.location }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAxios } from '@/composables/axios'

const { apiAuth } = useAxios()
const rents = ref([])

const getRents = async () => {
  try {
    const { data } = await apiAuth.get('/user/rent')
    rents.value = data.result
  } catch (error) {
    console.log(error)
  }
}
getRents()
</script>
