<template>
  <div class="container">
    <inventory-block />
    <inventory-cell />
    <inventory-bottom />
  </div>
</template>

<script setup lang="ts">
import InventoryBlock from "@/components/InventoryBlock.vue";
import InventoryCell from "@/components/InventoryCell.vue";
import InventoryBottom from "@/components/InventoryBottom.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Inter";
  --primary-bg: #1d1d1d;
  --secondary-bg: #262626;
  --border-color: #4d4d4d;
  --skeleton: #2f2f2f;
  --border-radius: 12px;
  --primary-red: #fa7272;
}
#app {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: var(--primary-bg);
}
.container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-template-areas:
    "main cells"
    "bottom bottom";
  gap: 20px;
  margin: 0 auto;
  padding: 32px;
  max-width: 849px;
}
</style>
