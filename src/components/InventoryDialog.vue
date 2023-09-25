<template>
  <div class="dialog">
    <img
      class="dialog__image"
      :src="require(`@/assets/icons/${item.src}.svg`)"
      alt="item"
    />
    <button-close @click="closeDialog" />
    <hr />
    <div class="dialog__title" />
    <img
      class="dialog__descr"
      src="../assets/icons/dialog-content.svg"
      alt="dialog content"
    />
    <hr />

    <div v-if="isDeleteItem" class="dialog__delete__item">
      <input type="number" placeholder="Введите количество" />
      <div class="dialog__delete__item-btn">
        <base-button mode="white white-cancel">Отмена</base-button>
        <base-button mode="red red-approve" @click="deleteItemCount"
          >Подтвердить</base-button
        >
      </div>
    </div>

    <base-button v-else mode="red red-delete" @click="onDeleteItem"
      >Удалить предмет</base-button
    >
  </div>
</template>

<script setup>
import ButtonClose from "@/components/UI/ButtonClose";
import BaseButton from "../components/UI/BaseButton";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const item = computed(() => {
  return store.getters.items.find(
    (item) => item.id === store.getters.activeItem
  );
});

const isDeleteItem = computed(() => {
  return store.getters.isDeleteItem;
});

const closeDialog = () => {
  store.commit("setIsOpenDialog", false);
  store.commit("setDeleteItem", false);
};
const onDeleteItem = () => {
  store.commit("setDeleteItem", true);
};

const deleteItemCount = () => {
  store.commit("deleteCountItem", { id: item.value.id, count: 1 });
};
</script>

<style lang="scss" scoped>
.dialog {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 20px 20px 20px;
  right: 0;
  width: 250px;
  height: 86%;
  border-left: 1px solid #4d4d4d;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 0 12px 12px 0;
  transition: margin-right 2s;

  &__image {
    width: 130px;
    padding-bottom: 30px;
  }

  &__title {
    width: 211px;
    height: 30px;
    border-radius: 8px;
    background: var(
      --Skeleton,
      linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%)
    );
  }

  &__descr {
    margin: 24px 0;
  }

  &__delete__item {
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0 0 12px;
    padding: 27px;
    border: 1px solid #4d4d4d;
    background-color: rgb(47 47 47 / 80%);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

    input {
      border-radius: 4px;
      border: 1px solid var(--border-color);
      background-color: transparent;
      width: 210px;
      padding: 12px;
      color: rgba(255, 255, 255, 1);
    }

    &-btn {
      margin-top: 20px;
      display: flex;
      column-gap: 10px;
    }
  }
}

hr {
  margin-bottom: 18px;
  width: 220px;
  border: 1px solid var(--border-color);
}
</style>
