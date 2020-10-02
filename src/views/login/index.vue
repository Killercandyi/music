<template>
  <div class="login-wrapper">
    <el-dialog
      title=""
      :visible="dialogVisible"
      width="25%"
      v-dialogDrag
      :modal="false"
      :close-on-click-modal="false"
      @close="btnCancel"
    >
    <!-- 二维码登陆 -->
      <div class="QRCode" v-if="showLoginCode">
        <h1 class="loginTitle">扫码登录</h1>
        <el-row type="flex" justify="center">
          <transition name="el-fade-in-linear">
            <img
              src="@/assets/loginImg/qr_guide.png"
              class="qr_guide"
              v-show="showQRCode"
            />
          </transition>
          <div class="QR-code-container">
            <img
              src="@/assets/loginImg/QR-code.png"
              class="QR-code"
              @mouseenter="loginCode"
              @mouseleave="hideLoginCode"
            />
            <p
              class="musicApp"
              @mouseenter="loginCode"
              @mouseleave="hideLoginCode"
            >
              使用<span class="musicApp-highlight">网易云音乐APP</span>
            </p>
            <p class="codeLogin">扫码登录</p>
          </div>
        </el-row>
        <span
          class="other-patterns"
          @mouseenter="loginCode"
          @mouseleave="hideLoginCode"
          @click="changeIDLogin"
        >
          选择其他登录模式 >
        </span>
      </div>
      <!-- 账号登陆 -->
      <div class="IDLogin" v-if="showIDLogin">
        <div class="triangle-code">
          <img
            src="@/assets/loginImg/qr_login_icon.png"
            class="qr_login_icon"
            @click="changeQRCode"
          />
          <div class="secure-login">
            <div class="small-triangle"></div>
            扫码登录更安全
          </div>
        </div>
        <div class="loginInput">
          <img src="@/assets/loginImg/loginBg.png" class="loginBg" />
          <div class="account-number">
            <div class="phoneNumber">
              <span class="iconfont icon-shouji" />
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  +86 <i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-input
                class="phoneNumber-input"
                placeholder="请输入手机号"
              ></el-input>
            </div>
            <div class="password">
              <span class="iconfont icon-suo" />
              <el-input
                class="password-input"
                placeholder="请输入密码"
              ></el-input>
              <span class="reset-password">重设密码</span>
            </div>
          </div>
        </div>
        <div class="login-button">
          <el-checkbox v-model="checked">自动登录</el-checkbox><br />
          <el-button plain>登 录</el-button><br />
          <div class="register-button">注册</div>
          <ul class="other-ways-login clearfix">
            <li class="WeChat-login">
              <span class="iconfont icon-weixin"></span>
            </li>
            <li class="QQ-login"><span class="iconfont icon-qq1"></span></li>
            <li class="microblog-login">
              <span class="iconfont icon-weibo"></span>
            </li>
            <li class="NetEase-mail-login">
              <span class="iconfont icon-iconfontwangyi"> </span>
            </li>
          </ul>
        </div>
      <div class="clause" v-if="showIDLogin">
        <el-checkbox v-model="clauseChecked"
          >同意
          <a href="https://st.music.163.com/official-terms/service"> 《服务条款》 </a>
          <a href="https://st.music.163.com/official-terms/privacy"> 《隐私条款》 </a>
          <a href="https://st.music.163.com/official-terms/children">  《儿童隐私条款》</a
        ></el-checkbox>
      </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showQRCode: false,
      showLoginCode: true,
      showIDLogin: false,
      checked: true,
      clauseChecked: false
    }
  },
  methods: {
    btnCancel () {
      // 关闭登录 / 注册弹窗
      this.$emit('update:dialogVisible', false)
    },
    loginCode () {
      // 显示App图片
      this.showQRCode = true
    },
    hideLoginCode () {
      // 隐藏app图片
      this.showQRCode = false
    },
    changeIDLogin () {
      this.showLoginCode = false
      this.showIDLogin = true
    },
    changeQRCode () {
      this.showLoginCode = true
      this.showIDLogin = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {

  .QRCode {
    position: relative;
    left: 0;
    top: 0;

    .loginTitle {
      margin: 10px auto 30px;
      font-weight: normal;
      font-size: 26px;
      color: #222;
      text-align: center;
    }

    .qr_guide {
      width: 160px;
      object-fit: cover;
    }

    .QR-code-container {
      margin-top: 40px;
      margin-left: 10px;

      .QR-code {
        width: 160px;
        height: 160px;
        object-fit: cover;
      }

      .musicApp {
        margin-top: 15px;
        text-align: center;

        .musicApp-highlight {
          color: #0c73c2;
          cursor: pointer;
        }
      }

      .codeLogin {
        text-align: center;
        margin-top: 5px;
      }
    }

    .other-patterns {
      position: absolute;
      left: 50%;
      top: 400px;
      margin-left: -55px;
      font-size: 13px;
      cursor: pointer;
    }
  }

  .IDLogin {
    .triangle-code {
      display: flex;
      position: relative;
      left: -20px;
      top: -40px;

      .qr_login_icon {
        width: 50px;
        -moz-transform: rotate(-180deg); // 翻转图片
        -webkit-transform: rotate(-180deg);
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
        cursor: pointer;
      }

      .secure-login {
        width: 120px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin-top: 15px;
        background-color: #959595;
        color: ivory;
        font-size: 12px;
        border-radius: 5px;

        .small-triangle {
          position: absolute;
          top: 15px;
          left: 44px;
          width: 0px;
          height: 0px;
          border-style: solid;
          border-width: 0px 15px 5px 0;
          border-color: transparent #959595 transparent transparent;
        }
      }
    }

    .loginInput {
      margin-top: -50px;
      text-align: center;

      .loginBg {
        width: 300px;
      }

      .account-number {
        padding: 15px;

        .phoneNumber {
          position: relative;
          display: flex;
          align-items: center;
          width: 285px;
          height: 42px;
          padding: 0 10px;
          border: 1px solid #cfcaca;
          background-color: #fff;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;

          .icon-shouji {
            margin-right: 3px;
            margin-top: 5px;
            font-size: 18px;
          }

          /deep/ .el-dropdown-link {
            width: 30px;
            font-size: 12px;

            .el-icon-caret-bottom {
              margin: 0 7px;
            }
          }

          .phoneNumber-input {
            position: absolute;
            right: 0;
            top: 0;
            width: 190px;
            border-left: 1px solid #b4b2b2;
          }

          /deep/ .phoneNumber-input .el-input__inner {
            width: 180px;
            border: none;
            font-size: 12px;
            color: rgb(190, 185, 190);
          }
        }

        .password {
          display: flex;
          align-items: center;
          width: 285px;
          background-color: #fff;
          padding: 0 10px;
          border: 1px solid #cfcaca;
          border-top: none;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;

          .icon-suo {
            font-size: 18px;
          }

          .password-input {
            width: 190px;
          }
          /deep/ .password-input .el-input__inner {
            border: none;
            font-size: 12px;
            color: rgb(190, 185, 190);
          }

          .reset-password {
            font-size: 12px;
            margin-left: 5px;
            color: rgb(190, 185, 190);
            cursor: pointer;
          }
        }
      }
    }

    .login-button {
      padding: 0 15px;

      .el-checkbox {
        /deep/ .el-checkbox__label {
          color: #504e4e;
        }

        /deep/ .el-checkbox__input .el-checkbox__inner {
          background-color: #fff;
          border-color: #b8b4b4;
        }

        /deep/ .el-checkbox__inner::after {
          border-color: #ea4848;
        }
      }

      /deep/ .is-plain {
        width: 100%;
        height: 45px;
        margin-top: 15px;
        font-size: 18px;
        color: #fff;
        background-color: #ea4848;
        border-color: #ea4848;
      }

      /deep/ .is-plain:hover {
        background-color: #c72e2e;
        border-color: #c72e2e;
      }

      .register-button {
        margin-top: 15px;
        text-align: center;
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
      }

      .other-ways-login {
        margin-top: 20px;

        li {
          float: left;
          width: 40px;
          height: 40px;
          margin-left: 41px;
          border: 1px solid #d7d7d7;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
        }

        .WeChat-login {
          margin-left: 1px;

          .icon-weixin {
            display: block;
            margin-top: 2px;
            margin-left: 2px;
            font-size: 24px;
            color: #67b633;
          }
        }

        .WeChat-login:hover {
          background-color: #67b633;

          .icon-weixin {
            color: #fff;
          }
        }

        .QQ-login {
          .icon-qq1 {
            font-size: 20px;
            color: #34a0df;
          }
        }

        .QQ-login:hover {
          background-color: #34a0df;
          .icon-qq1 {
            color: #fff;
          }
        }

        .microblog-login {
          .icon-weibo {
            display: block;
            margin-top: 2px;
            font-size: 26px;
            color: #ea4848;
          }
        }

        .microblog-login:hover {
          background-color: #ea4848;

          .icon-weibo {
            color: #fff;
          }
        }

        .NetEase-mail-login {
          .icon-iconfontwangyi {
            font-size: 22px;
            color: #d63b32;
          }
        }

        .NetEase-mail-login:hover {
          background-color: #d63b32;

          .icon-iconfontwangyi {
            color: #fff;
          }
        }
      }
    }
      .clause {
        margin-top: 30px;
        margin-left: 10px;

        /deep/ .el-checkbox__inner {
          background-color: #d33a31;
          border-color: #d33a31;
        }

        /deep/ .el-checkbox__label {
          color: #a7a7a7;
          font-size: 12px;

          a {
            color: #567db3;
          }
        }
      }
  }

}
</style>

<style>
.el-dialog__wrapper {
  top: -48px;
}

.el-dialog {
  height: 545px;
  background-color: #fafafa;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
