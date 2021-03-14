<template>
  <b-container class="inquire-container">
    <b-card class="text-left">
      <b-card-title>
        Get in Touch
      </b-card-title>
      <b-card-text>
        For 3D Printing and Engineering Consultation, fill out the contact form
        below, or email us directly at sales@raptorprint.com.au
      </b-card-text>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          class="mb-0 text-center"
          label="Email address:"
          label-for="input-1"
          label-align="left"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
            lazy
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Name:"
          label-for="input-2"
          label-align="left"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
            lazy
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Message:"
          label-for="input-3"
          label-align="left"
        >
          <b-form-textarea
            id="textarea-1"
            v-model="form.message"
            placeholder="Enter a message....."
            rows="4"
            max-rows="8"
            lazy
          />
        </b-form-group>
        <b-form-group class="text-right">
          <b-button
            type="submit"
            class="submit-button"
            :disabled="submitting"
            pill
            variant="primary"
            size="lg"
            >Submit</b-button
          >
        </b-form-group>
      </b-form>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  name: "Inquire"
})
export default class Inquire extends Vue {
  constructor() {
    super();
    this.form = {} as FormData;
    this.form.email = "";
    this.form.name = "";
    this.form.message = "";
    this.submitting = false;
    this.show = true;
  }

  @Prop({ required: true }) readonly show: boolean;
  private form: FormData;
  private submitting: boolean;

  public onSubmit(evt: Event): void {
    evt.preventDefault();
    this.submitting = true;
    axios
      .post("vue.jelwan.com.au/inquire-email", {
        email: this.form.email,
        name: this.form.name,
        message: this.form.message,
        })
      .then(res => {
        this.submitting = false
      })
      .catch(err => {
        console.log(err.response);
      });
    setTimeout(() => (this.submitting = false), 1000);
  }

  public onReset(evt: Event): void {
    evt.preventDefault();
    this.form.email = "";
    this.form.name = "";
    this.form.message = "";
  }
}
</script>

<style scoped lang="scss">
@import "src/custom.scss";

.submit-button {
  background-color: $color-green;
}

.inquire-container {
  padding-bottom: 2rem;
}
</style>
