<template>
  <div class="app">
    <main class="paywall">
      <Logo />

      <BenefitsCard :items="benefits" />

      <div class="paywall__heading">
        <h2 class="paywall__title">{{ heading.title }}</h2>
        <p class="paywall__subtitle">{{ heading.subtitle }}</p>
      </div>

      <div class="paywall__plans">
        <SubscriptionCard
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
          :selected="selectedId === plan.id"
          @select="selectPlan"
        />
      </div>

      <div class="paywall__actions">
        <PaywallButton label="Оформить подписку" @click="subscribe" />

        <p class="paywall__note">Можно отменить в любое время</p>

        <nav class="paywall__footer" aria-label="Дополнительные ссылки">
          <a v-for="link in footerLinks"
             :key="link"
             href="#"
             @click.prevent
             class="paywall__link">
            {{ link }}
          </a>
        </nav>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { benefits, heading, plans, defaultPlanId, footerLinks } from '@/data/plans'
import type { Plan } from '@/data/plans'

import Logo from '@/components/Logo.vue'
import BenefitsCard from '@/components/BenefitsCard.vue'
import SubscriptionCard from '@/components/SubscriptionCard.vue'
import PaywallButton from '@/components/PaywallButton.vue'

const selectedId = ref<string>(defaultPlanId)

const selectedPlan = computed<Plan>(
  () => plans.find(plan => plan.id === selectedId.value) ?? plans[0]
)

function selectPlan(id: string) {
  selectedId.value = id
}

function subscribe() {
  const { title, price } = selectedPlan.value
  alert(`Выбранная подписка: ${title} — ${price}`)
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.app {
  min-height: 100dvh;
  display: flex;

  // Планшет / десктоп: центрируем «телефон» на сцене
  @include stage-up {
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
}

.paywall {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: $frame-gap;
  background: $color-bg;
  box-sizing: border-box;
  min-height: 100dvh;
  padding: $frame-padding;
  padding-top: max(#{$frame-padding}, env(safe-area-inset-top));
  padding-bottom: max(#{$frame-padding}, env(safe-area-inset-bottom));

  @include stage-up {
    flex: initial;
    width: $frame-width;
    min-height: auto;
    padding: $frame-padding;
    border-radius: 28px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  }

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  &__plans {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }

  &__note {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  &__link {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-decoration: underline;
  }
}
</style>
