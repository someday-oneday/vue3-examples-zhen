<template>
  <div>
    <h1>组件化设计与传参</h1>
    <item v-for="(c, index) in courses" :key="index" :course="c" />
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import item from "./Item.vue";
import { LIST_COURSES } from "@/store/VuexTypes";
export default defineComponent({
  components: { item },
  setup() {
    const store = useStore<State>();
    store.dispatch(LIST_COURSES);
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
