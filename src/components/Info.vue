<template>
  <b-container class="justify-content-center info">
    <p class="lead">
      RaptorPrint is an Engineering Consulting team with a passion for helping
      small businesses obtain the required service to turn their concepts into
      reality, from prototyping to mass manufacturing. We also help with
      digitising old engineering drawings, reverse engineering components
      (particularly automotive), and engineering consultations to get you
      pointed in the right direction with minimal cost to you. We also provide a
      3D Printing service as well as manufacturing in metals and plastics.
    </p>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Info"
})
export default class Info extends Vue {}
</script>

<style scoped lang="scss">
p {
  margin: 0;
}

.info {
  padding-bottom: 1rem;
}
</style>
