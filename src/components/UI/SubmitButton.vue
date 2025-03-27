<template>
  <button
    class="button"
    :class="{ button__circle: isSubmitValid, shaky: isSubmitInvalid }"
  >
    <IconCheck v-if="isSubmitValid" />
    <span v-else>Отправить</span>
  </button>
</template>
<script setup lang="ts">
import IconCheck from '@/components/icons/IconCheck.vue'
interface ISubmitButtonProps {
  isSubmitValid: boolean;
  isSubmitInvalid: boolean;
}

defineProps<ISubmitButtonProps>()

</script>


<style scoped lang="scss">
.button {
  width: 180px;
  height: 50px;
  background: $orange;
  border-radius: 6px;
  font-size: 14px;
  transition: all .3s cubic-bezier(0.67, 0.17, 0.40, 0.83);
  cursor: pointer;


  &__circle {
    width: 50px;
    height: 50px;
    background: $green;
    border-radius: 50%;
    transform: rotate(-180deg);
    pointer-events: none;
  }

  &:hover {
    background: $orange-hover;
  }

  &.shaky {
    animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  span {
    font-size: 18px;
    transition: all .9s;
  }

  svg {
    transform: rotate(180deg);
    transition: all .5s;
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>