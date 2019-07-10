<template>
  <div class="index">
    <div class="container">
      <router-view class="tabbar-page"></router-view>
    </div>
    <div class="tabbar">
      <van-tabbar v-model="active">
        <van-tabbar-item :to="{ name: 'home' }" replace icon="home-o"
          >首页</van-tabbar-item
        >
        <van-tabbar-item :to="{ name: 'discovery' }" replace icon="search" dot
          >发现</van-tabbar-item
        >
        <van-tabbar-item
          :to="{ name: 'publish' }"
          replace
          icon="records"
          info="5"
          >创作</van-tabbar-item
        >
        <van-tabbar-item
          :to="{ name: 'mine' }"
          replace
          icon="setting-o"
          info="20"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    propName: {
      // type: number,
      // default: 0
    }
  },
  components: {},
  data() {
    return {
      active: 'home'
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
.index {
}
</style>
