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
    <base-button mode="red">Удалить предмет</base-button>
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

const closeDialog = () => {
  store.commit("setIsOpenDialog", false);
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
}

hr {
  margin-bottom: 18px;
  width: 220px;
  border: 1px solid var(--border-color);
}
</style>
