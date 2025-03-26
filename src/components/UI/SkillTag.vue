<template>
  <div :class="bem()">{{ title }}</div>
</template>
<script setup lang="ts">
import useBem from 'vue3-bem'
const bem = useBem('skill-tag')

defineProps({
  title: { type: String, required: true }
})
</script>

<style lang="scss">
.skill-tag {
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: light-dark($dark-base, $white-base);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  opacity: 0.6;
}
</style>
