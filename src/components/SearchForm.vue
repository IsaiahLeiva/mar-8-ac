<template>
  <div class="component">
    <form class="col-6" @submit.prevent="search">
      <div class="input-group m-3">
        <input
          type="date"
          class="form-control"
          placeholder="Search Picture"
          aria-label="Search Picture"
          v-model="query"
        />
        <button class="btn btn-success" type="submit">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { photosService } from "../services/PhotosService";
export default {
  setup() {
    const query = ref("");
    return {
      query,
      search() {
        photosService.search(query.value);
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>