<template>
  <b-container class="testimonials-container">
    <b-card-group deck>
      <b-card
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="testimonial"
      >
        <h4>
          {{ testimonial.customerName }}
        </h4>
        <p v-for="message in testimonial.messages" :key="message">
          {{ message }}
        </p>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

class Testimonial {
  constructor(id: number, name: string, messages: string[]) {
    this.id = id;
    this.customerName = name;
    this.messages = [];
    messages.forEach(message => {
      this.messages.push(message);
    });
  }
  id: number;
  customerName: string;
  messages: string[];
}

@Component({
  name: "Testimonials"
})
export default class Testimonials extends Vue {
  testimonials: Testimonial[] = [
    new Testimonial(1, "Hannah Hallam-Eames", [
      "Mark is absolutely the best person for any 3D modeling job. He ended up not only resizing it (as was my original request) but he also very quickly fixed it without any prompts whatsoever.",
      "Then on top of that, he actually 3D printed the object himself and sent it out to me! I, therefore, would have no hesitation in concluding he is an incredibly industrious, efficient, innovative, and generous designer.",
      "For all of my future projects that will pop up every few months, Mark will be my guy! Highly, highly recommend him above anyone else."
    ]),
    new Testimonial(2, "Mem Salih", [
      "Mark is an exceptional service provider, and great communicator. He is also great at his chosen profession, which shines through in his work.",
      "Our rather simple project was done remotely, and went very smoothly, thanks to Mark's patience and focus."
    ]),
    new Testimonial(3, "Tim O'Brien", [
      "Mark was an absolute pleasure to deal with. He was efficient, professional, and intent on making sure that every aspect of my order was exactly what I needed.",
      "I was very satisfied with the finished product, and would definitely recommend Mark to anyone who was in need of 3D printing. I will certainly be contacting him again in the future for any other projects."
    ])
  ];
}
</script>

<style scoped lang="scss"></style>
