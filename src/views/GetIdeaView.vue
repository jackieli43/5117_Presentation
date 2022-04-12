<template>
  <div class="getIdeaParent">
      <div class="getIdeaTitle">
         <h1> Ideas </h1>
      </div>
      <h1> So Many Great Ideas</h1>

      <div class="getIdeaBodyTitle">
          <h1> Look at all these great Ideas</h1>
      </div>

      
    <div v-if="ideas===false">
        loading
    </div>
    <div v-else>
        <ul>
        <li v-for="idea in ideas" :key="idea.id">
            <router-link :to="{name:'ideaView', params:{ideaId:idea.id}}"> {{idea.short}} </router-link>
        </li>
        </ul>
        <input v-model="newIdea" placeholder="add new Idea" @keyup.enter="addIdea"/>
      <button @click="addIdea">+</button>
    </div>
  </div>
</template>

<script>
import { db, auth } from '@/firebaseConfig'
export default {
    data: function() {
        return {
            ideas: false,
            newIdea: ""
        }
    },
    firestore: function() {
        return {
            ideas: db.collection('freeTimeIdea').where('owner', '==', auth.currentUser.uid)
        }
    },
    methods: {
        addIdea: function() {
            console.log({
                short: this.newIdea,
                long: 'Click to add a description!',
                owner: auth.currentUser.uid,
                subIdeas: [],
                tags: []
            })
            db.collection('freeTimeIdea').add({
                short: this.newIdea,
                long: 'Click to add a description!',
                owner: auth.currentUser.uid,
                subIdeas: [],
                tags: []
            }).then( ref => {
                // I'm not 100% sold on this -- it's a bit ... weird. Might be worth going to a loading screen for a flash
                // doing nothing and waiting, however, isn't good.
                this.$router.push({name:'ideaView', params:{ideaId:ref.id}})
            });
            
        }
    }
}
</script>

<style scoped>

h1 {
    color: blue;
}

.getIdeaTitle {
    color: red;
}

.getIdeaTitle > h1 {
    color: orange;
}

.getIdeaBodyTitle > h1 {
    color: green;
}

</style>