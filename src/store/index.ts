import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import { Course, User } from "@/datasource/Types";
import { listCourses } from "@/datasource/DataSource";
import * as vxt from "./VuexTypes";

export interface State {
  user?: User;
  courses?: Course[];
  exception?: string;
  userCourses?: Course[];
}

const myState: State = {
  user: {
    name: "BO",
    address: "956",
    level: 1
  },
  courses: [],
  userCourses: [],
  exception: ""
};
export default createStore({
  state: myState,
  mutations: {},
  actions: {},
  modules: {}
});
