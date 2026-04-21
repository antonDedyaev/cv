<template>
  <article :class="header()">
    <div :class="header('content')">
      <h1>Разрабатываю удобные и быстрые интерфейсы</h1>
      <p>Frontend-разработчик с опытом более 4-х лет. Вдохновляюсь Frontend-разработкой, технологиями и спортом.</p>
      <ArrowButton
        text="Пообщаемся ?"
        @click="$emit('scroll-to-contacts')"
      />
    </div>
    <img src="/photo_full.webp" alt="Фото большое" />
  </article>
</template>

<script setup lang="ts">
import useBem from 'vue3-bem'
import ArrowButton from '@/components/UI/ArrowButton.vue'

const header = useBem('page-header')
</script>

<style scoped lang="scss">
.page-header {
  position: relative;
  width: 1020px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 64px;
  background: light-dark($white-base, $dark-base);
  border-radius: 8px;

  img {
    position: absolute;
    bottom: 0;
    right: 64px;
    width: 330px;
    height: 468px;
  }

  h1 {
    margin-bottom: 24px;
    color: light-dark($dark-base, $white-base);
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
  }

  p {
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: light-dark($dark-base, $white-base);
    opacity: 0.6;
  }

  &__content {
    width: 460px;
  }

  .button-content {
    display: flex;
    gap: 40px;

    span {
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
    }
    
    &__icon {
      margin: -8px -22px;
      right: 6px;
      top: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: $black;
      color: $orange;
      transform: rotate(180deg);
    }
  }
}
</style>