import {defineStore} from "pinia";
import {ref} from "vue";

export const useNavbarState = defineStore('navbarState', () => {
    const isOpen = ref(false)

    function switchState() {
        isOpen.value = !isOpen.value
    }

    return { isOpen, switchState }
})