<template>
  <div class="table-title-container text-left mb-2.5">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TableTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.table-title-container {
  h1 {
    color: #333333;
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }
}
</style>
