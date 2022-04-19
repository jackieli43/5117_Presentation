<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
    <code>printf("Hello, World!");</code>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
nav {
  text-align: left;
}

@import "~@/assets/bootstrap-less-master/bootstrap/bootstrap.less";
@import (optional) "~@/assets/doesNotExist.less";



</style>