<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <p>{{ name }}</p>
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
      name: "Lazy Programmer's Stuff"
    };
  }
};
</script>
