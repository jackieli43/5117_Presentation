<template>
  <div class="demo">
    <div id="block"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#block {
  border: 1px solid black;
  width: 200px;
  height: 200px;
  background-color: blue;
}

// variable
@make-it-red: false;

// CSS Guards
#block when (@make-it-red = true) {
  background-color: red;
}

#block when not (@make-it-red = true) {
  background-color: yellow;
}
</style>