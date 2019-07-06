<template>
  <el-row>
    <el-col :span="18">
      <div class="wy_hot_left">
        <div class="Popular">
          <div class="topBar">
            <div class="title">热门推荐</div>
            <ul class="tab">
              <li>
                <a href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" class="s-fc3">华语</a>
                |
              </li>
              <li>
                <a href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" class="s-fc3">流行</a>
                |
              </li>
              <li>
                <a href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" class="s-fc3">摇滚</a>
                |
              </li>
              <li>
                <a href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" class="s-fc3">民谣</a>
                |
              </li>
              <li>
                <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">电子</a>
              </li>
            </ul>

            <div class="more">
              <a href>更多</a>
              <span class="moreIcon"></span>
            </div>
          </div>
          <ul class="content clearfix">
            <li
              v-for="(item,index) in $store.state.index.playlist.playlists"
              :key="item.id"
              v-show="index<8"
            >
              <div class="top">
                <img :src="item.coverImgUrl" alt />
                <div class="msk"></div>
                <div class="player">
                  <div class="icon-headset"></div>
                  <div class="nb">{{item.playCount | playCount}}</div>
                  <a href="###" class="icon-play"></a>
                </div>
              </div>
              <div class="bottom">
                <span>{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="newDish">
          <div class="Popular">
            <div class="topBar">
              <div class="title">新碟上架</div>
              <div class="more">
                <a href>更多</a>
                <span class="moreIcon"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="Popular">
            <div class="topBar">
              <div class="title">榜单</div>
              <div class="more">
                <a href>更多</a>
                <span class="moreIcon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="wy_hot_right"></div>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'hotMusic',
  data() {
    return {
      playlist: []
    }
  },

  created() {
    this.getPlayList()
    this.getPlayAlbum()
  },

  methods: {
    ...mapActions(['getPlayList', 'getPlayAlbum'])
  }
}
</script>

<style lang="less" scoped>
.topBar {
  height: 33px;
  padding: 0 10px 0 34px;
  background: url('../../assets/images/index.png') no-repeat 0 9999px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .title {
    float: left;
  }
  .more {
    float: right;
    margin-top: 9px;
    .moreIcon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background: url(../../assets/images/index.png) no-repeat 0 9999px;
      background-position: 0 -240px;
    }
  }

  .tab {
    margin-left: 25px;
    height: 100%;
    float: left;
    li {
      float: left;
      padding: 0 5px;
    }
  }
}
.content {
  margin: 35px 0;
  li {
    width: 140px;
    height: 204px;
    float: left;
    padding: 0 0 30px 50px;
    position: relative;
    .top {
      height: 140px;
      width: 140px;
      display: inline-block;
      position: relative;
      img {
        height: 140px;
      }

      .player {
        background: url('../../assets//images/coverall.png') no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        z-index: 9999;
      }
    }
  }
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/coverall.png') no-repeat;
    background-position: 0 0;
  }
}

.icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  background: url('../../assets/images/iconall.png') no-repeat;
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
}

.icon-play {
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background: url(../../assets/images/iconall.png) no-repeat;
  background-position: 0 0;
}
.nb {
  float: left;
  margin: 7px 0 0 10px;
  font-size: 9px;
}
</style>
