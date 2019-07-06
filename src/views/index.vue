<template>
  <el-row>
    <el-col :span="24">
      <el-header height>
        <!-- Header content -->
        <nav-bar />
      </el-header>

      <el-main height>
        <!-- Main content -->
        <router-view></router-view>
      </el-main>

      <el-footer height>
        <!-- Footer content -->
        <div class="wy_footer">这是底部</div>
      </el-footer>
    </el-col>
  </el-row>
</template>

<script>
import navBar from '../components/navbar'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    navBar
  }
}
</script>