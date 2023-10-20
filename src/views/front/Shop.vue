<template>
  <main class="shop-main">
    <div class="title">
      <h2>SHOPPING</h2>
      <h3>電子購物</h3>
    </div>
    <div>
      <div
        class="shop-contain"
        v-for="(shop, shopIndex) in shopList"
        :key="shopIndex"
      >
        <div class="shop-img">
          <img :src="shop.imgurl" :alt="shop.alt" />
        </div>
        <div>
          <h4>{{ shop.title }}</h4>
        </div>
        <div>
          <p>{{ shop.content }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      shopList: [
        {
          imgurl: require("@/assets/img/shop/shop1.jpg"),
          alt: "蛋糕夢工坊",
          title: "蛋糕夢工坊",
          content:
            "蛋糕夢工坊用最優質的食材和烹飪技藝，致力於給顧客夢幻般的甜點體驗。無論是生日、婚禮或任何其他慶祝場合，我們都樂意為您提供獨一無二的美味。蛋糕夢工坊，實現您的蛋糕夢想！",
        },
        {
          imgurl: require("@/assets/img/shop/shop2.jpg"),
          alt: "小公主冰品店",
          title: "小公主冰品店",
          content:
            "小公主冰品店提供各種口味的美味冰淇淋、冰沙和冷飲，給您帶來清涼和愉悅的味蕾體驗。無論您是小朋友還是大人，我們都以高品質和多樣化的選擇迎合您的喜好。來「小公主冰品店」，享受一份冷冽的甜蜜！",
        },
        {
          imgurl: require("@/assets/img/shop/shop3.jpg"),
          alt: "一味拉麵",
          title: "一味拉麵",
          content:
            "一味拉麵正宗日本拉麵，以獨特的食材和秘製湯底製作美味。我們將傳統和創新融合，為您帶來滿足味蕾的體驗。無論您是辛辣愛好者還是喜歡清淡風味的食客，我們都提供多種選擇，以滿足各種口味。歡迎光臨一味拉麵，品味一碗美味的滋味！",
        },
      ],
    };
  },
  mounted() {},
  components: {},
  methods: {},
};
</script>
<style scoped lang='scss'>
@import "@/assets/sass/main.scss";
</style>
