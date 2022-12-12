<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(route.params.id);

watch(route, () => {
  id.value = route.params.id;
});
</script>
<template>
  <p>blog page</p>
  <p>blog id = {{ id }}</p>
</template>
