<!-- 首页 -->
<template>
  <div id="app">
    <head-nav />
    <router-view />
  </div>
</template>

<script>
import HeadNav from '../components/HeadNav'
export default {
  name: 'Index',
  components: {
    'head-nav': HeadNav
  },
  data() {
    return {}
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //方法
  methods: {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
