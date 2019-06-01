<template>
  <v-navigation-drawer fixed app v-model="drawer">
    <v-list class="pa-5">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Lazy Programmer's Stuff</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-divider></v-divider>
      <v-list-tile
        v-for="item in drawerItems"
        :key="item.title"
        @click="goTo(item.title)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { EventBus } from "../event-bus.js";

export default {
  data: () => ({
    drawer: false,
    drawerItems: [
      { title: "Home", icon: "home" },
      { title: "Arrays", icon: "dashboard" },
      { title: "About", icon: "account_box" }
    ]
  }),
  mounted() {
    EventBus.$on("drawer-toggle", drawer => {
      this.drawer = drawer;
    });
  },
  methods: {
    goTo(title) {
      this.$router.push({ name: title.toLowerCase() });
      this.closeDrawer();
    },
    closeDrawer() {
      this.drawer = false;
      EventBus.$emit("close-drawer", this.drawer);
    }
  }
};
</script>
