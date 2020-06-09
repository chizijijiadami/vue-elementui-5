<template>
  <div class="app-menu">
    <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :mode="menuLocation==='H'?'horizontal':'vertical'"
    >
      <!-- 这里删除ele-menu里的全部内容后新增这一句就可以了 -->
      <MenuItem :menuList="menuList" />
    </el-menu>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
import { mapGetters } from "vuex";
export default {
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(["app"]),
    isCollapse() {
      return this.app.menu.isCollapse;
    },
    menuLocation() {
      return this.app.menu.location;
    },
    menuList() {
      return this.app.menu.list;
    }
  }
};
</script>

<style lang="stylus" scope></style>