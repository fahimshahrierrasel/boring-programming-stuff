<template>
  <div class="arrays">
    <v-flex xs12 sm6 offset-sm3 mb-3>
      <v-tabs color="primary" dark slider-color="red">
        <v-tab ripple>Integer Arrays</v-tab>
        <v-tab ripple>String Arrays</v-tab>
        <v-tab-item>
          <v-card>
            <v-card-title primary-title>
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
            </v-card-title>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-title primary-title>
              <v-flex>
                <v-subheader class="pl-0">Total Random String</v-subheader>
                <v-slider
                  v-model="total_number_string"
                  thumb-label="always"
                  @change="getStrings()"
                ></v-slider>
              </v-flex>
            </v-card-title>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-flex>
    <v-flex>
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
    </v-flex>
  </div>
</template>

<script>
import faker from "faker";
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
      total_number: 5,
      total_number_string: 5,
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
      numbers: [],
      strings: []
    };
  },
  mounted() {
    this.getNumbers();
  },
  methods: {
    sortArray() {
      if (this.sorted) {
        let tempNumber = this.numbers;
        this.numbers = tempNumber.sort((a, b) => a - b);
        this.makeIntegerArraySourceCode();
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
      this.makeIntegerArraySourceCode();
    },
    getStrings() {
      for (var i = 0; i < this.total_number_string; i++) {
        this.strings.push(faker.random.word().toLowerCase());
      }
      let concatedString = this.strings.join('", "');
      concatedString = `"${concatedString}"`;
      this.makeStringArraySourceCode(concatedString);
    },
    makeIntegerArraySourceCode() {
      this.languages.forEach(language => {
        if (language.lang === "cpp") {
          language.src = `int array[] = {${this.numbers}};`;
        } else if (language.lang === "java") {
          language.src = `int[] array = {${this.numbers}};`;
        } else if (language.lang === "kotlin") {
          language.src = `val array = arrayOf(${this.numbers})`;
        } else if (language.lang === "python") {
          language.src = `array = [${this.numbers}]`;
        } else if (language.lang === "javascript") {
          language.src = `let array = [${this.numbers}]`;
        }
      });
    },
    makeStringArraySourceCode(concatedString) {
      this.languages.forEach(language => {
        if (language.lang === "cpp") {
          language.src = `string array[${
            this.total_number_string
          }] = {${concatedString}};`;
        } else if (language.lang === "java") {
          language.src = `String[] array = {${concatedString}};`;
        } else if (language.lang === "kotlin") {
          language.src = `val array = arrayOf(${concatedString})`;
        } else if (language.lang === "python") {
          language.src = `array = [${concatedString}]`;
        } else if (language.lang === "javascript") {
          language.src = `let array = [${concatedString}]`;
        }
      });
    }
  },
  computed: {}
};
</script>
