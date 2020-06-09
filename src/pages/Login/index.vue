<template>
  <div class="app-login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="name" :rules="regCheck({required:true,min:2,max:30})">
        <el-input v-model.trim="form.name" maxlength="30"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd" :rules="regCheck({required:true,min:6})">
        <el-input v-model.trim="form.pwd" type="password" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as api from "data/api/Login";
import { setStorage } from "common/utils";
export default {
  name: "LoginIndex",
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          api.toLogin(form).then(data => {
            if (data.status === 0) {
              setStorage(null, data.data.token).then(() => {
                this.$router.push({
                  path: this.$route.query.redirect
                    ? this.$route.query.redirect
                    : "/"
                });
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.app-login
  width 500px
  margin 50px auto
</style>