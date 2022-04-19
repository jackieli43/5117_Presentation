<template>
  <div>
    <div class="block" id="b1" />
    <div class="block" id="b2" />
    <div class="block" id="b3" />
    <div class="block" id="b4" />
    <div class="block" id="b5" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#library() {
  .sequential-colors() {
    c1: #eff3ff;
    c2: #bdd7e7;
    c3: #6baed6;
    c4: #3182bd;
    c5: #08519c;
  }
  .diverging-colors() {
    c1: #d7191c;
    c2: #fdae61;
    c3: #ffffbf;
    c4: #abd9e9;
    c5: #2c7bb6;
  }
}

@data-mode: diverging;

.block {
    border: 1px solid black;
    width: 50px;
    height: 50px;
}

#b1 when (@data-mode = sequantial) {
    background-color: #library.sequential-colors[c1];
}
#b2 when (@data-mode = sequantial) {
    background-color: #library.sequential-colors[c2];
}
#b3 when (@data-mode = sequantial) {
    background-color: #library.sequential-colors[c3];
}
#b4 when (@data-mode = sequantial) {
    background-color: #library.sequential-colors[c4];
}
#b5 when (@data-mode = sequantial) {
    background-color: #library.sequential-colors[c5];
}

#b1 when (@data-mode = diverging) {
    background-color: #library.diverging-colors[c1];
}
#b2 when (@data-mode = diverging) {
    background-color: #library.diverging-colors[c2];
}
#b3 when (@data-mode = diverging) {
    background-color: #library.diverging-colors[c3];
}
#b4 when (@data-mode = diverging) {
    background-color: #library.diverging-colors[c4];
}
#b5 when (@data-mode = diverging) {
    background-color: #library.diverging-colors[c5];
}

</style>