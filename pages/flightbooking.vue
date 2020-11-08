<template>
 <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
    ABC

  <vueTimeBoard :bind:value="value" :bind:options="options"></vueTimeBoard>

    </div></div>
</template>  



<script>
import * as moment from 'moment';
import flightGenerator from 'random-flight-generator';
export default {
    data() {
      return {
          value: ["ABCDEF"]
          }
        }
    }