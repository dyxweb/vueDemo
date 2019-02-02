<template>
<el-dialog title="添加用户" visible="visible" width="30%" :before-close="toDetail">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="fee" prop="fee">
    <el-input v-model="ruleForm.fee"></el-input>
  </el-form-item>
  <el-form-item label="Description" prop="description">
    <el-input v-model="ruleForm.phone" type="textarea" :rows="2"></el-input>
  </el-form-item>
  <el-form-item label="dateTime" prop="dateTime">
    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.dateTime" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        visible: true,
        ruleForm: {
          description: '',
          fee: '',
          dateTime: '',
        },
        rules: {
          fee: [
            { required: true, message: '请输入金额', trigger: 'blur' },
          ],
          dateTime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toDetail() {
        this.$router.push(`/user/${this.$route.params.userId}/detail`)
      }
    }
  }
</script>