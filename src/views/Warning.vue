<template>
  <main>
    <div>
      <h1>練習網站</h1>
      <p>
        歡迎來到我練習寫code的網站，這個網站是復刻其他人設計，圖片等都是未授權的圖片，僅作練習用途，不做商業用途。<br />若有侵害的您的著作權請聯絡我的信箱:nina850191@gmail.com，我會立即下架這個網站。
      </p>
      <input type="checkbox" id="agree" v-model="agreed" />
      我明白這是練習網站，我不會把這個網站的內容當真。
      <router-link to="Path">
        <button @click="agreeInto" :disabled="!agreed">進入</button>
      </router-link>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      agreed: false,
    };
  },
  mounted() {},
  components: {},
  methods: {
  },
};
</script>

<style scoped lang='scss'>

@import "@/assets/sass/main.scss";
main {
  background: linear-gradient(45deg, yellow, red);
  height: 100vh;
  width: 100vw;
  // position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }
div {
  width: 80%;
  margin: auto;
  text-align: center;
}
h1 {
  padding: 0 0 50px;
}
p {
  line-height: 1.5;
  width: 50%;
  margin: auto;
  padding: 0 0 50px;
}
button {
  display: block;
  width: 40px;
  margin: auto;
  margin-top: 50px;
}
</style>
