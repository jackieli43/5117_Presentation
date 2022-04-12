<template>
  <div class="aboutParent">

    <div class="aboutTitle">
      <h1>This is an about page</h1>
    </div>

    <div class="aboutBody">
      <h1>So much Stuff!</h1>
    </div>

    <div class="groceryListTitle">
      <h2>My grocery List</h2>
    </div>

    <div class="aboutGroceryList">
      <ul class="aboutList">
        <li>tomato</li>
        <li>potato</li>
        <li>ramen</li>
      </ul>
    </div>

    <div class="movieListTitle">
      <h2>My Movie List</h2>
    </div>

    <div class="aboutMovieList">
      <ul class="aboutList"> 
        <li>Iron man 1</li>
        <li>Iron man 2</li>
        <li>Iron man 3</li>
      </ul>
    </div>

  </div>
</template>

<style scoped>

.aboutParent {
  /* background-color: yellow; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.aboutTitle > h1{
  color: orange;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1 {
  color: blue;

}

.aboutGroceryList {
  color: maroon;
  text-decoration: none;
}

.aboutGroceryList > ul {
  list-style: none;
}

h2 {
  background: black;
}




</style>