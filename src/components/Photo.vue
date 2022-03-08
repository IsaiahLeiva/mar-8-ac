<template>
  <div class="card" style="">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ photo.title }}</h5>
      <p class="explanation">{{ photo.explanation }}</p>
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