<!-- 头部组件 -->
<template>
  <div class="head_container"></div>
</template>

<script>
export default {
  name: 'HeadNav',
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
<style scoped lang="scss">
/* @import url(); 引入css类 */
.head_container {
  width: 100vw;
  height: 60px;
  background-color: #f6f6f6;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
}
</style>
