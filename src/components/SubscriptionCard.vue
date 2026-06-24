<template>
  <button
    type="button"
    class="card"
    :class="{ 'card--selected': selected }"
    :aria-pressed="selected"
    @click="$emit('select', plan.id)"
  >
    <span class="card__title">{{ plan.title }}</span>

    <span class="card__prices">
      <span class="card__price">{{ plan.price }}</span>
      <span v-if="plan.oldPrice" class="card__old-price">{{ plan.oldPrice }}</span>
    </span>
  </button>
</template>

<script setup lang="ts">
import type { Plan } from '@/data/plans'

defineProps<{
  plan: Plan
  selected: boolean
}>()

defineEmits<{
  select: [id: string]
}>()

</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.card {
  width: 100%;
  min-height: $card-height;
  display: flex;
  touch-action: manipulation;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: $card-pad;
  border-radius: $radius;
  text-align: left;
  cursor: pointer;

  background: $card-default-bg;
  border: 1px solid $card-default-border;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }

  &__prices {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }

  &__price {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }

  &__old-price {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $color-text-muted;
    text-decoration: line-through;
  }

  &--selected {
    background: $card-selected-bg;
    border-color: $card-selected-border;
  }

  @media (hover: hover) {
    &:hover {
      border-color: $card-selected-border;
    }
  }

  &:active {
    background: $card-pressed-bg;
    border-color: $card-pressed-border;
  }
  &:focus-visible {
    outline: 2px solid $card-selected-border;
    outline-offset: 2px;
  }
}
</style>
