<template>
  <b-container class="home">
    <b-row class="justify-content-center">
      <b-col sm="auto" md="10" lg="8">
        <b-img
          alt="Raptor Print logo"
          id="logo"
          center
          :src="require('../assets/RaptorPrint_REVISED-01-01.png')"
        />
      </b-col>
    </b-row>
    <b-container class="info-container">
      <b-row class="justify-content-center">
        <b-col sm="auto" md="10" lg="10">
          <Info class="info" />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col sm="auto" md="10" lg="8">
          <Inquire show="true" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="justify-content-center">
        <b-col>
          <Testimonials />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inquire from "@/components/Inquire.vue";
import Info from "@/components/Info.vue";
import Testimonials from "@/components/Testimonials.vue";

@Component({
  components: {
    Testimonials,
    Inquire,
    Info
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "src/custom.scss";

.home {
  padding-bottom: 4rem;
}

#logo {
  max-width: 100%;
  padding-bottom: 2rem;
}

.info {
  padding: 1rem 0;
}

.info-container {
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
}

@media (min-width: 576px) {
  .info-container {
    width: 540px;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .info-container {
    width: 720px;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .info-container {
    width: 950px;
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  .info-container {
    width: 1140px;
    max-width: 100%;
  }
}
</style>
