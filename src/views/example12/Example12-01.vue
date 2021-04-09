<template>
  <div>
    <p>
      <button @click="toWelcome">编程式路由至example01</button>
    </p>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const init = () => console.log(`模拟异步网络请求的函数。${props.sid}`);
    init();
    watch(props, () => init());
    const router = useRouter();
    const toWelcome = () => router.push("/example01");
    return {
      toWelcome
    };
  }
});
</script>
