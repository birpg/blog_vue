<template>
  <main class="main">
    <div class="container">
      <div class="card"></div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  created() {
    this.$api.getArticleList().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  top: -60px;

  .container {
    margin: 0 190px;
    padding: 0 15px;
    box-sizing: border-box;

    .card {
      width: 100%;
      height: 1000px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
</style>
