<template>
  <div class="app-menu-item">
    <template v-for="item in menuList">
      <el-menu-item
        class="test"
        v-if="item.showChildren.length<=0"
        :index="item.redirect?item.redirect:item.pathFull"
        :key="item.name"
      >
        <svg-icon
          :iconName="item.meta.icon"
          :className="isActived(item)?'app-menu-item-actived':''"
        ></svg-icon>
        <span>{{item.meta.title}}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.pathFull" :key="item.name">
        <template slot="title">
          <svg-icon
            :iconName="item.meta.icon"
            :className="isActived(item)?'app-menu-item-actived':''"
          ></svg-icon>
          <span :class="isActived(item)?'app-menu-item-actived':''">{{item.meta.title}}</span>
        </template>
        <MenuItem :menuList="item.showChildren" />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menuList: Array
  },
  methods: {
    isActived(item) {
      let isActived = false;
      let path = this.$route.path;
      let hasPath = this.hasPathFn(item);
      //之前用elementui里自带的icon，活动路由会自动变化颜色，现在是我们自定义的，得自己加样式
      (hasPath || item.pathFull === path || path == item.redirect) ? (isActived = true) : "";
      return isActived;
    },
    hasPathFn(item) {
      //这里是判断该项下面是否包含有当前路径，一般最多三层菜单栏，我们只判断到这里
      let path = this.$route.path;
      let hasPath = false;
      item.showChildren.forEach(item2 => {
        if (item2.pathFull === path) {
          hasPath = true;
        } else {
          item2.showChildren.forEach(item3 => {
            if (item3.pathFull === path) {
              hasPath = true;
            }
          });
        }
      });
      return hasPath;
    }
  }
};
</script>