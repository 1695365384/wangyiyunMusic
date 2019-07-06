<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app .el-footer {
  padding: 0;
}
#app .el-header {
  padding: 0;
}
#app .el-main {
  width: 1100px;
  margin: 0 auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
ul {
  padding: 0;
  margin: 0;
}

.wy_footer {
  position: relative;
  height: 148px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
.clearfix::after,
.clearfix::before {
  display: table;
  content: '';
}
.clearfix::after {
  clear: both;
}
</style>

