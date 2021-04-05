<template>
  <div>
    <p>{{ user.name }} / {{ user.address }}</p>
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="asyncUpdate">asynvUpdate</button>
    </p>
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { UPDATE_USER } from "@/store/VuexTypes";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref, Ref } from "vue";
function useAsyncUpdateUser(myUser: Ref<User>, store: Store<State>) {
  const asyncUpdate = () =>
    store.dispatch(UPDATE_USER, {
      name: myUser.value.name,
      address: myUser.value.address
    } as User);
  return {
    asyncUpdate
  };
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const user = computed(() => store.state.user);
    const myUser: Ref<User> = ref({});
    const { asyncUpdate } = useAsyncUpdateUser(myUser, store);
    return {
      store,
      user,
      myUser,
      asyncUpdate
    };
  }
});
</script>
