<template>
  <div class="app-pagination">
    <el-pagination
      :small="small"
      :background="background"
      :page-size="pageSize"
      :total="total"
      :page-count="pageCount"
      :layout="layout"
      :page-sizes="pageSizes"
      :prev-text="prevText"
      :next-text="nextText"
      :hide-on-single-page="hideOnSinglePage"
      v-if="!disabled"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    small: {
      // 是否小规格
      type: Boolean,
      default: false
    },
    background: {
      // 是否为分页按钮添加背景色
      type: Boolean,
      default: false
    },
    pageSize: {
      // 默认每页条数
      type: Number,
      default: 10
    },
    total: {
      //总条数
      type: Number,
      required: true
    },
    pageCount: {
      //页码按钮的数量，当总页数超过该值时会折叠
      type: Number,
      default: 7
    },
    layout: {
      // 组件布局，子组件名用逗号分隔
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    prevText: {
      //替代图标显示的上一页文字
      type: String
    },
    nextText: {
      //替代图标显示的下一页文字
      type: String
    },
    disabled: {
      //是否分页
      type: Boolean,
      default: false
    },
    hideOnSinglePage: {
      //只有一页时是否隐藏
      type: Boolean
    }
  },
  data() {
    return {};
  },
  methods: {
    sizeChange(pageSize) {
      console.log(pageSize,'sizeChange');
    //   this.$emit('sizeChange',pageSize)
    },
    currentChange(currentPage) {
      console.log(currentPage,'currentChange');
    //   this.$emit('currentChange',currentPage)
    },
    prevClick(currentPage) {
      console.log(currentPage,'prevClick');
    //   this.$emit('prevClick',currentPage)
    },
    nextClick(currentPage) {
      console.log(currentPage,'nextClick');
    //   this.$emit('nextClick',currentPage)
    }
  }
};
</script>