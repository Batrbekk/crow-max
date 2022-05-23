<template>
  <div class="home-container">
    <sidebar-client-component active="2" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Мои заявки"></page-title>
        <div class="filter-container flex items-center mb-5">
          <p class="mr-2">Фильтр:</p>
          <select class="form-select appearance-none w-2/12 block px-4 mr-3 py-2 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                  aria-label="Default select example">
            <option selected value="1">Активный</option>
            <option value="2">Не активный</option>
            <option value="3">В процессе</option>
          </select>
          <select class="form-select appearance-none w-2/12 block px-4 py-2 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                  aria-label="Default select example">
            <option selected value="1">Все</option>
            <option value="2">Не все</option>
            <option value="3">Еще какой-то вариант</option>
          </select>
        </div>
        <div class="p-4 rounded bg-white mb-5">
          <div class="flex justify-between items-center import-with-title-container">
            <table-title title="Заявки"></table-title>
            <div class="flex items-center table-import-container">
              <button @click="$router.push('/client-create-rocket')" class="flex items-center px-4 py-2 rounded-lg text-white">
                Новая заявка
              </button>
            </div>
          </div>
          <rocket-table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarClientComponent from '@/components/SidebarClientComponent'
import PageTitle from '@/components/PageTitle'
import TableTitle from '@/components/TableTitle'
import RocketTable from '@/components/RocketTable'

export default {
  name: 'ClientRocketView',
  components: {
    SidebarClientComponent,
    PageTitle,
    TableTitle,
    RocketTable
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 300px) and (max-width: 599px) {
  .d-none-mob {
    display: none;
  }
  .ml-none-mob {
    margin-left: 0!important;
  }
  .form-select {
    width: 100%!important;
  }
  .import-with-title-container {
    flex-direction: column;
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .form-select {
    width: 100%!important;
  }
  .import-with-title-container {
    flex-direction: column;
  }
}
.home-container {
  background-color: #E5E5E5;
}
.main-container {
  .filter-container {
    p {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
    select {
      border-radius: .5rem;
      border-color: #00A47D;
      color: #00A47D;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
    .form-select {
      background-image: url('../../assets/icon/down.svg');
    }
  }
  .table-import-container {
    .import-btn {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #1A3154;
      background-color: transparent;
    }
    button {
      background-color: #00A47D;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
.modal {
  h5 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #164368;
    border-color: #00A47D;
  }
}
</style>
