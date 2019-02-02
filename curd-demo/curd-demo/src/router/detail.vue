  <template>
    <div>
      <el-button @click="toAdd()">添加详情</el-button>
        <el-table
        :data="[]"
        stripe
        style="width: 100%">
        <el-table-column
            prop="fee"
            label="fee"
            width="180">
        </el-table-column>
        <el-table-column
            prop="tiem"
            label="时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="detail"
            label="详情">
        </el-table-column>
        <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">编辑</el-button>
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