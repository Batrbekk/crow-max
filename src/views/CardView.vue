<template>
  <div class="home-container">
    <sidebar-component active="3" class="fixed"/>
    <div class="flex justify-end mr-5">
      <div class="main-container flex-col pt-9">
        <h1 class="main-title pl-8 flex place-items-center"><a href="/rocket"><img src="../assets/icon/left.png" class="mr-4" alt=""></a>New Level</h1>
        <div class="flex pl-6 py-5">
          <div class="px-2">
            <img src="../assets/component/card1.svg" alt="">
          </div>
        </div>
        <div class="flex pl-6 pb-5">
          <div class="px-2">
            <img src="../assets/component/card2.svg" alt="">
          </div>
        </div>
        <div class="flex pl-6 pb-5">
          <div class="px-2">
            <img src="../assets/component/card3.svg" alt="">
          </div>
        </div>
        <div class="flex pl-6 pb-5">
          <div class="px-2">
            <img src="../assets/component/card4.svg" alt="">
          </div>
        </div>
        <div class="flex pl-6 pb-5">
          <div class="px-2">
            <img src="../assets/component/card5.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'
export default {
  name: 'CardView',
  components: { SidebarComponent },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  background-color: #E5E5E5;
  .modal-title {
    margin: 0 1rem;
    border-bottom: 2px solid #80D1BE;
  }
  button {
    background-color: #00A47D;
    border-radius: .5rem;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: .75rem;
    line-height: 1rem;
    &:nth-child(2) {
      background-color: #FFAF0B;
    }
    &:nth-child(3) {
      background-color: #1A3154;
    }
  }
}
.main-container {
  .main-title {
    color: #161E54;
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
  .table-container {
    table {
      border-radius: 4px;
    }
  }
}
</style>
