<template>
  <div class="home-container">
    <sidebar-client-component active="3" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Мои документы"></page-title>
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
            <table-title title="Документы"></table-title>
            <div class="flex items-center table-import-container">
              <button class="flex items-center px-4 py-2 rounded-lg text-white">
                <img class="mr-1.5" src="../../assets/icon/smPlus.png" alt="">
                Добавить документ
              </button>
            </div>
          </div>
          <document-table />
          <div class="mt-4 confirm-ecp-container text-left border rounded-lg border-slate-600">
            <div class="p-2">
              <h4 class="mb-4">Подписание ЭЦП</h4>
              <div class="attention-text-container flex items-start">
                <img class="mr-2" src="../../assets/cardInvest/warning.png" alt="">
                <p>
                  Внимание, Вы принимаете риск, что данным способом вы передаете вашу ЭЦП на сервер для
                  подписания документа, мы не храним его на сервере, после выполнения подписания сертификат
                  автоматически будет удален. Данный способ предназначер только в крайнем случае использования,
                  когда нет возможности воспользыватся прослойкой NCALayer.
                </p>
              </div>
              <div class="">
                <div class="form-container mt-4">
                  <label for="document" class="flex items-start form-label inline-block mb-1 text-gray-700">
                    Ключ
                  </label>
                  <input
                    type="file"
                    class="form-control block w-full lg:w-1/3 p-2 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="document"
                  />
                </div>
                <div class="form-container mt-4">
                  <label for="examplePassword0" class="flex items-start form-label inline-block mb-1 text-gray-700">
                    Пароль
                  </label>
                  <input
                    type="password"
                    class="form-control block w-full lg:w-1/3 p-2 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="examplePassword0"/>
                </div>
                <button class="w-full lg:w-1/3 py-4 mt-4 rounded-lg disabled:bg-gray-600" disabled>
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarClientComponent from '@/components/SidebarClientComponent'
import PageTitle from '@/components/PageTitle'
import TableTitle from '@/components/TableTitle'
import DocumentTable from '@/components/DocumentTable'

export default {
  name: 'ClientDocumentView',
  components: {
    SidebarClientComponent,
    PageTitle,
    TableTitle,
    DocumentTable
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
.confirm-document-container {
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #53647F;
  }
  .confirm-document {
    p {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #1A3154;
    }
  }
  h4 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #1A3154;
  }
  .green-btn {
    background-color: #00A47D!important;
  }
  button {
    border-radius: 8px;
    background-color: #50728E;
  }
}
.confirm-ecp-container {
  h4 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #1A3154;
  }
  .attention-text-container {
    p {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #1A3154;
    }
  }
  button {
    color: #fff;
    background-color: #00A47D;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    &:disabled {
      color: #8C98A9;
      background-color: #E8EAEE;
    }
  }
}
</style>
