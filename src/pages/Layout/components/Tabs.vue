<template>
  <div class="app-tabs">
    <el-tabs type="card" v-model="activeTab" @tab-click="clickTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in tabsList"
        :closable="tabsList.length>1"
        :key="item.name"
        :label="item.meta.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tabs", "app"]),
    tabsList() {
      return this.tabs.tabsList.filter(item => item.name);
    },
    activeTab: {
      get() {
        return this.tabs.activeTab;
      },
      set(val) {
        this.$store.dispatch("setTabsActivetab", val);
      }
    }
  },
  methods: {
    clickTab(tab) {
      if (this.$route.fullPath != this.app.menu.obj[tab.name].pathFull) {
        this.$router.replace(this.app.menu.obj[tab.name].pathFull);
      }
    },
    removeTab(name) {
      let tabsList = this.tabsList;
      let activeTab = this.activeTab;
      for (let i = 0; i < tabsList.length; i++) {
        const ele = tabsList[i];
        if (activeTab === name && name === ele.name) {//关闭的标签是当前标签时，需要重设活动标签
          let activeListName = tabsList[i + 1]
            ? tabsList[i + 1].name
            : tabsList[i - 1].name;
          this.$store.dispatch("setTabsActivetab", activeListName);
          this.$router.replace(this.app.menu.obj[activeListName].pathFull);
          break;
        }
      }
      this.$store.dispatch("delTabsList", name);
    }
  }
};
</script>

<style>
</style>