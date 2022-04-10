<template>
  <div class="tagList">
      <div class="tag" v-for="tag, index in tags" :key="tag">
        {{tag}}
        <span class="remove" @click="remove(index)">X</span>
      </div>
      <div class="add">
      <input v-model="newTag" placeholder="add new tag" @keyup.enter="add(newTag)"/>
      <button @click="add(newTag)">+</button>
      </div>
  </div>
</template>

<script>
export default {
    name:"tagList",
    props: ['tags'],
    data: function() {
        return {
            newTag:""
        }
    },
    methods: {
        remove: function(index) {
            let newTags = this.tags.slice(0, index).concat(this.tags.slice(index+1))
            this.$emit('updated', newTags)
        },
        add: function(tag) {
            let newTags = [...this.tags] //copy
            newTags.push(tag);
            this.$emit('updated', newTags)
            this.newTag=""
        }
    }
}
</script>

<style scoped>
.tagList {
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: flex-start;
    gap:0.2rem;
    align-items: center;
}

.tag {
    background-color: olive;
    border: 1px solid #585800;
    padding-right: 0.1rem;
    padding-left: 0.2rem;
    border-radius: 1rem;
}

.tag .remove {
    background-color: #9E9E1E;
    border: 1px solid #585800;
    padding:0.1rem;
    border-radius: 1rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    display:inline-block;
    width:1rem;
    text-align: center;
    cursor: pointer;
}

.add input {
    width:5rem;
    transition-duration: 100ms;

}

.add input:focus {
    width:10rem;
}

</style>