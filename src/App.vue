<template>
  <v-app>
    <NavigationDrawer />
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title>Lazy Programmer's Stuff</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { EventBus } from "./event-bus.js";
import NavigationDrawer from "./components/NavigationDrawer";
import Footer from "./components/Footer";
export default {
  components: {
    NavigationDrawer,
    Footer
  },
  mounted() {
    EventBus.$on("close-drawer", drawer => {
      this.drawer = drawer;
    });
  },
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      EventBus.$emit("drawer-toggle", this.drawer);
    }
  }
};
</script>
