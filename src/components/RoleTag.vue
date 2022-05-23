<template>
  <div class="p-1.5 rounded-lg" :class="role==='Заемщик' ?  ['violet-bg'] : ['yellow-bg']">
    <p>{{ role }}</p>
  </div>
</template>

<script>
export default {
  name: 'RoleTag',
  props: {
    role: String
  }
}
</script>

<style lang="scss" scoped>
p {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
}
.violet-bg {
  background-color: #A951ED;
  color: #E1E7EB;
}
.yellow-bg {
  background-color: #FFAF0B;
  color: #164368;
}
</style>
