import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import { Course, User } from "@/datasource/Types";
import { listCourses } from "@/datasource/DataSource";
import * as vxt from "./VuexTypes";

export interface State {
  user: User;
  courses: Course[];
  exception: string;
  userCourses: Course[];
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
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data)
};
const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({commit}, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  }
};
const myGetters: GetterTree<State, State> = {
  premission: state => (level: number) => state.user?.level == level,
  [vxt.GETTER_PREMISSION]: state => (level: number) =>
    state.user?.level == level
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {}
});
