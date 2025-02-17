<script lang="ts" setup>
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>
<template>
  <div>
    <input
      type="search"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="text-indent"
      placeholder="Search for photo"
    />
  </div>
</template>

<style></style>
