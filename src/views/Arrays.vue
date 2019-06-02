<template>
  <div class="arrays">
    <v-layout class="mb-5">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Random Number Array</h3>
              <div>
                <v-layout row wrap>
                  <v-flex lg6 xs12 md12>
                    <v-text-field
                      v-model="min_number"
                      label="Minimum Number"
                      outline
                      class="ma-1"
                      type="number"
                      @change="getNumbers()"
                    ></v-text-field>
                  </v-flex>

                  <v-flex lg6 xs12 md12>
                    <v-text-field
                      v-model="max_number"
                      label="Maximum Number"
                      outline
                      class="ma-1"
                      type="number"
                      @change="getNumbers()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex lg12 xs12 md12>
                    <v-subheader class="pl-0">Total Random Number</v-subheader>
                    <v-slider
                      v-model="total_number"
                      thumb-label="always"
                      @change="getNumbers()"
                    ></v-slider>
                  </v-flex>
                  <v-flex lg12 xs12 md12>
                    <v-checkbox
                      color="primary"
                      v-model="sorted"
                      :label="`${sorted ? 'Sorted' : 'Unsorted'}`"
                      @change="sortArray()"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <div>
      <v-tabs color="primary" dark slider-color="red">
        <v-tab v-for="language in languages" :key="language.lang" ripple>{{
          language.lang
        }}</v-tab>
        <v-tab-item v-for="language in languages" :key="language.lang">
          <v-card flat class="pa-1">
            <v-card-text>
              <highlight-code
                class="title"
                :lang="language.lang"
                :auto="true"
                :code="language.src"
              >
              </highlight-code>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
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
      min_number: 1,
      max_number: 100,
      total_number: 10,
      sorted: false,
      languages: [
        {
          lang: "cpp",
          src: "int array[] = {};"
        },
        {
          lang: "java",
          src: "int[] array = new int[] {};"
        },
        {
          lang: "kotlin",
          src: "val array = arrayOf()"
        },
        {
          lang: "python",
          src: "array = []"
        },
        {
          lang: "javascript",
          src: "let array = []"
        }
      ],
      numbers: []
    };
  },
  mounted() {},
  methods: {
    sortArray() {
      if (this.sorted) {
        let tempNumber = this.numbers;
        this.numbers = tempNumber.sort((a, b) => a - b);
        this.makeSourceCode();
      }
    },
    getNumbers() {
      this.numbers = [];
      for (var i = 0; i < this.total_number; i++) {
        this.numbers.push(
          Math.floor(
            Math.random() * (this.max_number - this.min_number) +
              this.min_number
          )
        );
      }
      this.sortArray();
      this.makeSourceCode();
    },
    makeSourceCode() {
      this.languages.forEach(language => {
        if (language.lang === "cpp") {
          language.src = `int array[] = {${this.numbers}};`;
        } else if (language.lang === "java") {
          language.src = `int[] array = new int[]{${this.numbers}};`;
        } else if (language.lang === "kotlin") {
          language.src = `val array = arrayOf(${this.numbers})`;
        } else if (language.lang === "python") {
          language.src = `array = [${this.numbers}]`;
        } else if (language.lang === "javascript") {
          language.src = `let array = [${this.numbers}]`;
        }
      });
    }
  },
  computed: {
    sourceCode() {
      return this.getNumbers();
    }
  }
};
</script>
