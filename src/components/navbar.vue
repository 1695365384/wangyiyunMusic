<template>
  <div class="navbar">
    <div class="top">
      <div class="warp">
        <h1 class="logo">
          <a href="/"></a>
        </h1>
        <ul class="wy_nav" style="width:508px;float:left;">
          <li>
            <router-link :to="{path:'/index'}">发现音乐</router-link>
            <span class="icon"></span>
          </li>
          <li>
            <router-link :to="{path:'/myMusic'}">我的音乐</router-link>
          </li>
          <li>
            <router-link :to="{path:'/friend'}">朋友</router-link>
          </li>
          <li>
            <router-link :to="{path:'/product'}">商城</router-link>
          </li>
          <li>
            <router-link :to="{path:'/recruit'}">音乐人</router-link>
          </li>
          <li>
            <router-link :to="{path:'/download'}">下载客户端</router-link>
          </li>
        </ul>
        <div class="serach" style="width:158px;float:left;">
          <el-input placeholder="请输入搜索内容" v-model="searchContent">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>

        <el-button type="info" plain round size="mini">创作者中心</el-button>

        <div class="login">
          <el-dropdown>
            <span class="el-dropdown-link">
              登陆
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-lollipop">手机号登陆</el-dropdown-item>
              <el-dropdown-item icon="el-icon-user">邮箱登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      searchContent: ''
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  .top {
    height: 70px;
    background: #242424;
    border-bottom: 1px solid #000;

    .warp {
      width: 1100px;
      margin: 0 auto;
      height: 100%;
      .logo {
        float: left;
        height: 100%;
        margin: 0;
        background: url('../assets/images/topbar.png');
        background-position: 0 0;
        a {
          float: left;
          width: 157px;
          height: 100%;
          padding-right: 20px;
          text-indent: -9999px;
        }
      }
    }
  }

  .bottom {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
  }

  .wy_nav {
    li {
      float: left;
      height: 70px;
      font-size: 14px;
      position: relative;
      a {
        padding: 25px 19px;
        text-align: center;
        line-height: 70px;
        color: #ccc;
        height: 70px;
      }

      a:hover {
        background: #000;
        text-decoration: none;
        color: #fff;
      }
    }
  }

  .el-button.el-button--info {
    margin: 25px 0 0 25px;
    border: 1px solid #4f4f4f;
    color: #ccc;
  }
  .el-button--info.is-plain {
    background-color: #242424;
  }

  .login {
    float: right;
  }
  .el-dropdown-link {
    color: #ccc;
    line-height: 70px;
  }

  .icon {
    display: block;
    position: absolute;
    left: 50%;
    top: 65px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
    background: url('../assets/images/topbar.png') no-repeat 0 9999px;
    background-position: -226px 0;
    opacity: 0.9;
  }
}

.el-input {
  margin-top: 19px;
  background-position: 0 -99px;
  background-color: #fff;
  border-radius: 32px;
  width: 158px;
}
</style>
