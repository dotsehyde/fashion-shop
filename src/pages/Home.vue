<template>
  <div
    class="hero bg-clip-content min-w-full min-h-[93vh] 
    object-contain grid place-content-center text-center
    text-[#22262A]  "
  >
  
    <h6 class="text-[20px] bg-[#ffffffa1] justify-self-center px-2">NEW TREND</h6>
    <h3 class="font-bold text-[60px] mb-0">COLLUSION</h3>
    <p class="mb-5 text-lg bg-[#ffffffa1] px-4">An exclusive selection of this season's trends.</p>
    <div class="flex justify-around">
    <div class="bg-black cursor-pointer text-white py-2 text-center px-7">DISCOVER</div>
    <div class="bg-black cursor-pointer text-white py-2 text-center px-7">SHOP NOW</div>


    </div>
  </div>
</template>
<script>
export default {
    name:'Home',
    methods: {
        increase(){
            this.$store.commit('authStore/increase')
        }
    },
    computed:{
        count(){
            return this.$store.state.authStore.counter
        }
    }
};
</script>
<style scoped>
.hero {
  background: url("../assets/11.png");
  
}
</style>
