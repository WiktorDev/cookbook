<template>
  <textarea class="bg-[#EDEDE9] rounded-[35px] w-full px-6 py-4"
            :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :rows="rows" :placeholder="caption">
  </textarea>
</template>
<script>
export default {
  props: {
    caption: {
      type: String,
      required: true
    },
    rows: {
      type: Number,
      default: 10
    },
    modelValue: {}
  },
  emits: ['update:modelValue']
}
</script>