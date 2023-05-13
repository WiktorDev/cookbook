<template>
  <li class="text-2xl font-semibold mb-8 group transition-all duration-300 ease-in-out">
    <router-link class="bg-left-bottom bg-gradient-to-r from-[#D4A373] to-[#D4A373] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" :to="link">
      {{ name }}
    </router-link>
  </li>
</template>
<script>
export default {
	props: ['name', 'link']
}
</script>
