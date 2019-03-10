<template>
  <div class="login-box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'change' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('login',this.ruleForm).then(res => {
                if(res.success){
                  this.$router.push({ path: 'normal' })
                }
            }).catch((e) => {
              console.log(e)
            })
          } else {
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped>
  .login-box{
    box-sizing: border-box;
    padding: 60px 20px 0 20px;
    position: fixed;
    width: 400px;
    height: 300px;
    text-align: center;
    left: calc(50% - 200px);
    top: calc(50% - 150px);
    border: 1px solid #eee;
    border-radius: 15px;
  }
</style>