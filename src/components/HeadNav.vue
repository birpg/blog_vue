<!-- 头部组件 -->
<template>
  <header class="header">
    <nav :class="['nav', collapse ? 'nav_collapse' : '']" style="background:transparent; ">
      <a-row :class="collapse ? 'hgt' : ''" type="flex" justify="center" align="middle">
        <a-col
          :class="collapse ? 'hgt' : ''"
          :span="12"
          :push="4"
          xs="{24}"
          sm="{24}"
          md="{10}"
          lg="{10}"
          xl="{10}"
        >
          <span class="header_title">博客</span>
        </a-col>
        <a-col
          :class="collapse ? 'hgt' : ''"
          :span="12"
          xs="{0}"
          sm="{0}"
          md="{14}"
          lg="{8}"
          xl="{6}"
        >
          <a-menu class="meun_container" v-model="current" mode="horizontal">
            <a-menu-item class="meun_item" key="home">
              <a-icon type="home" class="icon" theme="filled" />
              首页
            </a-menu-item>
            <a-menu-item class="meun_item" key="class">
              <a-icon type="appstore" class="icon" theme="filled" />
              分类
            </a-menu-item>
            <a-menu-item class="meun_item" key="tag"
              ><a-icon type="tags" class="icon" theme="filled" />
              标签
            </a-menu-item>
            <a-menu-item class="meun_item" key="about">
              <a-icon type="info-circle" class="icon" theme="filled" />
              关于
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </nav>
    <div class="banner"></div>
  </header>
</template>

<script>
export default {
  name: 'HeadNav',
  data() {
    return {
      current: ['home'],
      collapse: false,
      top: 0
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    window.addEventListener('scroll', this.getScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.getScroll)
  },
  //方法
  methods: {
    getScroll() {
      const scrollTop = document.documentElement.scrollTop
      this.top = scrollTop
      if (scrollTop > 50) {
        this.collapse = true
      } else {
        this.collapse = false
      }
    }
  }
}
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.header {
  width: 100%;
  height: 100vh;

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    height: 60px;
    line-height: 60px;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
    transition: height 500ms ease-in-out, background-color 500ms ease-in-out;

    .hgt {
      height: 100%;
    }

    .header_title {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }

    .meun_container {
      top: 0;
      background: transparent;
      color: #fff;
      border: none;

      .meun_item {
        border: none;
        color: #fff;
        &:hover {
          background: transparent;
          color: #007bff;
          background-color: rgba(128, 128, 128, 0.3);
        }

        .icon {
          margin-right: 2px;
        }
      }
    }
  }

  .nav_collapse {
    height: 50px;
    line-height: 50px;
    background-color: #2f4154 !important;
  }

  .banner {
    margin-top: 60px;
    position: relative;
    top: -60px;
    left: 0;
    height: 100%;
    background: url(https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp)
      center center / cover no-repeat;
    transform: translate3d(0px, 0px, 0px);
  }
}
</style>
