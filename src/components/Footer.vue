<template>
  <v-footer height="auto" color="indigo">
    <v-layout justify-center row wrap>
      <!-- <v-btn v-for="link in links" :key="link" color="white" flat round>
        {{ link }}
      </v-btn> -->
      <v-flex py-3 text-xs-center white--text xs12>
        &copy;{{ new Date().getFullYear() }} —
        <strong>Fahim Shahrier Rasel</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>
