import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import { Course, User } from "@/datasource/Types";
import { listCourses } from "@/datasource/DataSource";
import { getShop, listShops, Order, Shop } from "@/views/homework02/homework02";
import * as vxt from "./VuexTypes";
import axios from "@/axios";
import { ResultVO } from "@/mock";

export interface State {
  user: User;
  courses: Course[];
  exception: string;
  userCourses: Course[];
  // homework02
  shopList: Shop[];
  shopCache: Shop[];
  orders: Order[];
}

const myState: State = {
  user: {
    name: "BO",
    address: "956",
    level: 1
  },
  courses: [],
  userCourses: [],
  exception: "",
  shopList: [],
  shopCache: [],
  orders: []
};
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data),
  [vxt.LIST_COURSES]: (state, data: Course[]) => (state.courses = data),
  [vxt.LIST_USER_COURSES]: (state, data: Course[]) => (state.userCourses = data),
  [vxt.UPDATE_EXCEPTION]: (state, data: string) => (state.exception = data),
  [vxt.LIST_SHOPS]: (state, data: Shop[]) => (state.shopList = data)
};
const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({commit}, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  },
[vxt.LIST_COURSES]: ({commit}) => {
  const courses = listCourses();
  setTimeout(() => commit(vxt.LIST_COURSES, courses), 2000
);},

[vxt.LIST_USER_COURSES]: async ({commit }, userId: string) => {
  const resp = await axios.get<ResultVO>(`users/${userId}/courses`);
  commit(vxt.LIST_USER_COURSES, resp.data.data.courses);
},
[vxt.LIST_SHOPS]: ({ commit, state }) => {
  if (state.shopList.length == 0) {
    setTimeout(() => {
      commit(vxt.LIST_SHOPS, listShops());
    }, 1000);
  }
},
[vxt.GET_SHOP]: ({ state }, sid: number) => {
  // 异步加载数据，并更新state中数据
  setTimeout(() => {
    // 返回可能为空，但强制断言结果不为空
    // state.shopCache.push(getShop(sid)!);
    // &&短路特性。如果shop为空直接结束，不为空执行右表达式
    const shop = getShop(sid);
    shop && state.shopCache.push(shop);
  }, 1000);
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
