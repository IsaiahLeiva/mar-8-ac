<template>
  <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ photo.title }}</h5>
      <p class="card-text"></p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>