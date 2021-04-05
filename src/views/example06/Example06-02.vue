<template>
  <div>
    <form>
      <label>
        <input type="checkbox" v-model="agreed" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input
            :ref="chRefs"
            :disabled="!agreed"
            v-model="sCoursesRef"
            :value="{ id: c.id }"
            type="checkbox"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <button type="button" :disabled="!agreed || sCoursesRef.length < amount">
        提交
      </button>
    </form>
    <p>
      {{ sCoursesRef }}
    </p>
  </div>
</template>
<script lang="ts">
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
import { defineComponent, ref, watch } from "vue";
const selectedCourses: Course[] = [{ id: 7 }];
export default defineComponent({
  setup() {
    const checkboxs: HTMLInputElement[] = [];
    const chRefs = (el: HTMLInputElement) => checkboxs.push(el);
    const amount = 2;
    const sCoursesRef = ref<Course[]>(selectedCourses);
    const agreed = ref(false);
    const courses = listCourses();
    watch(sCoursesRef, () => {
      const checkboxDis = sCoursesRef.value.length >= amount;
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });
    return {
      checkboxs,
      chRefs,
      amount,
      sCoursesRef,
      agreed,
      courses
    };
  }
});
</script>
