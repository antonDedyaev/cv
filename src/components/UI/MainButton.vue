<template>
  <component
    :is="type"
    :href="href"
    :download="download"
    :class="[bem(), [shape === 'square' ? bem('square') : bem('round')]]"
  >
    <slot></slot>
  </component>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import useBem from 'vue3-bem'
const bem = useBem('button')

interface IMainButtonProps {
  shape: 'round' | 'square';
  href: string | null;
  download: string | null | undefined;
}

const props = withDefaults(defineProps<IMainButtonProps>(),{
  shape: 'square',
  href: null
})

const type = computed(() => {
  return props.href ? 'a' : 'button'
})

</script>


<style lang="scss">
.button {
  padding: 24px 0;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: $black;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  background: $orange;
  transition: background-color 0.5s linear;

  &:hover {
    background: $orange-hover;
  }

  &__square {
    padding: 12px 20px;
    border-radius: 8px;
  }

  &__round {
    padding: 14px 28px;
    border-radius: 56px;
  }
}
</style>
