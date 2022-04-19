<template>
  <div class="demo">
    <div id="square"></div>
    <button>Hello</button>
    <a>World</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#square {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    background-color: blue;
}

// variable
@red-square: false;
@dark-mode: false;

// CSS Guards Option 1
#square when (@red-square = true) {
    background-color: red;
}

#square when not (@red-square = true) {
  background-color: yellow;
}

// CSS Guards Option 2
@dr: if(@dark-mode = true, {
  button {
    background-color: black;
    color: white;
  }
});
@dr(true);

</style>