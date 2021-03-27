<template>
  <div>
    <h1>composition-api</h1>
    <hr />
    <h1>ref()</h1>
    <br />
    messageRef: {{ messageRef }}
    <button type="button" @click="changeUserRef">changeUserRef</button>
    <br />
    {{ userRef?.name }} {{ userRef?.insertTime }} {{ userRef?.address }}
    <hr />
    <h1>computed()</h1>
    <br />
    {{ userComputed }}
    <hr />
    <h1>watch()</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { User } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const isShow = false;
    const messageRef = ref("hello");
    const user: User = {
      name: "BO",
      insertTime: "2046-04-09T11:04:25"
    };
    const userAsync: User = {
      name: "SUN",
      insertTime: "2046-04-11T20:24:59",
      address: "956"
    };
    const userRef = ref(user);
    const changeUserRef = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    const userComputed = computed(() =>
      userRef.value.insertTime?.replace("T", " ")
    );
    watch(userRef, (newUser, oldUser) =>
      alert(`用户名被改为：${newUser.name}`)
    );
    return {
      isShow,
      userAsync,
      messageRef,
      userRef,
      userComputed,
      changeUserRef
    };
  }
});
</script>
