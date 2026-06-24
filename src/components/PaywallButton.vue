<template>
  <button type="button" class="cta" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()

defineEmits<{
  click: []
}>()
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.cta {
  width: 100%;
  min-height: $card-height;
  touch-action: manipulation;
  padding: $card-pad;
  border-radius: $radius;

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  background: $btn-default-bg;
  border: 1px solid $btn-default-border;
  @include btn-shadow($btn-default-shadow);

  transition: background-color 0.12s ease, border-color 0.12s ease,
    box-shadow 0.12s ease, transform 0.12s ease;

  @media (hover: hover) {
    &:hover {
      background: $btn-pressed-bg;
      border-color: $btn-pressed-border;
    }
  }

  &:active {
    background: $btn-pressed-bg;
    border-color: $btn-pressed-border;
    @include btn-shadow($btn-pressed-shadow);
    // лёгкий «провал» в сторону тени при нажатии
    transform: translate(-1px, 2px);
  }

  &:focus-visible {
    outline: 2px solid $btn-default-border;
    outline-offset: 2px;
  }
}
</style>
