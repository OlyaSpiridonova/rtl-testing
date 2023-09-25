import { createStore } from "vuex";

export interface Items {
  id: number;
  src: string;
  count: number;
  category: number;
}

export interface Dialog {
  isOpen: boolean;
  activeItem: Items | null;
  deleteItem: boolean;
}

export interface State {
  items: Items[];
  cells: number[];
  dialog: Dialog;
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
    dialog: {
      isOpen: false,
      activeItem: null,
      deleteItem: false,
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    cells(state) {
      return state.cells;
    },
    isOpenDialog(state) {
      return state.dialog.isOpen;
    },
    activeItem(state) {
      return state.dialog.activeItem;
    },
    isDeleteItem(state) {
      return state.dialog.deleteItem;
    },
  },
  mutations: {
    setIsOpenDialog(state, payload) {
      state.dialog.isOpen = payload;
    },
    setActiveItem(state, payload) {
      state.dialog.activeItem = payload;
    },
    setDeleteItem(state, payload) {
      state.dialog.deleteItem = payload;
    },
  },
});

export default store;
