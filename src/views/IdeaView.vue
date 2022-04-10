<template>
  <div v-if="data !== false && data !== null">
      <h1> <editable-span :text="data.short" @edited="updateShort"/> </h1>
      <tag-list :tags="data.tags" @updated="updateTags" />
      <editable-div :text="data.long" @edited="updateLong"/>
      <h2> Options: </h2>
      <ul>
          <li v-for="rec,index in data.subIdeas" :key="rec"><span class="delete" @click="removeIdea(index)">(-)</span> {{rec}}  </li>
      </ul>  

      <input v-model="newIdea" placeholder="add new option" @keyup.enter="addIdea"/>
      <button @click="addIdea">+</button>
      <br/>
      <button @click="deleteIdea">DELETE IDEA</button>
  </div>
  <span v-else >
      loading
  </span>
</template>

<script>
import { db } from "@/firebaseConfig.js"
import TagList from '@/components/TagList.vue'
import EditableSpan from '@/components/EditableSpan.vue'
import EditableDiv from '@/components/EditableDiv.vue'

export default {
  components: { TagList, EditableSpan, EditableDiv },
    name:"ideaView",
    props:["ideaId"],
    data:function(){
        return {
            data: false,
            newIdea: "",
            deleting: false
        }
    },
    methods: {
        updateTags: function(newTags) {
            if (this.data) {
                // one way to udpate data -- tell firestore to update it then let the "magic" update everything else.
                this.$firestoreRefs.data.update({tags:newTags})
            }
        },
        addIdea: function() {
            // other way to do it
            let newData = { ...this.data} //make a copy without id (this apparently happens for free before id is non-enumerable)
            newData.subIdeas.push(this.newIdea)
            // then call set to do the whole thing at once.
            this.$firestoreRefs.data.set(newData);
            this.newIdea=""
        },
        removeIdea: function(index) {
            let newSubIdeas = [...this.data.subIdeas] // copying the subIdeas list
            newSubIdeas = newSubIdeas.slice(0, index).concat(newSubIdeas.slice(index+1))
            this.$firestoreRefs.data.update({subIdeas:newSubIdeas})
        },
        updateShort: function(newShort) {
            this.$firestoreRefs.data.update({short:newShort})
        },
        updateLong: function(newLong) {
            this.$firestoreRefs.data.update({long:newLong})
        },
        deleteIdea: function() {
            this.data = false
            this.deleting = true
            this.$firestoreRefs.data.delete().then(()=>{
                this.$router.push("/idea")
            });
            
        }
    },
    firestore: function() {
        return {
            data: db.collection("freeTimeIdea").doc(this.ideaId)
        }
    },
    beforeUpdate: function() {
        // called whenever the data is being updated.
        // if data is being updated from "false" to "null" -- the document wasn't found.
        if (this.data === null && !this.deleting) {
            this.$router.replace("/404")
        }
        
    },
    created: function() {
        // a permission error won't trigger an update
        // so we do this to listen in on errors directly
        // This does also seem to happen on a failed read...
      this.$firestoreRefs.data.onSnapshot({error:(err)=>{
          console.log("Caught a firestore error", err.code)
          if(err.code == "permission-denied"  && !this.deleting){
            this.$router.replace("/404")
          }          
      }
      })
    },
}
</script>

<style scoped>
.delete {
    color:olive;
    cursor:pointer;
}
input {
    width:6rem;
    transition-duration: 100ms;

}

input:focus {
    width:15rem;
}
</style>