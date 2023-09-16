<template>
  <main></main>
  <h1>練習網站</h1>
  <p>歡迎來到我練習寫code的網站，這個網站是復刻其他人設計，圖片等都是未授權的圖片，僅作練習用途，不做商業用途。<br>若有侵害的您的著作權請聯絡我的信箱:nina850191@gmail.com，我會立即下架所有的網站。</p>
  <input type="radio" id="agree">我明白這是練習網站，我不會把這個網站的內容當真。
  <button @click="redirectBtn" disabled="disabled" id="intoBtn">進入</button>
</template>

<script>
export default {
  methods: {
    redirectBtn() {
      const agreeID = document.getElementById("agree");
      const intoBtnId = document.getElementById("intoBtn");
      if (agreeID.checked) {
        intoBtnId.removeAttribute("disabled");
      } else {
        intoBtnId.setAttribute("disabled", "disabled");
      }
    }
  },
}
</script>
<style scoped lang='scss'></style>
