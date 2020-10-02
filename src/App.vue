<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

i,b {
  font-style: normal;
}

ul,ol li {
  list-style: none;
}

a {
    /* 取消a标签默认下划线 */
    text-decoration: none;
}

/* 清除浮动，解决margin-top塌陷 */
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.celarfix {
    zoom: 1;
}
</style>
