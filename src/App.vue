<template>
<router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';  
import {useNewsStore} from "../src/store/newsStore.js";
import layout from '../src/components/Layout.vue';

const newsStore = useNewsStore();
onMounted(() => {
  newsStore.fetchNews();
});
</script>

<style lang="scss" scoped>

</style>