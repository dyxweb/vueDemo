  <template>
    <div>
      <el-button @click="toAdd()">添加详情</el-button>
        <el-table
        :data="userList"
        stripe
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <router-view></router-view>
    </div>
  </template>

  <script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
      name: 'user',
      data() {
        return {
        }
      },
      created(){
          this.getList()
      },
      methods: {
          ...mapActions({
              getList: 'getDetailList'
          }),
          toAdd(){
              this.$router.push(`${this.$router.history.current.path}/add`)
          }
      },
      computed:{
          ...mapState({
              userList: state => state.detail.detailList
          })
      }
    }
  </script>