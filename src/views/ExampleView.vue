<template>
    <div>
  This is where I would my examples.
  IF I HAD ANY!
  <image-toggle :img1="require('../assets/metalparrot.gif')" :img2="require('../assets/oldtimeyparrot.gif')" />
  </div>
</template>

<script>
import ImageToggle from '@/components/ImageToggle.vue'

export default {
  components: { ImageToggle },
  data: function() {
    return {
      test_vals: false
    }
  },
}
</script>

<style>

</style>