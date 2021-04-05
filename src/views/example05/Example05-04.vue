<template>
  <div>
    <h1>load Lazy Component</h1>
    <p>
      <button type="button" @click="showAbout = !showAbout">
        show about component
      </button>
    </p>
    <about v-if="showAbout" />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

const about = defineAsyncComponent(() => import("@/views/example05/About.vue"));
export default defineComponent({
  components: { about },
  data: () => ({
    showAbout: false
  })
});
</script>
