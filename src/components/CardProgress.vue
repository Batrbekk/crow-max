<template>
  <div class="card-progress-component w-full rounded-full h-1.5 dark:bg-gray-700">
    <div class="h-1.5 rounded-full" :style="['width:' + barProcent + '%']"></div>
  </div>
</template>

<script>
export default {
  name: 'CardProgress',
  props: {
    barProcent: Number
  }
}
</script>

<style lang="scss" scoped>
.card-progress-component {
  background-color: #E1E7EB;
  div {
    background-color: #80D1BE;
  }
}
</style>
