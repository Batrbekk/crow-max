<template>
  <div class="w-full h-5 rounded-full progress-bar-component">
    <div class="flex success-color items-center h-5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
         :style="[['width:' + barProcent + '%'] , [success ? {'background-color': '#00A47D'} : {'background-color': '#FFAF0B'}]]">
      <p :style="[barProcent>75 ? {'color': '#FFF'} : {'color': '#53647F'}]"
         class="py-1 pr-1 text-right">{{ month }}</p>
    </div >
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    month: String,
    barProcent: Number,
    success: Boolean
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.progress-bar-component {
  background-color: #E5F6F2;
  position: relative;
  .success-color {
    background-color: #00A47D;
  }
  .warning-color {
    background-color: #FFAF0B;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    position: absolute;
    right: 10%;
  }
}
</style>
