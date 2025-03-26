<template>
  <section :class="bem()">
    <div :class="bem('header')">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import useBem from 'vue3-bem'

interface IPageSectionProps {
  title: string;
  description: string;
}

defineProps<IPageSectionProps>()

const bem = useBem('page-section')

</script>

<style scoped lang="scss">
.page-section {
  &__header {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      color: light-dark($black-base, $white-base);
    }

    p {
      font-size: 16px;
      line-height: 24px;
      opacity: 0.6;
      color: light-dark($black-base, $white-base);
    }
  }
}

</style>