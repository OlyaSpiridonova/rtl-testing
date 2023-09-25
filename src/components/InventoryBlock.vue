<template>
  <div class="inventory">
    <img
      src="@/assets/img/main-blur.png"
      alt="main-blur"
      class="inventory-img"
    />
    <div class="inventory-descr">
      <img src="@/assets/icons/skeletons.svg" alt="skeletons" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.inventory {
  display: grid;
  grid-area: main;
  width: 236px;
  padding: 18px 14px 24px 14px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--secondary-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);

  &-descr {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
