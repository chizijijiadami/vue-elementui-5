<template>
  <div class="app-header">
    <Menu v-if="menuLocation==='H'" />
    <el-button
      v-if="menuLocation!=='H'"
      type="primary"
      plain
      @click="setMenuIsCollapse"
      :icon="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'"
    ></el-button>
    <el-button type="primary" v-if="!getStorage">
      <router-link to="/login">登录</router-link>
    </el-button>
    <el-button type="primary" v-else @click="quit">退出</el-button>
  </div>
</template>

<script>
import Menu from "./Menu";
import { mapGetters } from "vuex";
import { getStorage, setStorage } from "common/utils";
export default {
  components: {
    Menu
  },
  computed: {
    ...mapGetters(["app"]),
    isCollapse() {
      return this.app.menu.isCollapse;
    },
    menuLocation() {
      return this.app.menu.location;
    },
    isLogin() {
      return this.app.system.isLogin;
    },
    getStorage() {
      return getStorage();
    }
  },
  methods: {
    setMenuIsCollapse() {
      this.$store.dispatch("setMenuIsCollapse");
    },
    quit() {
      setStorage().then(() => {
        this.$router.push({
          path: "/login?redirect="+this.$router.history.current.fullPath
        });
      });
    }
  }
};
</script>

<style>
</style>