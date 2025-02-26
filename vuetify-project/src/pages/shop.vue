<template>
  <div class="backgroundIMG">
  <v-container>
    <v-row style="padding-top: 100px;">
      <v-col>
      <v-btn to="/InsideShop/InsideShop_Gun" style="background: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzX4WPbV--a55dKUnsGOLqA9i0cyla97F1tQ&s"
            height="225px"
          ></v-img>
          <v-card-title style="text-align: center;">
            Airsoft Gun 氣槍
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn to="/InsideShop/InsideShop_Vest" style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://m.media-amazon.com/images/I/71edrRO8qhL._AC_UY1000_.jpg"
            height="200px"
          ></v-img>
          <v-card-title class="mt-7" style="text-align: center;">
            Vest 背心護具等
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn to="/InsideShop/InsideShop_Backpack" style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://kamaradsvyhodami.cz//uploads/7c6aabe441ac72dee9eb2a4f7a326a8254bc0a4a.png"
            height="220px"
          ></v-img>
          <v-card-title class="mt-3" style="text-align: center;">
            Backpack 背包
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    </v-row>
    <v-row class="pt-10">
      <v-col>
      <v-btn to="/InsideShop/InsideShop_Helmet" style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://i.pinimg.com/736x/6c/b0/b3/6cb0b37327a544edefbdb6ac147b1386.jpg"
            height="225px"
          ></v-img>
          <v-card-title class="mt-3" style="text-align: center;">
            Helmet 頭盔
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn to="/InsideShop/InsideShop_BB" style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://i.ebayimg.com/00/s/MTMzM1gxNjAw/z/bykAAOSwvP1k7Ieo/$_57.JPG?set_id=8800005007"
            height="225px"
          ></v-img>
          <v-card-title class="mt-3" style="text-align: center;">
            BB 子彈
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    <v-col>
      <v-btn to="/InsideShop/InsideShop_Other" style="background-image: url(../../img/mixcolor.jpg); background-size: cover; width: 570px; height: 350px;">
        <v-card height="300" width="520">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlykx70-J31RFfsgdvuE-0VdKi7zjT7lEgBA&s"
            height="225px"
          ></v-img>
          <v-card-title class="mt-3" style="text-align: center;">
            Others 其他
          </v-card-title>
        </v-card>
      </v-btn>
    </v-col>
    </v-row>
  </v-container>
</div>
</template>

<route lang="yaml">
meta:
  login: true
  title: 'nav.shop'
</route>

<style>
.backgroundIMG {
  background: url(../../img/jungle-navbar.png) no-repeat center top;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
