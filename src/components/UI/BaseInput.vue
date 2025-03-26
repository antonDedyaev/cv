<template>
  <div class="base-input">
    <label
      :for="`${label}-input`"
    >
      {{ label }}
    </label>
    <input
      v-model="model"
      :id="`${label}-input`"
      :name="name"
      :class="{ 'invalid': isInvalid }"
    />
  </div>
</template>

<script setup lang="ts">
interface IBaseInputProps {
  name: string;
  label: string;
  modelValue: string;
  isInvalid?: boolean;
}

defineProps<IBaseInputProps>()
const model = defineModel({ type: String, required: true })
</script>

<style scoped lang="scss">
.base-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: light-dark($dark-base, $white-base);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    opacity: 80%;
  }

  input {
    height: 48px;
    padding: 12px 16px;
    //gap: 10px;
    border-radius: 8px;
    border: none;
    background-color: light-dark($light, $black);
    color: light-dark($dark-base, $white-base);
    opacity: 60%;
  }

  input.invalid {
    border: 2px solid $orange;
  }
}
</style>