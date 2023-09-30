<script setup>
//import { RouterLink, RouterView } from 'vue-router'

import {RouterView} from 'vue-router'
import BlogHeader from '@/views/BlogHeader.vue'
// import Jumbo from '@/views/JumboHeader.vue'
</script>

<template>

<div class="container">
  <BlogHeader></BlogHeader>

  <div class="main">
    <RouterView />
  </div>
</div>

</template> 

<style>
body {
  background: linear-gradient(to bottom, #f10404, #f99017,#6563cf);
}
</style>