<template>
  <div>
    <h3>{{ shop?.name }}</h3>
    <div class="shop" v-for="(item, index) of shop?.items" :key="index">
      <img :src="item.url" alt="" />
      <div class="card">
        {{ item.name }}
        <br />
        {{ item.price }}
        <br />
        {{ item.sales }}
        <br />
        <button @click="remove(item)">-</button>
        {{ orderQ(item) }}
        <button @click="add(item)">+</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { GET_SHOP } from "@/store/VuexTypes";
import { Item } from "./homework02";

export default defineComponent({
  props: {
    sid: String
  },
  setup(props) {
    const store = useStore<State>();
    const shop = computed(() =>
      store.state.shopCache.find(s => s.id == props.sid)
    );
    !shop.value && store.dispatch(GET_SHOP, props.sid);
    const orders = store.state.orders;
    const add = (item: Item) => {
      let order = orders.find(o => o.item.id == item.id);
      if (order) {
        order.quantity++;
      } else {
        order = { quantity: 1, item: item };
        orders.push(order);
      }
    };
    const remove = (item: Item) => {
      const order = orders.find(o => o.item.id == item.id);
      if (order) {
        const q = order.quantity--;
        if (q == 0) {
          orders.splice(orders.indexOf(order), 1);
        }
      }
    };
    const orderQ = computed(() => (item: Item) => {
      const o = orders.find(o => o.item.id == item.id);
      return o ? o.quantity : 0;
    });
    return {
      remove,
      orderQ,
      add,
      shop
    };
  }
});
</script>
<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
h3 {
  margin: 0;
}
.shop {
  padding: 5px;
}
img {
  width: 200px;
  padding: 5px;
}
</style>
