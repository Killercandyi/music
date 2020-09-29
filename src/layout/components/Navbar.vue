<template>
  <div>
    <el-container>
      <el-header class="el-header">
        <div class="logo">
          <h1>
            <router-link to="/">
              <img src="@/assets/logo.png" alt="网易云音乐" class="img-logo" />
            </router-link>
          </h1>
        </div>
        <div class="page">
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
        <el-input
          class="search"
          suffix-icon="el-icon-search"
          placeholder="搜索音乐，视频，歌词，电台"
        >
          <i slot="end" class="el-input__icon el-icon-search" />
        </el-input>
        <div class="user">
          <img src="@/assets/avatar.jpg" class="avatar" />
          <span class="loginInfo"
            >未登录
            <i class="el-icon-caret-bottom"></i>
          </span>
          <span class="VIP">开通VIP</span>
          <span class="iconfont icon-yifu skin-peeler"></span>
          <span class="iconfont icon-xiaoxi message"></span>
          <span class="iconfont icon-shezhi icon-setting" title="设置"></span>
        </div>
        <div class="setting">
          <span class="iconfont icon-vertical_line" />
          <span class="iconfont icon-zuixiaohua1" title="mini模式(Ctrl + M)" />
          <span class="iconfont icon-zuixiaohua" title="最小化" />
          <span class="iconfont icon-zuidahua" title="最大化" />
          <span class="iconfont icon-guanbi" title="关闭" />
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  align-items: center;
  overflow: hidden;
  .logo {
    width: 197px;
    height: 39px;
    .img-logo {
      object-fit: cover;
    }
  }

  .page {
    margin-left: 70px;
    color: #a3a3a3;
    .el-icon-arrow-left,
    .el-icon-arrow-right {
      width: 25px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border: 1px#a72727 solid;
    }
  }

  .search {
    width: 360px;
    margin-left: 35px;
    font-size: 14px;
    color: #c77373;
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 285px;
    color: #eec1c1;
    font-size: 13px;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
    }

    .loginInfo:hover {
      color: #fff;
    }

    .loginInfo {
      margin-left: 5px;
      cursor: pointer;
    }

    .VIP {
      margin-left: 15px;
      cursor: pointer;
    }

    .VIP:hover {
      color: #fff;
    }

    .skin-peeler {
      margin-left: 12px;
      margin-top: 6px;
      font-size: 18px;
      cursor: pointer;
    }

    .skin-peeler:hover {
      color: #fff;
    }

    .message {
      margin-left: 20px;
      margin-top: 6px;
      font-size: 22px;
      cursor: pointer;
    }

    .message:hover {
      color: #fff;
    }

    .icon-setting {
      margin-left: 20px;
      margin-top: 6px;
      font-size: 18px;
      cursor: pointer;
    }

    .icon-setting:hover {
      color: #fff;
    }
  }

  .setting {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eec1c1;

    .icon-vertical_line {
      margin-top: 6px;
      margin-left: 12px;
      font-size: 18px;
      color: #666;
    }

    .icon-zuixiaohua1 {
      margin-left: 15px;
      margin-top: 6px;
      font-size: 14px;
    }

    .icon-zuixiaohua1:hover {
      color: #fff;
    }

    .icon-zuixiaohua {
      margin-top: 6px;
      font-size: 25px;
      margin-left: 6px;
    }

    .icon-zuixiaohua:hover {
      color: #fff;
    }

    .icon-zuidahua {
      margin-top: 4px;
      margin-left: 6px;
    }

    .icon-zuidahua:hover {
      color: #fff;
    }

    .icon-guanbi {
      margin-top: 4px;
      margin-left: 7px;
    }

    .icon-guanbi:hover {
      color: #fff;
    }
  }
}
</style>

<style>
.el-header {
  background-color: #d43c33;
  color: #333;
  line-height: 60px;
}

.el-input__inner {
  width: 100%;
  height: 30px;
  border-radius: 30px;
  border: none;
  background-color: #a82828;
}
</style>
