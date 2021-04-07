<template>
  <div>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td @click="sortR('lauguage')">language</td>
        <td @click="sortR('size')">size</td>
        <td @click="sortR('forks')">forks</td>
        <td @click="sortR('stargazers_count')">stars</td>
        <td @click="sortR('updated_at')">updated_at</td>
      </tr>
      <tr v-for="(repo, index) of repos" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ repo?.name }}</td>
        <td>{{ repo?.language }}</td>
        <td>{{ repo?.size }}</td>
        <td>{{ repo?.forks }}</td>
        <td>{{ repo?.stargazers_count }}</td>
        <td>{{ repo?.updated_at }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { GithubRepos } from "@/datasource/Types";
import axios from "@/axios/index";
import { useRoute } from "vue-router";
import { defineComponent, ref, Ref } from "vue";
function useSort(repos: Ref<GithubRepos[]>, reverse: Ref<boolean>) {
  // 这块代码了解即可
  const sortR = (propertyName: string) => {
    repos.value.sort((a: GithubRepos, b: GithubRepos) => {
      type K = keyof GithubRepos;
      const ar: number | string = a[propertyName as K]!;
      const br: number | string = b[propertyName as K]!;
      return reverse.value ? (ar > br ? 1 : -1) : ar > br ? -1 : 1;
    });
    reverse.value = !reverse.value;
  };
  return {
    sortR
  };
}
export default defineComponent({
  setup() {
    const url = useRoute().query.url as string;
    const repos = ref<GithubRepos[]>([]);
    const reverse = ref(false);
    axios
      .create()
      .get(url)
      .then(resp => (repos.value = resp.data));
    const { sortR } = useSort(repos, reverse);
    return {
      repos,
      sortR
    };
  }
});
</script>
