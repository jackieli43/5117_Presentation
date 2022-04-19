<template>
  <div class="special-topics center">
    <label for="topic">Choose a topic:</label>
    <select name="topic" id="topic" v-model="selected">
      <option disabled value="">Please select one</option>
      <option>CSS Guards</option>
      <option>Detached Rulesets</option>
      <option>Maps</option>
      <option>Import & Plugin</option>
    </select>

    <CSSGuard v-if="selected=='CSS Guards'" />
    <detached-rulesets v-if="selected=='Detached Rulesets'" />
    <maps-comp v-if="selected=='Maps'" />
    <import-plugin v-if="selected=='Import & Plugin'" />

  </div>
</template>

<script>
import CSSGuard from '@/components/CSSGuard.vue';
import DetachedRulesets from '@/components/DetachedRulesets.vue';
import MapsComp from '@/components/MapsComp.vue';
import ImportPlugin from '@/components/ImportPlugin.vue';
export default {
  components: { CSSGuard, DetachedRulesets, MapsComp, ImportPlugin },
  name: "SpecialTopics",
  data: function () {
    return {
      selected: ''
    }
  }
};
</script>

<style lang="less" scoped>
.center {
  margin: auto;
  width: 50%;
  border: 3px solid #42b983;
  padding: 10px;
}
</style>