<template>
  <div>
      <p>List-index</p> 
      <ul><li @click="changeTab('detail')">detail</li><li @click="changeTab('feature')">feature</li></ul>  
      <div v-show="tab=='detail'" class="detail">
          <detail :deliveryValue="toChildren" :toChildrenObj="toChildrenObj" :toChildrenArr="toChildrenArr"></detail>
      </div>
      <div v-show="tab=='feature'" class="feature">
          <feature @changeTab="changeTab"></feature>
      </div>
  </div>
</template>

<script>
import Detail from './Detail/index.vue'
import Feature from './Feature/index.vue'
export default {
    name:"ListIndex",
    components:{
        Detail,
        Feature
    },
    data(){
        return {
            tab:'detail',
            toChildren:'传给子组件咯',
            toChildrenObj:{
                name:'test',
                age:12
            },
            toChildrenArr:[
                {item:'1'},
                {item:'2'}
            ]
        }
    },
    methods:{
        changeTab(tab){
            this.tab=tab
        }
    }
}
</script>

<style scoped>
p{
    background-color: aqua;
}
.detail >>> p{
    background-color: red;
}
</style>