<template>
  <div>
    <h1>Reactive</h1>
    <br />
    {{ user.name }} / {{ user.insertTime }} / {{ user.address }}
    <br />
    <button @click="changeUserWrong">changeUser noe work</button>
    <br />
    <button type="button" @click="changeUserReact">changeUserReact</button>
    <br />
    {{ userReact?.name }} / {{ userReact?.insertTime }} /
    {{ userReact?.address }}
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { User } from "@/datasource/Types";
const user: User = {
  name: "BO",
  insertTime: "2046-04-09T11:04:25"
};
const userAsync: User = {
  name: "SUN",
  insertTime: "2046-04-09T11:04:25",
  address: "956"
};
export default defineComponent({
  setup() {
    let userReact = reactive(user);
    console.log(userReact);
    const changeUserWrong = () => {
      setTimeout(() => {
        userReact = userAsync;
      }, 1000);
    };
    const changeUserReact = () => {
      setTimeout(() => {
        userReact.name = userAsync.name;
        userReact.insertTime = userAsync.insertTime;
        userReact.address = userAsync.address;
      }, 1000);
    };
    return {
      user,
      userReact,
      changeUserWrong,
      changeUserReact
    };
  }
});
</script>
