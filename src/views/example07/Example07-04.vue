<template>
  <div>
    <p>
      {{ user.name }} / {{ user.address }}
      <br />
    </p>
    <p>
      <span v-if="premission(1)">用户权限为1显示</span>
      <br />
      <span v-if="premission(2)">用户权限为2显示</span>
      <br />
    </p>
    <hr />
    <p>
      <span v-if="premissionGetter(1)">用户权限为1显示</span>
      <br />
      <span v-if="premissionGetter(2)">用户权限为2显示</span>
      <br />
    </p>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { GETTER_PREMISSION } from "@/store/VuexTypes";
import { mapGetters, mapState, Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const premissionGetter = computed(() => store.getters[GETTER_PREMISSION]);
    return {
      premissionGetter
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["premission"])
  }
});
</script>
