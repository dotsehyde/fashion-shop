<template>
  <div
    class="h-[50px] 
    pt-[10px] sticky 
    top-0 
    bg-white 
     items-center justify-around flex"
  >
    <h3 class="logo  font-bold md:font-extrabold">YOUR LOGO</h3>
    <ul class="flex justify-between">
    <router-link to="/">   <li>Home</li></router-link> 
    <router-link to="/about"> <li class="mx-[15px] md:mx-[50px]">About</li></router-link> 
      <li>Shop</li>
    </ul>
    <p>Icons</p>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped></style>
