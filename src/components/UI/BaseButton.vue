<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  mode: String,
});
const { mode } = toRefs(props);
</script>

<style lang="scss" scoped>
button {
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  border: none;
}

.red {
  width: 220px;
  padding: 11px 50px;
  background-color: var(--primary-red);
  color: #fff;
}

.white {
  background-color: #fff;
  color: #2d2d2d;
}
</style>
