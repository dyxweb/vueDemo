<template>
  <div class="box">
    <header>
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-submenu index="1" v-if="role !== 'normal'">
          <template slot="title">切换角色</template>
            <el-menu-item
              index="normal"
              @click="changeRole('normal')"
            >
              普通用户视角
            </el-menu-item>
            <el-menu-item
              index="manage"
              @click="changeRole('manage')"
              v-if="role === 'highmanage'"
            >
              管理员视角
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2" @click="logout()">退出登录</el-menu-item>
        </el-menu>
      </header>
      <el-row>
        <el-col :span="4" class="left-nav">
          <el-menu
            :default-active="$route.path"
            router
          >
            <el-menu-item
              v-for="(value,index) in menuConfig"
              :index="value.index"
              v-bind:key="index"
              v-if="value.role.includes(role)"
            >
              <span slot="title">{{value.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>  
    </el-row>
  </div>
</template>
<script>
  import { menuConfig } from '../../assets/roleinfo.js'
  import { mapState } from 'vuex'
  export default {
    data(){
      return {
        menuConfig,
      }
    },
    methods: {
      logout(){
    	  this.$store.dispatch('logout').then(() => {
          this.$router.push({ path: '/login' });
        }).catch(err => {
          this.$message.error(err);
        });
      },
      changeRole(role){
        this.$store.dispatch('changeRole', role).then(() => {
          // 切换角色之后重新进入该路由判断是否有权限，强制刷新
          this.$router.go(0)
        })
        
      },
    },
    computed: {
      ...mapState({
        role:state=>state.login.role,
      }),
    }
  }
</script>
<style scoped>
.box {
  height: 100vh;
}
.left-nav {
  height: calc(100vh - 61px);
}
.left-nav .el-menu{
  height: 100%;
}
header .el-menu.el-menu--horizontal{
  display: flex;
  justify-content: flex-end;
}
</style>
