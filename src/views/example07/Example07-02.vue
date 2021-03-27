<template>
  <div>
    <p>{{ user.name }} / {{ user.address }}</p>
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="updataUser">
        updataUser
      </button>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { UPDATE_USER } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const user = computed(() => store.state.user);
    const myUser = ref<User>({});
    const updataUser = () => {
      store.commit(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    return {
      user,
      myUser,
      updataUser
    };
  }
});
</script>
