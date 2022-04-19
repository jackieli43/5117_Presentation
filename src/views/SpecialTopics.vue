<template>
  <div class="special-topics">
    <button class="my-selector">Hello</button>
    <a>World</a>
  </div>
</template>

<script>
export default {
  name: "SpecialTopics",
};
</script>

<style lang="less" scoped>
// CSS Guards
@my-option: true;

// CSS Guards Option 1
button when (@my-option = true) {
  color: white;
}

// CSS Guards Option 2
& when (@my-option = true) {
  button {
    color: white;
  }
  a {
    color: blue;
  }
}

// CSS Guards Option 3
@dr: if(@my-option = true, {
  button {
    color: white;
  }
  a {
    color: blue;
  }
});
@dr();

// Detached Rulesets
@my-ruleset: {
    .my-selector {
      background-color: black;
    }
  };

.special-topics {
  @my-ruleset();
}

// Maps Option 1
@sizes: {
  mobile: 320px;
  tablet: 768px;
  desktop: 1024px;
}

.navbar {
  display: block;

  @media (min-width: @sizes[tablet]) {
    display: inline-block;
  }
}

// Maps Option 2
#library() {
  .colors() {
    primary: green;
    secondary: blue;
  }
}

#library() {
  .colors() { primary: grey; }
}

.button {
  color: #library.colors[primary];
  border-color: #library.colors[secondary];
}

// Import 
// reference
// inline
// optional?

// Plug-in
// vue.config.js
// module.exports = {
//     install: function(less, pluginManager, functions) {
//         functions.add('pi', function() {
//             return Math.PI;
//         });
//     }
// };

</style>