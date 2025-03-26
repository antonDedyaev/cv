<template>
  <div :class="bem()">
    <h3>Ключевые навыки</h3>
    <div :class="bem('list')" ref="skillsRef">
      <SkillBar title="JavaScript" :level="90" />
      <SkillBar title="TypeScript" :level="80" />
      <SkillBar title="HTML" :level="90" />
      <SkillBar title="CSS / SCSS" :level="90" />
      <SkillBar title="Vue" :level="90" />
      <SkillBar title="Nuxt" :level="70" />
      <SkillBar title="React" :level="70" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useBem from 'vue3-bem'
import SkillBar from './SkillBar.vue'

const bem = useBem('major-skills')
</script>


<style lang="scss">
.major-skills {
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
    flex-direction: column;
    gap: 20px;
  }
}
</style>
