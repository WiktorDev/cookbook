<template>
  <input :type="type" class="bg-[#EDEDE9] rounded-[35px] w-full h-12 px-6"
         :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
         :placeholder="caption">
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
    modelValue: {}
  },
  emits: ['update:modelValue']
}
</script>