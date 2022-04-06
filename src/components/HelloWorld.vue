<template>
  <div class="hello">
    <editable-span :text="text" @edited="onEdit"> </editable-span>
    {{text}}
  </div>
</template>

<script>
import EditableSpan from './EditableSpan.vue'

export default {
  components: { EditableSpan },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      text:"apple"
    }
  },
  methods: {
    onEdit: function(newVal) {
      this.text = newVal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
