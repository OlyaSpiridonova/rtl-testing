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
  cursor: pointer;
}

.red {
  background-color: var(--primary-red);
  color: #fff;

  &-delete {
    padding: 11px 50px;
    width: 220px;
  }
  &-approve {
    padding: 8px 20px;
    box-shadow: 0px 0px 18px 0px #fa7272;
  }
}

.white {
  background-color: #fff;
  color: #2d2d2d;

  &-cancel {
    padding: 8px 20px;
    box-shadow: 0px 0px 18px 0px #fa7272;
  }
}
</style>
