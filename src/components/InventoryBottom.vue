<template>
  <div class="bottom">
    <button-close />
    <div class="bottom-descr"></div>
  </div>
</template>

<script setup>
import ButtonClose from "@/components/UI/ButtonClose";
</script>

<style lang="scss" scoped>
.bottom {
  background-color: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 18px 68px 18px 18px;
  position: relative;
  display: grid;
  grid-area: bottom;
  align-items: center;

  &-descr {
    border-radius: var(--border-radius);
    height: 36px;
    background: var(
      --skeleton,
      linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%)
    );
  }
}
</style>
