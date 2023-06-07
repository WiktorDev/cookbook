<template>
  <input :type="type" class="bg-[#EDEDE9] rounded-[35px] w-full h-12 px-6"
         :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
         :placeholder="caption" :disabled="disabled">
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    caption: {
      type: String,
      required: true
    },
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue']
}
</script>