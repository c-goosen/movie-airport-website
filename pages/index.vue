<template>
  <div>
    <hero />
    <!-- <features /> -->
    <!-- <teasers /> -->
    <!-- <prices /> -->
    <call-to-action />
  </div>
</template>

<script>

console.log("Testing")

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    // features: Features,
    // teasers: Teasers,
    // prices: Prices,
    'call-to-action': CallToAction
  }
}
console.log("Website gebou deur Christo Goosen - Anomaloustech.co.za");
</script>
