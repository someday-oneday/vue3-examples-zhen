<template>
  <div>
    <h1>composition</h1>
    <h1>useMessage()函数</h1>
    <br />
    messageRef: {{ messageRef }}
    <br />
    <button type="button" @click="changeMessage">changeMessage</button>
    <br />
    <hr />
    <h1>useUser()函数</h1>
    <button type="button" @click="changeAddress">changeAddress</button>
    <br />
    {{ userRef.name }} / {{ userRef.insertTime }} / {{ userRef.address }}
    <br />
    计算属性返回函数：{{ formatDateFunc(userRef.insertTime) }}
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { computed, defineComponent, Ref, ref } from "vue";

function useMessage(msg: Ref<string>) {
  const reversMessage = computed(() =>
    msg.value
      .split("")
      .reverse()
      .join("")
  );
  const changeMessage = () => {
    msg.value = "composition-api";
  };
  return {
    reversMessage,
    changeMessage
  };
}
function useUser(user: Ref<User>) {
  const formatDateFunc = computed(() => (data: string) =>
    data.replace("T", " ")
  );
  const changeAddress = () => {
    user.value.address = (Math.random() * 1000).toFixed(0).toString();
  };
  return {
    changeAddress,
    formatDateFunc
  };
}
export default defineComponent({
  setup() {
    const user: User = {
      name: "BO",
      insertTime: "2046-04-09T11:04:25"
    };
    const messageRef = ref("hello world");
    const userRef = ref(user);
    const { reversMessage, changeMessage } = useMessage(messageRef);
    const { changeAddress, formatDateFunc } = useUser(userRef);
    return {
      messageRef,
      userRef,
      reversMessage,
      changeMessage,
      changeAddress,
      formatDateFunc
    };
  }
});
</script>
