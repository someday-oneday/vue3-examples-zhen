<template>
  <div>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    从setup()中获取studentID: {{ sidR }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const sidR = ref(props.sid);
    console.log(sidR);
    return {
      sidR
    };
  }
});
</script>
