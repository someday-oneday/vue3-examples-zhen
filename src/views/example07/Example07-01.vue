<template>
  <div>
    {{ $store.state.user.name }} / {{ $store.state.user.address }}
    <hr />
    {{ userS.name }} / {{ userS.address }}
    <hr />
    {{ user.name }} / {{ user.address }}
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { mapState, Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userS = computed(() => store.state.user);
    return {
      userS
    };
  },
  computed: {
    ...mapState(["user"])
  }
});
</script>
