import { createStore } from "vuex";

export interface Items {
  id: number;
  src: string;
  count: number;
  category: number;
}

export interface State {
  items: Items[];
  cells: number[];
}

const store = createStore<State>({
  state: {
    items: [
      {
        id: 1,
        src: "item-green",
        count: 4,
        category: Number(localStorage.getItem("1")) || 1,
      },
      {
        id: 2,
        src: "item-brown",
        count: 2,
        category: Number(localStorage.getItem("2")) || 2,
      },
      {
        id: 3,
        src: "item-purple",
        count: 5,
        category: Number(localStorage.getItem("3")) || 3,
      },
    ],
    cells: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
  getters: {
    items(state) {
      return state.items;
    },
    cells(state) {
      return state.cells;
    },
  },
});

export default store;
