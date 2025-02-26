<template>
  <v-carousel
    id="ava"
    :show-arrows="false"
    hide-delimiters
    cycle
    hide-delimiter-background
    style="width: 100vw; height: 1020px;"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="scale-transition"
      transition="scale-transition"
    >
    <v-text class="my-animation custom-text" style="font-size: 5rem; position: relative; top: -30px;left: 20px;">
      {{ item.text }}
    </v-text>
    </v-carousel-item>
  </v-carousel>
  <div id="main-content">
    <v-container style="padding: 0px; margin: 0px; position: absolute; top: 150px;">
      <v-row>
        <v-col cols="12" style="">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
        <v-text class="custom-text" style="color: #2D4B2A;">詳細資訊 Details</v-text>
        </v-col>
      </v-row>
    <v-row>
      <v-col cols="12" md="12" style="margin-left: 7rem;">
        <v-card style="width: 93%;">
      <v-toolbar color="primary" class="d-flex pt-5">
        <v-spacer></v-spacer>
        <div class="d-flex flex-row w-100">
        <v-tabs
          v-model="tab"
          direction="horizontal"
          class="d-flex bg-primary justify-space-around full-width px-5"
          color="white"
          dark
          flat
          style="border: 1px solid #2D4B2A;"
        >
          <v-tab text="氣槍" value="option-1" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
          <v-tab text="護具" value="option-2" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
          <v-tab text="背包" value="option-3" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
          <v-tab text="頭盔" value="option-4" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
          <v-tab text="子彈" value="option-5" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
          <v-tab text="其他" value="option-6" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
          <v-tab text="租借" value="option-7" class="tab-item custom-text" style="font-size: 20px;"></v-tab>
        </v-tabs>
      </div>
      </v-toolbar>
        <v-tabs-window v-model="tab" style="border: 20px solid #2D4B2A;">
          <v-tabs-window-item value="option-1">
            <v-card flat class="pa-6">
                <v-card-title style="text-align: center;">
                  <h3 style="font-style: italic; color: #2D4B2A;">
                    氣槍是透過壓縮氣體發射BB彈等彈丸，模擬真實武器射擊，適用於生存遊戲、競技射擊等活動，安全且低傷害。
                  </h3>
                  <br>
                </v-card-title>

                <v-row>
                  <v-col cols="6" class="px-10" style="background-color: #D1C18B;">
                    <h2>氣槍的特點：</h2>
                    <br>
                    <p class="mb-10" style="line-height: 40px;">
                      動力系統：氣槍一般使用壓縮空氣、CO2或氮氣等氣體作為推動力。CO2氣瓶是最常見的選擇，因為它能提供穩定且持久的動力，讓氣槍的射擊體驗更加真實。<br>

                      射擊方式：氣槍的射擊方式可以分為單發、連發或半自動。根據型號的不同，玩家可以選擇合適的射擊模式來進行遊戲。<br>

                      彈藥：氣槍通常使用BB彈作為彈藥，BB彈是小型塑膠球，直徑大約為6mm。這種彈藥的優點是便宜、輕便且較為安全。<br>

                      精度與射程：雖然氣槍的射程通常不及真實武器，但高品質的氣槍仍能提供相對精確的射擊。射程通常在30至50米之間，但也有一些高端型號能夠達到更遠的射程。<br>

                      遊戲模式：氣槍常用於生存遊戲（例如Airsoft或Paintball），這些遊戲通常包括策略、合作與模擬戰鬥，玩家需要利用氣槍來進行對抗、執行任務或佔領區域。<br>

                      安全性：雖然氣槍的彈丸速度較低，比起真實武器安全許多，但仍需要佩戴防護裝備，特別是眼睛和臉部防護，以避免受傷。<br>
                    </p>
                  </v-col>
                  <v-col cols="6">
                  <v-img
                  src="../../img/airsoft_gun.gif"
                  style="width: 100%; height: 100%; object-fit: cover;"
                ></v-img>
              </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" class="px-10">
                <v-img
                  src="../../img/airsoft-gun-gas.gif"
                  style="width: 100%; height: 100%; object-fit: cover;"
                ></v-img>
              </v-col>
              <v-col cols="6" style="background-color: #D1C18B;">
                <h2>氣槍的應用：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  生存遊戲（Airsoft）：氣槍在生存遊戲中是一個重要的道具，玩家通過這些氣槍模擬戰鬥，進行團隊合作或對抗。這些遊戲通常有不同的任務目標和規則，並且注重策略和戰術。<br>

                  訓練工具：氣槍也可用作槍械訓練工具，幫助玩家練習瞄準和射擊技巧。它相對便宜且無需使用實彈，因此是一種較為安全的訓練選擇。<br>
                </p>
              </v-col>
              </v-row>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="option-2">
            <v-card flat class="pa-6">
              <v-card-title>
                <h3 style="font-style: italic; color: #2D4B2A;">
                  生存遊戲中的護具增加角色生存機會，減少傷害風險。護具種類、效果和材質依遊戲設定不同，但有共同特徵，以下是常見類型：
                </h3>
                <br>
              </v-card-title>

              <div>
              <v-img
                  :width="500"
                  height="500"
                  src="../../img/airsoft_vest.gif"
                  class="float-end"
                  style="margin-right: 200px;"
                ></v-img>
                <h2>防彈背心/防護衣：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  這類護具主要用來保護上半身，尤其是胸部和腹部，減少來自槍械或其他武器的傷害。<br>
                  在一些遊戲中，防彈背心可能會提供額外的防護層數，增加承受多次攻擊的能力。<br>
                </p>

                <h2>護腿/護膝：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  護腿或護膝主要用來保護下半身，特別是大腿和膝蓋部位，對於減少跌倒或被擊中後的傷害有一定效果。<br>
                  一些遊戲中，護腿還能增加角色的移動速度或抗擊打能力。<br>
                </p>

                <h2>護手/手套：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  護手或手套主要用來保護手部，避免在近戰攻擊中受到傷害。<br>
                  在某些遊戲中，護手還可能提高角色的攀爬、挖掘或其他操作能力。<br>
                </p>
              </div>

              <div style="clear: both;">
                <v-img
                  :width="700"
                  cover
                  src="../../img/airsoft_glasses.gif"
                  class="float-start mr-10"
                ></v-img>
                <h2>護目鏡/面罩：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  這些裝備用來保護角色的眼睛和面部，避免受到煙霧、沙塵、化學物質或敵人攻擊的傷害。<br>
                  在一些遊戲中，護目鏡還能提供夜視或熱感應視覺等特殊功能。<br>
                </p>

                <h2>護甲：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  護甲是全面性的防護裝備，通常由金屬、合成材料或其他堅固材質製成，能有效減少來自各種武器（如刀劍、槍械等）的傷害。<br>
                  護甲的防禦能力可能會隨著材質的不同而有所差異，例如鋼鐵護甲比皮革護甲提供更高的防禦力。<br>
                </p>

                <h2>盾牌：</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  在一些生存遊戲中，盾牌是可攜帶的防禦裝備，可以用來擋住敵人的攻擊，減少傷害。<br>
                  盾牌通常需要玩家手持並在戰鬥中進行操作。<br>
                </p>
              </div>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="option-3">
            <v-card flat class="pa-6">
              <v-card-title>
                <h3 style="font-style: italic; color: #2D4B2A">
                  生存遊戲中的背包用來存儲資源、工具、武器、藥品等物品，設計和功能根據遊戲不同而異，主要集中於物品管理和空間規劃。
                </h3>
                <br>
              </v-card-title>

              <v-img
                  :width="600"
                  height="700"
                  src="../../img/pngegg.png"
                  class="float-end mr-10"
                ></v-img>
                <h2>背包容量與格子系統</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  大多數生存遊戲中的背包會有固定的容量，通常以格子來表示。例如，一個背包可能有 10x5 格（50 格）來放置物品。每個物品佔據一定的格子，且有些物品可能會佔用多格（例如大箱子或武器）。隨著遊戲進展，玩家可能會解鎖更大的背包或增加更多的格子，從而存儲更多的物品。
                </p>

                <h2>背包分類</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  為了更方便管理物品，許多生存遊戲會提供物品分類功能，通常會根據物品的種類來自動或手動分類。例如： <br>
                  1. 食物類：如罐頭、草藥、肉類等。<br>
                  2. 工具類：如斧頭、鏟子、火把等。<br>
                  3. 武器類：如槍、刀、弓箭等。<br>
                  4. 醫療類：如急救包、藥品等。<br>
                  5. 建材類：如木材、石塊、鐵礦等。<br>
                  這些分類能幫助玩家更快捷地找到需要的物品，減少時間浪費。
                </p>

                <h2>背包的重量與耐力</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  有些遊戲會加入背包的重量系統。每個物品會有不同的重量，當玩家的背包超過一定重量時，可能會影響角色的移動速度或耐力。在這種情況下，玩家需要考慮攜帶哪些物品，避免背包過重導致移動不便或體力下降。
                </p>

                <v-img
                  :width="750"
                  height="800"
                  src="../../img/airsoft_backpack.png"
                  class="float-start mr-10"
                ></v-img>
                <h2>背包管理與物品整理</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  隨著遊戲進程，玩家可能會遇到需要大量管理物品的情況。這時，玩家需要定期整理背包，丟棄不需要的物品、分配物品的存放位置或在背包中進行交換。這樣的物品管理系統會讓遊戲變得更加挑戰性，要求玩家不僅要收集資源，還要合理地規劃和整理物品。
                </p>

                <h2>背包升級與擴展</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  很多生存遊戲會讓玩家通過升級或解鎖新的背包來擴展儲物空間。這些背包升級可能需要玩家製作特定的材料或達到某些遊戲成就。例如，在某些遊戲中，玩家可能需要製作一個更大的背包，才能攜帶更多資源。背包的升級過程可能伴隨著遊戲的探索和進步，提供更多的策略選擇。
                </p>

                <h2>背包與裝備切換</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  在某些生存遊戲中，背包不僅僅是物品存儲的地方，還可能涉及裝備管理。例如，玩家可以在背包中選擇攜帶的武器、工具、護具等裝備，並在需要時迅速切換。這樣的系統可以讓玩家根據當前情況選擇最合適的裝備，提高生存機會。
                </p>

                <h2>背包與安全性</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  某些遊戲中的背包可能與玩家的生存或安全性息息相關。例如，玩家可能需要選擇一個防水、耐磨的背包來應對極端的環境，或者背包中可能需要特定的物品來對抗某些敵人或環境挑戰。
                </p>

                <h2>背包損壞或丟失</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  在某些遊戲中，背包也有可能遭遇損壞或丟失。例如，玩家可能會因為某些原因（如跌落、遭到敵人襲擊或倉庫被入侵）而失去部分物品。這樣的設計增加了遊戲的風險和挑戰，要求玩家更加小心謹慎地管理自己的背包。
                </p>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="option-4">
            <v-card flat class="pa-6">
              <v-card-title>
                <h3 style="font-style: italic; color: #2D4B2A">
                  在生存遊戲中，頭盔是常見的護具之一，主要用來保護角色的頭部，減少來自敵人攻擊或環境危險造成的傷害。頭盔的設計、效果以及功能根據遊戲的不同會有所不同，以下是有關頭盔的一些詳細介紹：
                </h3>
                <br>
              </v-card-title>

              <v-img
                  :width="700"
                  height="700"
                  src="../../img/airsoft_helmet.png"
                  class="float-end ml-10"
                ></v-img>
                <h2>頭盔的基本功能</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  頭盔的基本功能是提供防護，尤其是防止來自槍擊、近戰武器、爆炸或其他環境危險對頭部的傷害。在許多生存遊戲中，頭部是受傷最致命的部位，因此擁有一個堅固的頭盔對提高生存機會至關重要。
                </p>

                <h2>不同類型的頭盔</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  根據遊戲的不同，頭盔會有不同的類型與材質，每種頭盔提供的保護和效果也會不同： <br>
                  1. 布料/皮革頭盔： 這類頭盔通常是遊戲初期可以獲得的護具，防護效果較弱，但重量輕，適合遊戲初期使用。<br>
                  2. 鋼鐵/金屬頭盔： 這些頭盔通常提供更高的防護能力，能有效抵擋來自敵人武器（如槍械、弓箭等）的傷害。金屬頭盔在遊戲中往往需要更高的製作成本或更長的時間來解鎖。<br>
                  3. 戰術頭盔： 戰術頭盔通常是專為軍事或極端環境設計，能有效保護頭部並提供額外的功能，如夜視、瞄準輔助等。在一些遊戲中，這類頭盔可能還附帶防爆設計或能承受更強烈的衝擊。<br>
                  4. 防彈頭盔： 防彈頭盔專門用來對抗槍擊或爆炸衝擊，通常比普通的頭盔更為堅固，適合面對高危險的敵人或環境。<br>
                </p>

                <h2>頭盔的額外效果</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  在某些生存遊戲中，頭盔除了提供物理防護外，還可能提供其他特殊功能： <br>
                  1. 增加視野範圍：例如，一些高科技頭盔會提供增強視野的功能（例如夜視模式、紅外線視覺等），讓玩家能在黑暗或隱蔽的環境中更容易發現敵人或物品。 <br>
                  2. 提升精準度：有些頭盔會與其他裝備（如瞄準鏡）配合使用，提供更高的射擊精準度或增加瞄準輔助。 <br>
                  3. 抗衝擊與防爆：某些頭盔會加強抗衝擊性，減少來自爆炸物的傷害，或降低環境危險（如化學氣體、沙塵等）的影響。 <br>
                </p>

                <v-img
                  :width="750"
                  height="700"
                  src="../../img/airsoft_helmet2.png"
                  class="float-start mr-10"
                ></v-img>
                <h2>耐久度與維修</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  許多生存遊戲中，頭盔和其他護具一樣會有耐久度，隨著時間的推移或被攻擊時，頭盔會受到損壞。玩家需要定期檢查頭盔的狀況，並在必要時進行修理或更換。這會增加遊戲的挑戰性和策略性，玩家需要考慮如何管理裝備的耐用性。
                </p>

                <h2>頭盔與移動速度</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  在某些遊戲中，頭盔的類型可能會影響角色的移動速度。較重的金屬或防彈頭盔可能會使玩家的移動速度變慢，而輕便的頭盔則不會對移動速度造成太大影響。這意味著，玩家在選擇頭盔時需要考慮到防護與機動性之間的平衡。
                </p>

                <h2>頭盔的搭配與選擇</h2>
                <br>
                <p class="mb-10" style="line-height: 40px;">
                  在生存遊戲中，選擇合適的頭盔往往取決於玩家的需求和遊戲的戰鬥方式。一般來說，玩家會根據所面對的敵人或環境選擇不同類型的頭盔。例如，在高風險的戰鬥中，防彈頭盔可能是必備的裝備，而在資源匱乏的情況下，輕便的頭盔可能是更實用的選擇。
                </p>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="option-5">
            <v-card flat>
              <v-card-text class="scrollable-card">
                <p style="font-size: larger; font-style: italic; color: #2D4B2A">
                  在生存遊戲中，彈藥主要是指那些由塑膠製成的小球（BB彈），通常是圓形的，並且可以通過不同的槍枝進行發射。除了 BB彈，還有一種被稱為 軟彈（或稱為 泡沫彈）的彈藥，這種彈藥的主要特點是外型和材質的不同，通常會由 泡沫 或 柔軟的材料 製成。下面是一些關於 生存遊戲 彈藥的基本介紹：
                </p>
                <br>

                <h2>軟彈在生存遊戲中的使用</h2>
                <p>
                  軟彈 常見於 氣動彈射武器 或 彈簧彈射武器，並且主要是以 玩具 或 娛樂性質 為主的武器系統。雖然它們在某些生存遊戲中並不常見，但仍然有一些遊戲使用這類彈藥，特別是在 低強度射擊 或是 家庭娛樂 的情境下。<br>

                  相比傳統的BB彈，軟彈在射擊威力和精度方面有所不足，但它提供了更多的安全性和娛樂性，尤其適合兒童或對射擊強度有較低要求的玩家。
                  <br>
                </p>

                <h2>BB彈的基本特徵</h2>
                <p>
                  1. BB彈：這是 Airsoft 遊戲中最常見的彈藥，通常由塑膠製成，直徑為 6mm 或 8mm，大部分的 Airsoft 武器都使用6mm的BB彈。<br>
                  2. 6mm BB彈：最常見的大小，適用於大多數的 Airsoft 武器。<br>
                  3. 8mm BB彈：較少見，通常用於某些大型的 Airsoft 槍枝，這些彈藥比較重，飛行穩定性較好，但因為較大，因此其速度通常較慢。<br>
                </p>

                <h2>BB彈的材質</h2>
                <p>
                  1. 標準塑膠BB彈：最常見的BB彈，使用普通的塑膠材質，通常是白色或黑色。這些彈藥是最便宜且最常見的選擇。<br>
                  2. 高性能BB彈：這些BB彈可能會使用更高品質的塑料或合成材料，對於某些高精度的 Airsoft 玩家來說，這些BB彈的飛行穩定性和精度更好。常見品牌如 G&G 或 MadBull 等會製造這些較為精緻的BB彈。<br>
                  3. 生物降解BB彈：為了保護環境，越來越多的 Airsoft 玩家選擇使用可降解的BB彈，這些BB彈在暴露於自然環境中時會分解，不會對環境造成污染。<br>
                </p>

                <h2>BB彈的重量</h2>
                <p>
                  BB彈的重量會影響其飛行軌跡和射程，較重的BB彈可以更穩定地飛行，並且不容易受風影響，但同時會降低射擊速度。常見的重量有： <br>
                  1. 0.12g：這種輕型BB彈常用於入門級槍械，適合短距離射擊，但精度較低。 <br>
                  2. 0.20g：這是最常見的中等重量BB彈，適用於大多數中低功率的 Airsoft 槍支，精度與射程比較平衡。 <br>
                  3. 0.25g、0.28g、0.30g：這些較重的BB彈主要用於高性能槍支，尤其是對射程和精度有較高要求的玩家。 <br>
                  4. 0.40g及以上：這些超重BB彈適用於高端的狙擊槍或高精度的射擊需求，通常用於長距離射擊，飛行穩定性非常高。 <br>
                </p>

                <h2>BB彈的顏色</h2>
                <p>
                  1. 白色：最常見的顏色，視覺上較為明顯，便於觀察射擊軌跡，常見於大多數 Airsoft 遊戲中。 <br>
                  2. 黑色：一些高端的BB彈，通常用於需要更高隱蔽性的環境中，這樣不容易被對方發現。黑色BB彈通常會在黑暗的環境中使用較多。 <br>
                  3. 透明或其他顏色：也有一些特殊顏色的BB彈（例如藍色、紅色等），主要是為了區分品牌或特定用途，這些顏色的BB彈並不影響性能。<br>
                </p>

                <h2>BB彈的使用與選擇</h2>
                <p>
                  在 Airsoft 遊戲中，選擇合適的BB彈對於射擊的精度、射程和遊戲表現有很大的影響。以下是一些選擇BB彈時需要注意的因素： <br>
                  1. 槍械類型：不同的 Airsoft 槍支（例如 電動槍、氣動槍、彈簧槍）對BB彈的需求會有所不同。一般來說，電動槍和氣槍對BB彈的要求會更高，需要選擇較高品質的BB彈來保證穩定性和精度。 <br>
                  2. 射擊距離與精度：若你偏好遠距離射擊，選擇較重的BB彈會有助於提高射程和精度。而如果是在近距離的激烈戰鬥中，輕型的BB彈可能更合適，因為它們射速更快。 <br>
                  3. 遊戲環境：在室內的狹小空間或高密度區域，通常會選擇較輕的BB彈，以便快速射擊；在戶外較開闊的場地，則會使用較重的BB彈來應對風速等環境因素的影響。 <br>
                </p>

                <h2>BB彈的保養與存儲</h2>
                <p>
                  1. 存儲：BB彈應保存在乾燥、陰涼的地方，避免潮濕或高溫，因為這樣可能會影響BB彈的品質或導致其變形。<br>
                  2. 避免劣質BB彈：劣質的BB彈可能會有不規則的形狀或瑕疵，這會影響槍支的性能，甚至可能導致槍械故障。高品質的BB彈會更加平滑、圓形，從而提高射擊精度和穩定性。<br>
                </p>

                <h2>一些常見的BB彈品牌</h2>
                <p class="mb-10">
                  G&G、MadBull、KWA、ASG、Elite Force 等品牌生產高品質的BB彈，這些品牌的BB彈在精度、穩定性和耐用性上都非常優秀，受到許多 Airsoft 玩家推崇。
                </p>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="option-6">
            <v-card flat>
              <v-card-text class="scrollable-card">
                <p style="font-size: larger; font-style: italic; color: #2D4B2A">
                  常見的額外裝備和物品
                </p>
                <br>

                <h2>戰術服與衣物</h2>
                <p>
                  1. 戰術服：這些衣物通常具有多口袋設計，用於攜帶額外的彈藥、工具和其他裝備。戰術服的材質通常是耐用且透氣的，適合長時間穿著。<br>
                  常見品牌如 5.11 Tactical 和 Condor。<br>
                  2. 迷彩服：為了在遊戲中更好地融入環境，許多玩家會穿著迷彩服。迷彩服有多種樣式，根據不同的地圖環境（如森林、沙漠等）選擇合適的迷彩樣式。<br>
                </p>

                <h2>戰術腰帶與掛包</h2>
                <p>
                  1. 戰術腰帶：用來固定各種裝備和配件，如彈匣、手槍、急救包等。這些腰帶有助於提高攜帶物品的方便性。<br>
                  2. 掛包：掛包通常會用來掛在腰帶或背包上，方便快速取用彈匣、工具或其他必需品。這些包包一般是專為 Airsoft 目的設計，並且多數有不同的容量和分隔，便於收納和快速存取。<br>
                </p>

                <h2>彈匣與彈匣帶</h2>
                <p>
                  1. 額外彈匣：在遊戲中，擁有足夠的彈匣非常重要，尤其是在長時間的對抗中。不同的槍支會有不同型號的彈匣，因此玩家通常會準備多個備用彈匣。<br>
                  2. 彈匣帶：這是一種可掛在腰部的裝置，可以讓玩家方便快速地取用彈匣，這樣在激烈的戰鬥中能快速換彈。<br>
                </p>

                <h2>戰術手套</h2>
                <p>
                  手套：手套能提供額外的手部保護，避免因為摔倒或與物品碰撞而受傷。此外，手套還可以幫助提高抓握力，讓玩家在射擊、操作武器或攀爬時更為舒適。
                </p>

                <h2>戰術眼鏡</h2>
                <p>
                  1. 防護眼鏡：保護眼睛是 Airsoft 中最重要的安全措施之一，專業的 Airsoft 防護眼鏡可以有效防止BB彈或碎片傷害眼睛。通常會有透氣設計，避免起霧。 <br>
                  2. 面罩：如果玩家不想僅僅依賴眼鏡保護面部，可以選擇佩戴全臉面罩來防護面部及下巴，這樣能夠有效保護整個面部不受撞擊。 <br>
                </p>

                <h2>耳機與對講機</h2>
                <p>
                  1. 對講機：在大型的 Airsoft 遊戲中，隊伍之間的協調至關重要，對講機能讓隊員之間保持聯繫，即使在聲音很大的環境下也能溝通。 <br>
                  2. 耳機：有些對講機會搭配耳機，這樣玩家可以在不露出耳朵的情況下聽到指令或隊友的聲音，並減少外界噪音的干擾。 <br>
                </p>

                <h2>射擊瞄具</h2>
                <p>
                  1. 紅點瞄準器：這些瞄準器能幫助玩家快速定位目標，提高射擊精度，特別是在快速移動的目標上。<br>
                  2. 望遠鏡瞄準器：通常用於狙擊槍上，可以提供高倍率的放大，幫助玩家在遠距離精確擊中目標。<br>
                </p>

                <h2>急救包</h2>
                <p>
                  1. 急救包：生存遊戲中可能會遇到輕微的傷害或擦傷，擁有一個急救包能夠迅速處理這些小問題，避免因傷害而影響遊戲進行。急救包通常包括創可貼、繃帶、消毒液等基本物品。<br>
                </p>

                <h2>水壺與飲水系統</h2>
                <p>
                  1. 水壺：生存遊戲通常需要長時間活動，保持水分非常重要。攜帶水壺可以確保隨時能夠補充水分，避免脫水。<br>
                  2. 水袋/水袋背包：有些玩家選擇使用水袋背包（如 Camelbak），這種裝備可以讓玩家在不需要停下來的情況下，通過管子隨時喝水，非常方便。<br>
                </p>

                <h2>手電筒與照明設備</h2>
                <p>
                  1. 手電筒：在暗光環境或夜間遊戲中，手電筒可以提供必要的照明，幫助玩家識別周圍的環境。<br>
                  2. 頭燈：頭燈是一種更方便的照明設備，玩家可以將其佩戴在頭上，這樣雙手就可以自由操作武器。<br>
                </p>

                <h2>煙霧彈與閃光彈</h2>
                <p>
                  1. 煙霧彈：煙霧彈常用於遮掩自己或隊伍的行蹤，為進攻或撤退創造機會。在一些 Airsoft 遊戲中，煙霧彈是很重要的戰術工具。<br>
                  2. 閃光彈：閃光彈可以用來迷惑敵人，造成視覺和聽覺的干擾，讓敵人短時間內無法清楚觀察到周圍情況。<br>
                </p>

                <h2>環境偽裝與隱蔽裝備</h2>
                <p class="mb-10">
                  1. 迷彩網：用於隱蔽或遮掩，特別是在叢林或森林等地形中，迷彩網可以幫助玩家更好地與環境融合。<br>
                  2. 假面具/偽裝服：有些玩家會選擇穿戴特殊的偽裝服，這有助於提高隱蔽性，避免被對手輕易發現。<br>
                </p>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="option-7">
            <v-card flat>
              <v-card-text>
                <p style="font-size: larger; font-style: italic; color: #2D4B2A">
                  租借裝備和武器時應該注意的一些要點：
                </p>
                <br>

                <h2>武器的選擇</h2>
                <p>
                  1. 槍枝類型：不同的遊戲場地會提供不同類型的氣槍，你需要根據自己的遊戲風格選擇合適的武器。<br>
                  2. 射擊模式：某些武器可能提供不同的射擊模式（如全自動、半自動等）。確認所選武器的射擊模式是否符合遊戲需求，並能夠在緊張的對抗中發揮最大效能。<br>
                </p>

                <h2>裝備的合適性</h2>
                <p>
                  大小與舒適度：確保你租借的裝備（如 戰術服、護具、背包 等）與你的身形相符，穿戴舒適。穿著不合適的裝備會影響你的靈活性，並可能影響遊戲表現。<br>
                  1. 護具：確保護具（如胸甲、背甲、膝墊等）能夠提供良好的保護，並不妨礙活動。<br>
                  2. 背包：確認背包的容量是否足夠，是否能輕鬆攜帶所需的彈匣、水壺和其他個人物品。<br>
                </p>

                <h2>配件與備品</h2>
                <p>
                  1. 額外彈匣：在長時間的對抗中，額外的彈匣是非常重要的。確認租借的裝備是否有額外彈匣可以提供，並了解如何快速更換彈匣。<br>
                  2. BB彈：某些地點可能會提供 BB彈，但在一些場合你可能需要自備。確保你所使用的BB彈與所租借的武器匹配，並注意重量和尺寸的選擇，避免使用不合規格的彈藥。<br>
                  3. 急救包：在任何活動中，擁有一個急救包都非常重要。雖然大多數的生存遊戲場地會有急救設施，但帶上一些基本的急救物品，如創可貼、消毒液等，依然是明智的選擇。<br>
                </p>

                <h2>裝備租借條款</h2>
                <p>
                  1. 租借協議：大部分場地都會有裝備租借協議，明確規範租借期間的責任、損壞賠償、設備使用等條款。在租借裝備前，詳細閱讀協議內容，確保自己了解條款，避免出現不必要的糾紛。<br>
                  2. 裝備歸還：了解租借裝備的歸還時間和要求，確保按時將裝備歸還。如果遺失或損壞了裝備，場地通常會要求賠償相應費用。<br>
                </p>

                <h2>保養與使用</h2>
                <p>
                  1. 清潔與保養：如果租借的裝備在使用過程中出現問題（如氣槍不發射或卡彈），應該及時向場地工作人員報告。有些場地會提供基本的設備保養服務，或者在租借前會進行檢查，保證裝備在最佳狀態。 <br>
                  2. 使用技巧：對於一些比較高級的裝備，如狙擊槍或帶瞄準鏡的步槍，建議事先了解如何使用這些設備，避免在遊戲中因操作不當而影響表現。 <br>
                </p>

                <h2>場地規範</h2>
                <p>
                  1. 遊戲規則：不同的生存遊戲場地會有不同的遊戲規則，確保你了解所有遊戲規則和限制，這樣才能有效地運用租借的裝備。某些場地可能對使用的武器有射程、功率等限制。 <br>
                  2. 使用規範：某些場地可能會對裝備的外觀、顏色或裝飾有要求。請在租借前確認是否有特別的規定，以避免租借不合規的裝備。 <br>
                </p>

                <h2>天氣與環境</h2>
                <p class="mb-10">
                  1. 考慮天氣因素：在選擇裝備時，還需要考慮當天的天氣狀況。如果是在室外進行生存遊戲，天氣因素（如高溫、寒冷、下雨等）會對裝備的選擇有所影響。確保裝備具有適應各種天氣條件的能力（例如防水性或透氣性）。<br>
                </p>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

        </v-tabs-window>
    </v-card>
      </v-col>
      </v-row>
    </v-container>
    </div>
    <v-img src="../../img/sniper.jpg" cover style="width: 100vw; height: 100vh; position: absolute; top: 2650px;"></v-img>
    <div id="main-content" style="margin-top: 750px;">
      <v-text class="custom-text" style="text-align: center; position: absolute; top: 220px; width: 100vw; color: #2D4B2A;">關於我們 About Us</v-text>
      <v-card style="width: 90vw; height: 1300px; position: absolute; top: 300px; right: 90px; background-color: transparent; border: none; box-shadow: none;">
        <v-card-text>
          <v-row>
            <v-col cols="6"><v-img src="../../img/soldier2.jpg"></v-img> <v-subtitle style="color: red;">圖片僅供參考</v-subtitle></v-col>
            <v-col cols="6">
              <h2 style="font-size: 20px;">Survivor's Quest 是一款結合生存冒險和策略劇情的遊戲，為玩家提供既具挑戰性又充滿故事性的體驗。在這裡，你不僅僅要面對自然的極限考驗，還要解開一個個謎題、識破隱藏在隊友中的敵人，並在充滿陰謀和驚險的環境中生存下來。</h2><br><br>

              <h2>我們的故事</h2><br>
              在 Survivor's Quest 中，你將被置身於一個神秘的荒野，這裡充滿了危險和謎題。你必須利用各種生存技能來建造庇護所、尋找食物，並與其他玩家合作或對抗。然而，這場生存遊戲不僅僅是物理上的挑戰——每一個玩家都有自己的秘密，每個選擇背後都有深刻的故事和陰謀。像《狼人殺》一樣，你可能發現自己與身邊的隊友並不完全是一條船上的人，而是背後藏有各自的目的和動機。<br><br>

              <h2>我們的玩法</h2><br>
              在這款遊戲中，你將面臨兩個主要挑戰：<br><br>

              1. 生存挑戰：玩家需要在充滿資源限制和險惡環境的世界中生存下來。建造庇護所、尋找食物和水源、抵禦野生動物的襲擊——這些基本的生存技能將是你成功的關鍵。<br><br>
              2. 策略與劇情：隨著遊戲進程的推進，玩家會被捲入一場錯綜複雜的陰謀與謎題當中。誰是隊中的間諜？誰在隱藏自己的真實身份？每一個選擇都可能改變你的命運。類似《狼人殺》的機制，讓每個玩家都處於緊張的心理博弈中，你是否能揭露真相，還是成為別人的犧牲品？<br><br>
              <h2>我們的願景</h2><br>
              我們希望 Survivor's Quest 不僅是一款生存遊戲，更是一個充滿互動與策略的劇情冒險平台。在這裡，玩家的選擇會影響故事的走向，每一場遊戲都是一次全新的冒險和挑戰。我們的目標是創造一個讓玩家不斷思考、探索和反轉局勢的環境，讓每一個遊戲體驗都充滿未知與驚喜。<br><br>

              在未來，我們將持續更新遊戲內容，引入更多的角色故事、隱藏任務和全新的生存模式，為玩家帶來更加豐富和深刻的遊戲體驗。<br><br>

              加入我們
              Survivor's Quest 是為那些喜愛挑戰自己、探索複雜人性和解開神秘故事的玩家準備的遊戲。無論是策略、合作還是心理博弈，這裡都有你尋找的冒險。快來參與我們的世界，揭開這場生存與陰謀交織的旅程吧！<br><br>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <v-card style="background: gray; position: absolute; top: 5300px; width: 100vw;">
      <v-card-title style="text-align: center; padding-top: 150px; padding-bottom: 50px; font-size: 40px;">生存遊戲影片</v-card-title>
      <v-row>
        <v-col cols="6" style="padding-left: 50px;">
          <div style="text-align: center;">
            <v-icon style="font-size: 50px;">mdi-hand-pointing-down</v-icon><v-text class="custom-text">From Silo Entertainment</v-text>
          </div>
          <v-responsive aspect-ratio="16/9">
            <iframe
              src="https://www.youtube.com/embed/OhiD1QJYsik?autoplay=1&si=4VYwLETiXH8L6qjO"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              width="100%"
              height="800"
            ></iframe>
          </v-responsive>
        </v-col>
        <v-col cols="6" style="padding-right: 60px;">
          <v-responsive aspect-ratio="16/9">
            <iframe
              src="https://www.youtube.com/embed/iNSYzWCzKgw?autoplay=1&si=OeMHp4TRCzAhNVwb"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              width="100%"
              height="800"
            ></iframe>
          </v-responsive>
          <div style="text-align: center;">
            <v-icon style="font-size: 50px;">mdi-hand-pointing-up</v-icon><v-text class="custom-text">From Airsoft Alfonse</v-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
import 'animate.css';

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
            text: 'Survive the Game, Conquer the Odds',
          },
          {
            src: 'https://www.abbeysupply.com/res/Airsoft-tactics.jpg',
            text: 'Only the Strongest Will Endure',
          },
          {
            src: 'https://www.xtremeparkadventures.com/wp-content/uploads/2019/05/Airsoft-Fields-in-Raleigh.jpg',
            text: 'Play Smart, Stay Alive',
          },
          {
            src: 'https://images.squarespace-cdn.com/content/v1/5ac9360aaa49a16d3b6ef162/1704673733296-7BXYQSGFXY5NJ4X8V93G/Untitled+design+%285%29.png?format=2500w',
            text: 'Outlast. Outplay. Outlive',
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
.v-tab-item--selected {
    background: rgb(122, 154, 94);
    z-index: -1;
}

.scrollable-card {
  max-height: 750px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #7A9A5E #D1C18B;
}

.scrollable-option {
  max-height: 112px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #7A9A5E #D1C18B;
}

.full-width {
  width: 100%;
}

.tab-item {
  min-width: 150px;
  white-space: nowrap;
}

.my-animation {
  display: inline-block;
  margin: 25rem;
  margin-left: 2rem;
  color: white;
  animation: fadein;
  animation-duration: 2s;
}

#ava .v-img__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#main-content {
  background: url(../../img/paper_background.png) no-repeat center/cover;
  width: 100%;
  height: 1900px;
  position: relative;
  top:-200px;
  z-index: 50;
}

#ava .v-img__img{
  filter:brightness(70%);
}

.custom-text {
  font-family: "Rock Salt", serif;
  font-weight: 400;
  font-size: 40px;
}

body {
  font-family: "Noto Serif TC", serif;
  font-weight: 600;
  font-optical-sizing: auto;
}
</style>
