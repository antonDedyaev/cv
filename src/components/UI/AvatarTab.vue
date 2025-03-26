<template>
  <div :class="bem()">
    <div :class="bem('pic')">
      <img src="/photo_thumb.png" alt="Аватарка" />
    </div>
    <div :class="bem('name')">
      <span>Антон Дедяев</span>
      <ColoredTagVue text="Frontend Developer" shape="round" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useBem from 'vue3-bem'
import ColoredTagVue from '@/components/UI/ColoredTag.vue'
const bem = useBem('avatar')
</script>

<style lang="scss">
.avatar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 0;

  @include divider;

  &__pic {
    height: 110px;
    display: flex;
    justify-content: center;
    padding-top: 10px;

    img {
      width: 100px;
      height: 100px;
      flex-shrink: 0;
      border-radius: 100px;
      border: 2px solid $white-base;
    }
  }

  &__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: light-dark($dark-base, $white-base);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
}
</style>
