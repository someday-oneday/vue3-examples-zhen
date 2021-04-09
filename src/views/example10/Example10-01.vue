<template>
  <div>
    <p>{{ user.id }} / {{ user.name }}</p>
    <hr />
    <p>
      <a key="" @click.prevent="choseUser(user.id)">
        {{ user.name }}
      </a>
    </p>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { LIST_USER_COURSES } from "@/store/VuexTypes";
import { User } from "@/datasource/Types";
import axios from "@/axios";

function useUserCourses(store: Store<State>) {
  const choseUser = (userId: number) => {
    store.dispatch(LIST_USER_COURSES, userId);
  };
  return {
    choseUser
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({});
    const store: Store<State> = useStore();
    const courses = computed(() => store.state.userCourses);
    const { choseUser } = useUserCourses(store);
    axios.get("user/12").then(resp => {
      user.value = resp.data.data.user;
    });
    return {
      user,
      courses,
      choseUser
    };
  }
});
</script>
