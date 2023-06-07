<template>
  <button :class="color" class=" px-5 py-2 text-white rounded-[35px]">{{ name }}</button>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'bg-[#A7C957]'
    }
  }
}
</script>