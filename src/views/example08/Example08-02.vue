<template>
  <div>
    <h1>传参</h1>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>createTime</td>
        <td>operation</td>
      </tr>
      <tr v-for="(c, index) in courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
        <td>
          <button @click="(courseEdit = c), (active = true)">Edit</button>
        </td>
      </tr>
    </table>

    <p>
      {{ courseEditedName }}
    </p>
    <editbutton2
      v-if="active"
      :course="courseEdit"
      @emitClose="active = false"
      @emitSubmit="onEmitSubmit"
    />
  </div>
</template>
<script lang="ts">
import { Course } from "@/datasource/Types";
import { State } from "@/store";
import { LIST_COURSES } from "@/store/VuexTypes";
import { Store, useStore } from "vuex";
import { computed, defineAsyncComponent, defineComponent, ref, Ref } from "vue";
const editbutton2 = defineAsyncComponent(() => import("./EditButton-02.vue"));
export default defineComponent({
  components: { editbutton2 },
  setup() {
    useStore().dispatch(LIST_COURSES);
    const store: Store<State> = useStore();
    const courses = computed(() => store.state.courses);
    const active = ref(false);
    const courseEditedName = ref("");
    const courseEdit: Ref<Course> = ref({});
    const onEmitSubmit = (name: string) => {
      active.value = false;
      courseEditedName.value = name;
    };
    return {
      courses,
      active,
      courseEditedName,
      courseEdit,
      onEmitSubmit
    };
  }
});
</script>
