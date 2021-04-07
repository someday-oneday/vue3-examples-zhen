<template>
  <div>
    <p>
      <img :src="user.avatar_url" alt="" style="width: 30%" />
      <br />
      login:{{ user.login }}
      <br />
      company: {{ user.company }}
      <br />
      <router-link :to="`/example09-02?url=${user.repos_url}`">
        {{ user.repos_url }}
      </router-link>
      <br />
      public_repos:{{ user.public_repos }}
      <br />
      followers:{{ user.followers }}
      <br />
    </p>
  </div>
</template>
<script lang="ts">
import { GithubUser } from "@/datasource/Types";
import axios from "@/axios/index";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const user = ref<GithubUser>({});
    axios
      .create()
      .get("https://api.github.com/users/bwhyman")
      .then(resp => (user.value = resp.data));
    return {
      user
    };
  }
});
</script>
