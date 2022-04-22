<template>
  <div class="special-topics center">
    <label for="topic">Choose a topic:</label>
    <select name="topic" id="topic" v-model="selected">
      <option disabled value="">Please select one</option>
      <option>CSS Guards</option>
      <option>Detached Rulesets</option>
      <option>Maps</option>
      <option>Import</option>
    </select>

    <CSSGuard v-if="selected == 'CSS Guards'" />
    <detached-rulesets v-if="selected == 'Detached Rulesets'" />
    <maps-comp v-if="selected == 'Maps'" />
    <import-comp v-if="selected == 'Import'" />
    <plugin-comp v-if="selected == 'Plugin'" />
  </div>
</template>

<script>
import CSSGuard from "@/components/CSSGuard.vue";
import DetachedRulesets from "@/components/DetachedRulesets.vue";
import MapsComp from "@/components/MapsComp.vue";
import ImportComp from "@/components/ImportComp.vue";
export default {
  components: {
    CSSGuard,
    DetachedRulesets,
    MapsComp,
    ImportComp,
  },
  name: "SpecialTopics",
  data: function () {
    return {
      selected: "",
    };
  },
};
</script>

<style lang="less" scoped>
div {
  text-align: left;
}

.center {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 3px solid #42b983;
  padding: 10px;
}
</style>