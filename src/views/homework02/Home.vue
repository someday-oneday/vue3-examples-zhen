<template>
  <div>
    <div>
      <router-link :to="{ name: 'foods' }" style="text-decoration: none">
        美食
      </router-link>
      |
      <router-link to="/homework02/location" style="text-decoration: none">
        本地
      </router-link>
      |
      <a href="" @click.prevent style="text-decoration: none">跑腿</a>
    </div>
    <p>
      <router-link
        to="/homework02/orders"
        style="text-decoration: none"
        class="order"
      >
        订单：{{ cost }}
      </router-link>
    </p>
    <router-view style="padding: 5px" />
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    const orders = store.state.orders;
    const cost = computed(() =>
      orders
        .reduce((pre, cur) => pre + cur.quantity * cur.item.price!, 0)
        .toFixed(2)
    );
    return {
      cost
    };
  }
});
</script>
<style scoped>
.order {
  display: inline-black;
  background: sandybrown;
  border-radius: 5px;
}
</style>
