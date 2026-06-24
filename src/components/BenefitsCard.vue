<template>
  <ul class="benefits">
    <li v-for="item in items" :key="item" class="benefits__item">
      <span class="benefits__bullet" aria-hidden="true" />
      <span class="benefits__text">{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<style lang="scss" scoped>
@use '@/styles/_variables' as *;

.benefits {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 24px;
  border-radius: $radius;
  background: $color-benefits-bg;
  border: 1px solid $color-benefits-border;

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__bullet {
    flex: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: $color-bullet;
  }

  &__text {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
