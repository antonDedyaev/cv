<template>
  <button
    class="expand-btn"
    :class="isExpanded ? 'upright' : 'downright'"
  >
    <span
      class="expand-btn__dot"
      v-for="num in 3"
      :class="{ central: num === 2 }"
      :key="num" :style="{ animationDelay: `${num * 0.2}s` }"
    >
    </span>
  </button>
</template>

<script setup lang="ts">
interface IExpandButtonProps {
  isExpanded: boolean
}

defineProps<IExpandButtonProps>()
</script>

<style scoped lang="scss">
.expand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 60px;
  height: 25px;
  background: light-dark($light, #333);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    height: 30px;
  }

  &__dot {
    width: 8px;
    height: 8px;
    background: #aaa;
    border-radius: 50%;
    animation: dotBlink 1s infinite ease-in-out;
    transition: all 0.4s ease;
  }

  &.downright:hover {
    .expand-btn__dot {
      transform: translateY(-5px);
    }
    .expand-btn__dot.central {
      transform: translateY(5px);
    }
  }

  &.upright:hover {
    .expand-btn__dot {
      transform: translateY(5px);
    }
    .expand-btn__dot.central {
      transform: translateY(-5px);
    }
  }


}

@keyframes dotBlink {
  0%, 100% { background: $gray-hover; }
  50% { background: $gray; }
}
</style>