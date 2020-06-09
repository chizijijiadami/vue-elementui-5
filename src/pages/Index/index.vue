<template>
  <div>
    <p class="index-p">Index-index</p>
    <p>
      <svg aria-hidden="true">
        <use xlink:href="#icon-breakfast" />
      </svg>
    </p>
    <p>
      <svg-icon iconName="breakfast"></svg-icon>
    </p>
    <div>
      <pagination :total="500" />
      <!-- <pagination :total="500" @sizeChange="sizeChange"/> -->
    </div>
    <p>{{3|orderStatusFilters}}</p>
    <div>
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item
          prop="mobile"
          label="手机号码"
          :rules="regCheck({required:true,type:'mobile',message:'手机号码为必输项'})"
        >
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="regCheck({required:true,type:'email',name:'邮箱'})"
        >
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="idCard" label="身份证号" :rules="regCheck({required:true,type:'idCard'})">
          <el-input v-model="form.idCard"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-btnHas="'IndexIndex_save'" @click="submitForm('form')">提交</el-button>
          <el-button  v-btnHas="'IndexIndex_reset'" @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <p v-for="item in list" :key="item.id">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
import * as api from "data/api/Index";
export default {
  name: "IndexIndex",
  data() {
    return {
      form: {
        mobile: "",
        email: "",
        idCard: ""
      },
      list: []
    };
  },
  created() {
    this.getList();
    // this.getCrossDomainList();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getList() {
      api.getList().then(res => {
        this.list = res.data.list;
      });
    },
    getCrossDomainList() {
      api.getCrossDomainList().then(res => {
        console.log(res);
      });
    }
  }
  // methods:{
  //   sizeChange(pageSize){
  //     console.log(pageSize,'---index');

  //   }
  // }
};
</script>