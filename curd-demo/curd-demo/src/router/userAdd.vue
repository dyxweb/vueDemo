<template>
<el-dialog title="添加用户" visible="visible" width="30%" :before-close="toUser">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="fee" prop="fee">
    <el-input v-model="ruleForm.fee"></el-input>
  </el-form-item>
  <el-form-item label="phone" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="createTime" prop="createTime">
    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.createTime" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-dialog>
</template>

<script>
  import axios from 'axios';  
  import get from '../util/request.js'
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'    
  export default {
    data() {
      return {
        visible: true,
        ruleForm: {
          name: '',
          fee: '',
          phone: '',
          createTime: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          fee: [
            { required: true, message: '请输入金额', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'blur' },
          ],
          createTime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      ...mapActions({
          getList: 'getUserList'
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid,values) => {
          if (valid) {
            get('http://localhost:3001/adduser', this.ruleForm).then(res => {
              this.toUser();
              this.getList();
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toUser() {
        this.$router.push('/user')
      }
    }
  }
</script>