<template>
  <div class="home-container">
    <sidebar-moderator-component active="3" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Интеграции"></page-title>
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
            <table-title title="Импорт выписки со счета"></table-title>
            <div class="flex items-center table-import-container">
              <button class="import-btn mr-4 flex items-center p-2">
                <p class="mr-4">Импортировать</p>
                <img src="../../assets/icon/downloadIcon.png" alt="">
              </button>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class="flex items-center px-4 py-2 rounded-lg text-white">
                <img src="../../assets/icon/smPlus.png" class="mr-1.5" alt="">
                Добавить
              </button>
              <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                   id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                  <div
                    class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                      class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                      <h5 class="pb-1.5 border-b w-full text-left" id="exampleModalLabel">Добавить Запись</h5>
                    </div>
                    <div class="modal-body relative flex flex-col items-center p-4">
                      <div class="flex items-center mb-4">
                        <div class="mr-4">
                          <p class="text-left mb-1">Дата</p>
                          <div class="datepicker form-container relative form-floating xl:w-96" data-mdb-with-icon="false" id="input-toggle-datepicker">
                            <input type="text"
                                   class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                                   placeholder="Select a date" data-mdb-toggle="input-toggle-datepicker" />
                            <label for="floatingInput" class="text-gray-700">Дата</label>
                          </div>
                        </div>
                        <div>
                          <p class="text-left mb-1">Время</p>
                          <div class="timepicker form-container relative form-floating xl:w-96" data-mdb-with-icon="false" id="input-toggle-timepicker">
                            <input type="text"
                                   class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                                   placeholder="Select a date" data-mdb-toggle="input-toggle-timepicker" />
                            <label for="floatingInput2" class="text-gray-700">Время</label>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="form-container xl:w-96 mr-4">
                          <label for="iin" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Плательщик БИН_ИИН
                          </label>
                          <input
                            maxlength="12"
                            type="tel"
                            class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="iin"
                          />
                        </div>
                        <div class="form-container xl:w-96">
                          <label for="iin" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Плательщик ИИК
                          </label>
                          <input
                            maxlength="20"
                            type="tel"
                            class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="iin"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center mb-4">
                        <img src="../../assets/icon/down.png" alt="">
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="form-container xl:w-96 mr-4">
                          <label for="iin" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Получатель БИН_ИИН
                          </label>
                          <input
                            maxlength="20"
                            type="tel"
                            class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="iin"
                          />
                        </div>
                        <div class="form-container xl:w-96">
                          <label for="iin" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Получатель ИИК
                          </label>
                          <input
                            maxlength="20"
                            type="tel"
                            class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="iin"
                          />
                        </div>
                      </div>
                      <div class="flex mb-4 items-center">
                        <div class="form-container xl:w-96 mr-4">
                          <label for="select-project" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Получатель БИН_ИИН
                          </label>
                          <select id="select-project" class="form-select appearance-none w-full block px-4 py-3.5 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                                  aria-label="Default select example">
                            <option selected value="1">Наименование проекта 1</option>
                            <option value="2">Наименование проекта 2</option>
                            <option value="3">Наименование проекта 3</option>
                          </select>
                        </div>
                        <div>
                          <div class="form-container xl:w-96">
                            <label for="sum" class="flex items-start form-label inline-block mb-1 text-gray-700">
                              Сумма
                            </label>
                            <input
                              maxlength="20"
                              type="number"
                              class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                              id="sum"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <div class="form-container xl:w-96">
                          <label for="exampleFormControlTextarea1" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Ваше сообщение
                          </label>
                          <textarea
                            class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="exampleFormControlTextarea1"
                            rows="6"
                            placeholder="Ваше сообщение"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div
                      class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-start p-4 rounded-b-md">
                      <button type="button" class="px-4 py-2 rounded-lg text-white" data-bs-dismiss="modal">
                        Добавить</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table-integration-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarModeratorComponent from '@/components/SidebarModeratorComponent'
import PageTitle from '@/components/PageTitle'
import TableTitle from '@/components/TableTitle'
import TableIntegrationComponent from '@/components/TableIntegrationComponent'
export default {
  name: 'IntegrationModeratorView',
  components: {
    SidebarModeratorComponent,
    PageTitle,
    TableTitle,
    TableIntegrationComponent
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
