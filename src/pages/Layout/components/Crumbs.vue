<template>
  <div class="app-crumbs">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      :style="{'line-height':crumbsParams.height,padding:'0 '+content.padding}"
    >
      <el-breadcrumb-item v-for="item in getCrumbs" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    crumbsParams: Object,
    content: Object
  },
  computed: {
    ...mapGetters(["crumbs"]),
    getCrumbs() {
      return this.crumbs.crumbsList;
    }
  }
};
</script>

<style>
</style>