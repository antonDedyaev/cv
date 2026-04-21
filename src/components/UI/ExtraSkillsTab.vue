<script setup lang="ts">
import useBem from 'vue3-bem'
import SkillTag from './SkillTag.vue'

const bem = useBem('extra-skills')
</script>

<template>
  <div :class="bem()">
    <h3>Дополнительные навыки</h3>
    <div :class="bem('list')">
      <SkillTag title="Vite" />
      <SkillTag title="Pinia" />
      <SkillTag title="Websockets" />
      <SkillTag title="Jest" />
      <SkillTag title="Gulp" />
      <SkillTag title="Pug" />
      <SkillTag title="Figma" />
      <SkillTag title="Storybook" />
      <SkillTag title="Tailwind" />
      <SkillTag title="Webpack" />
      <SkillTag title="Английский (C2)" />
      <SkillTag title="Немецкий (C1)" />
    </div>
  </div>
</template>

<style lang="scss">
.extra-skills {
  padding: 24px 0;

  @include divider();

  h3 {
    margin-bottom: 20px;
    text-align: left;
    color: light-dark($dark-base, $white-base);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>
