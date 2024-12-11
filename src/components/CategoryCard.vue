<template>
  <div class="category-card">
    <img :src="require(`@/assets/${img}`)" :alt="title" />

    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
  },
};
</script>

<style scoped>
.category-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.category-card img {
  width: 30%;
  height: auto;
  border-radius: 8px;
}
.category-card h3 {
  margin-top: 10px;
}
</style>
