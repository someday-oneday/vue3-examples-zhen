<template>
  <div>
    <h1>data()</h1>
    <p>
      {{ message }}
    </p>
    <hr />
    <h1>Computed</h1>
    <p>
      {{ isShow ? "为true显示" : "为flase显示" }}
      <br />
      {{ reversMessage }}
      <br />
      {{ user.name }}
      <br />
      <button type="button" @click="change">change</button>
      <br />
      {{ user.insertTime }}
      <br />
      {{ myData }}
      <br />
      <button type="button" @click="addAddress">change</button>
      <br />
      {{ user.address }}
      <br />
      {{ myReplace(user.insertTime) }}
    </p>
    <hr />
    <h1>watch</h1>
    <p>
      <button @click="isShow = !isShow">change isShow</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    isShow: false,
    message: "hello",
    user: {
      name: "BO",
      insertTime: "2046-04-09T11:04:25",
      address: ""
    }
  }),
  methods: {
    change() {
      this.user.name = "SUN";
    },
    addAddress() {
      this.user.address = "999";
    }
  },
  computed: {
    myData(): string {
      return this.user.insertTime.replace("T", " ");
    },
    reversMessage(): string {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    myReplace() {
      return (data: string) => data.replace("T", " ");
    }
  },
  watch: {
    isShow(newValue, oldValue) {
      alert(`新值为${newValue}`);
    }
  }
});
</script>
