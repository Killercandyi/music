<template>
   <div>
      <el-container>
       <el-header class="el-header">
          <div class="logo">
             <h1>
                <router-link to="/">
                  <img src="@/assets/logo.png" alt="网易云音乐" class="img-logo">
                </router-link>
             </h1>
          </div>
          <div class="page">
             <i class="el-icon-arrow-left"></i>
             <i class="el-icon-arrow-right"></i>
          </div>
       </el-header>
   </el-container>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-header {
   display: flex;
   align-items: center;
   .logo {
      width: 197px;
      height: 39px;
      overflow: hidden;
      .img-logo {
         object-fit: cover;
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
</style>
