      //NOTE: Below (line 6) I'd like to know where we typically get the different properties of the image/or anything else for that matter.
<template>
  <div class="card" style="">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ photo.title }}</h5>
      <p class="explanation">{{ photo.explanation }}</p>
    </div>
  </div>
</template>

//NOTE: what did we just do below in our script?
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