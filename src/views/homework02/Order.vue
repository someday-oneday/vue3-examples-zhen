<template>
  <div>
    <div v-for="(o, index) of orders" :key="index">
      {{ o.item.name }} / {{ o.quantity }}
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { State } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const orders = store.state.orders;
    return {
      orders
    };
  }
});
</script>
