<template>
  <div class="app-page">
    <Header :style="{height:header.height,left:headerLeft(),width:headerWidth()}" />
    <Menu
      v-if="menuLocation!=='H'"
      :style="{top:menuTop(),width:this.menuWidth(),height:menuHeight()}"
    />
    <div class="app-container" :style="{padding:containerPadding()}">
      <Tabs
        v-if="isShowTabs"
        :style="{height:tabs.height,top:header.height,left:tabsLeft(),width:tabsWidth()}"
      />
      <Crumbs
        v-if="isShowCrumbs"
        :style="{height:crumbs.height,padding:'0 '+content.margin}"
        :crumbsParams="crumbs"
        :content="content"
      />
      <Content :style="{'min-height':contentMinHeight(),margin:contentMargin()}" />
      <Footer v-if="isShowFooter" :style="{height:footer.height,'line-height':footer.height}" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Menu from "./components/Menu";
import Crumbs from "./components/Crumbs";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Menu,
    Tabs,
    Crumbs,
    Content,
    Footer
  },
  data() {
    return {
      header: {
        height: "60px"
      },
      menu: {
        width: "200px",
        widthCollapse: "64px"
      },
      tabs: {
        height: "40px"
      },
      crumbs: {
        height: "30px"
      },
      content: {
        margin: "10px"
      },
      footer: {
        height: "40px"
      }
    };
  },
  computed: {
    ...mapGetters(["app"]),
    isCollapse() {
      return this.app.menu.isCollapse;
    },
    menuLocation() {
      return this.app.menu.location;
    },
    isShowTabs() {
      return this.app.tabs.isShow;
    },
    isShowCrumbs() {
      return this.app.crumbs.isShow;
    },
    isShowFooter() {
      return this.app.footer.isShow;
    }
  },
  methods: {
    headerLeft() {
      return this.menuLocation === "V" || this.menuLocation === "H"
        ? "0"
        : this.menuWidth();
    },
    headerWidth() {
      return this.menuLocation === "V" || this.menuLocation === "H"
        ? "100%"
        : `calc(100% - ${this.menuWidth()})`;
    },
    menuTop() {
      return this.menuLocation === "V" ? this.header.height : "0";
    },
    menuHeight() {
      return this.menuLocation === "V"
        ? `calc(100% - ${this.header.height})`
        : "100vh";
    },
    menuWidth() {
      return this.menuLocation === "H"
        ? "0px"
        : this.isCollapse
        ? this.menu.widthCollapse
        : this.menu.width;
    },
    containerPadding() {
      let tabsHeight = this.isShowTabs ? this.tabs.height : "0px";
      let paddingTop =
        parseInt(this.header.height) + parseInt(tabsHeight) + "px";
      return paddingTop + " 0 0 " + this.menuWidth();
    },
    tabsLeft() {
      return this.menuWidth();
    },
    tabsWidth() {
      return `calc(100% - ${this.menuWidth()} )`;
    },
    contentMargin() {
      let marginTop = this.isShowCrumbs ? "0" : this.content.margin;
      let marginBottom = this.isShowFooter ? "0" : this.content.margin;
      return marginTop + " " + this.content.margin + " " + marginBottom;
    },
    contentMinHeight() {
      let crumbsHeight = this.isShowCrumbs
        ? this.crumbs.height
        : this.content.margin;
      let footerHeight = this.isShowFooter
        ? this.footer.height
        : this.content.margin;
      return `calc(100% - ${crumbsHeight} - ${footerHeight})`;
    }
  }
};
</script>

<style>
</style>