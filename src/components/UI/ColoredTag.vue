<template>
  <div
    :class="[shape === 'square' ? bem(null, 'square') : bem(null, 'round')]"
  >{{ text }}</div>
</template>

<script setup lang="ts">
import useBem from 'vue3-bem'
const bem = useBem('colored-tag')

interface IColoredTagProps {
  text: string;
  shape: 'round' | 'square';
}

defineProps<IColoredTagProps>()
</script>

<style lang="scss">
.colored-tag {
  width: fit-content;
  display: flex;
  padding: 4px 12px;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  background: light-dark($orange, $dark-orange);

  //color: $orange;
  color: light-dark($white-base, $orange);
  text-align: center;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  &--round {
    border-radius: 50px;
  }

  &--square {
    border-radius: 5px;
  }
}
</style>
