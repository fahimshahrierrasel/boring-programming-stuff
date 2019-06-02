<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-1 v-for="nav in navigations" :key="nav.title">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              :to="nav.route_to"
            >
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ nav.title }}</h3>
                  <div>
                    {{ nav.desc }}
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Lazy Programmer's Stuff",
    meta: [
      {
        name: "theme-color",
        content: "#3F51B5"
      }
    ]
  },
  data() {
    return {
      name: "Lazy Programmer's Stuff",
      navigations: [
        {
          title: "Arrays",
          desc:
            "Create random sorted or unsorted integer arrays in different programming language",
          route_to: "arrays"
        }
      ]
    };
  }
};
</script>
