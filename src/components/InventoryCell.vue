<template>
  <div class="cells">
    <div
      class="cells__droppable"
      v-for="cell in cells"
      :key="cell"
      @drop="onDrop($event, cell)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        class="cells__draggable"
        v-for="item in items.filter((x) => x.category === cell)"
        @dragstart="onDragStart($event, item)"
        :key="item.id"
        :id="item.id"
        draggable="true"
        @click="openDialog($event)"
      >
        <img
          class="cells__draggable-image"
          :src="require(`@/assets/icons/${item.src}.svg`)"
          alt="items"
        />
        <div class="cells__draggable__id">{{ item.count }}</div>
      </div>
    </div>
    <transition name="dialog" mode="in-out">
      <inventory-dialog v-if="isOpenDialog" />
    </transition>
  </div>
</template>

<script setup>
import InventoryDialog from "@/components/InventoryDialog";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cells = computed(() => {
  return store.getters.cells;
});
const items = computed(() => {
  return store.getters.items;
});

const isOpenDialog = computed(() => {
  return store.getters.isOpenDialog;
});

// const isOpenModal = ref(false);
// const activeItemId = ref(0);

const onDragStart = (event, item) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemId", item.id);
};

const onDrop = (event, id) => {
  const itemId = parseInt(event.dataTransfer.getData("itemId"));
  const item = items.value.find((item) => item.id === itemId);
  item.category = id;
  localStorage.setItem(String(item.id), String(item.category));
};

const openDialog = (event) => {
  if (event.target.matches(".cells__draggable")) {
    store.commit("setIsOpenDialog", true);
    store.commit("setActiveItem", Number(event.target.id));
  }
};
</script>

<style lang="scss" scoped>
.cells {
  position: relative;
  display: grid;
  grid-area: cells;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(5, 105px);
  width: 525px;
  height: 100%;
  border-radius: 12px;
  background-color: var(--secondary-bg);
  &__droppable {
    border: 1px solid #4d4d4d;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      border-radius: 12px 0 0 0;
    }
    &:nth-child(5) {
      border-radius: 0 12px 0 0;
    }
    &:nth-child(21) {
      border-radius: 0 0 0 12px;
    }
    &:nth-child(25) {
      border-radius: 0 0 12px 0;
    }
  }
  &__draggable {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background-color: var(--skeleton);
    }

    &__id {
      color: var(--border-color);
      position: absolute;
      padding: 2px 4px;
      bottom: 0;
      right: 0;
      font-size: 10px;
      font-weight: 500;
      border: 1px solid var(--border-color);
      border-radius: 6px 0px 0px 0px;
    }
  }
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-from,
.dialog-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
