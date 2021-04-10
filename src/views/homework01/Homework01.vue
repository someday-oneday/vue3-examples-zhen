<template>
  <div>
    <span :style="{ color: point <= requiredPoint ? 'green' : 'red' }">
      {{ point }}
    </span>
    <span>/{{ requiredPoint }}</span>
    <br />
    <br />
    <div class="course">
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="selectedCourses" :value="c" />
          {{ c.name }} -- {{ c.point }} ({{ c.term }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of selectedCourses" :key="index">
        {{ c.name }} -- {{ c.point }} ({{ c.term }})
        <br />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { listCourses, Course } from "./homework01";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const selectedCourses = ref<Course[]>([]);
    const courses = ref<Course[]>(listCourses());
    const point = ref(0);
    const requiredPoint = 12;
    watch(selectedCourses, () => {
      let sum = 0;
      selectedCourses.value.forEach(s => {
        sum += s.point;
      });
      point.value = sum;
      selectedCourses.value.sort((a, b) => a.term - b.term);
    });
    return {
      courses,
      selectedCourses,
      point,
      requiredPoint
    };
  }
});
</script>
<style scoped>
.course {
  border: red 1px solid;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
}
span {
  font-weight: bolder;
}
</style>
