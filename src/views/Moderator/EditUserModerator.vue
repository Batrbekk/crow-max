<template>
  <div class="home-container">
    <sidebar-moderator-component active="4" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Информация о пользователе"></page-title>
        <div class="p-4 rounded bg-white mb-5 flex flex-col lg:flex-row items-start">
          <div class="mr-5 w-full">
            <component-title title="Личные"></component-title>
            <div class="flex items-center pt-4">
              <div class="form-container w-full mr-4">
                <label for="surname" class="flex justify-between mb-1">Фамилия</label>
                <input
                  type="text"
                  class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                  id="surname"
                  placeholder="Фамилия"/>
              </div>
              <div class="form-container w-full ">
                <label for="name" class="flex justify-between mb-1">Имя</label>
                <input
                  type="text"
                  class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                  id="name"
                  placeholder="Имя"/>
              </div>
            </div>
            <div class="flex items-center py-4">
              <div class="form-container w-full mr-4">
                <label for="iin" class="flex items-start form-label inline-block mb-1 text-gray-700">
                  ИИН
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
              <div class="form-container w-full">
                <label for="payment" class="flex items-start form-label inline-block mb-1 text-gray-700">
                  Номер счета
                </label>
                <input
                  maxlength="16"
                  type="tel"
                  class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                  id="payment"
                  placeholder="KZ00055540204550"
                />
              </div>
            </div>
            <div class="flex items-center pb-4">
              <div class="form-container w-full mr-4">
                <label for="email-address" class="flex mb-1">Email</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required
                       class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                       placeholder="name@name.kz">
              </div>
              <div class="form-container w-full">
                <label class="mb-1 flex items-start">Телефон *</label>
                <input type="tel" class="form-control p-4 w-full block text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                       id="telephone"
                       placeholder="+7 (---) --- -- --">
              </div>
            </div>
            <div>
              <button type="submit" class="group relative mr-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Сохранить
              </button>
            </div>
          </div>
          <div class="mt-5 lg:mt-0">
            <component-title class="mb-1.5" title="Информация"></component-title>
            <div class="flex info-user-container mt-5">
              <div class="flex flex-col mr-5 text-left">
                <b>Роль</b>
                <b>Общая сумма активов</b>
                <b>Участник в проектах</b>
                <b>Статус инвестора</b>
                <b>Последний вход</b>
              </div>
              <div class="flex flex-col text-left">
                <p>Заемщик</p>
                <p>4 700 000 ₸</p>
                <p>5  активных / 12 всего</p>
                <p>Акредитованный</p>
                <p>25.10.2021 12:01:12</p>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 rounded bg-white mb-5">
          <component-title title="Безопастность"></component-title>
          <div class="flex items-center py-4">
            <div class="form-container w-full mr-4">
              <label for="examplePassword0" class="flex items-start form-label inline-block mb-1 text-gray-700">
                Пароль
              </label>
              <input
                type="password"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="examplePassword0"
                placeholder="Пароль"/>
            </div>
            <div class="form-container w-full ">
              <label for="examplePassword1" class="flex items-start form-label inline-block mb-1 text-gray-700">
                Повторите пароль
              </label>
              <input
                type="password"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="examplePassword1"
                placeholder="Повторите пароль"/>
            </div>
          </div>
          <div>
            <button type="submit" class="group relative mr-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Изменить
            </button>
          </div>
        </div>
        <div class="p-4 rounded bg-white mb-5">
          <div>
            <component-title title="Компания"></component-title>
            <div>
              <div class="flex flex-col lg:flex-row items-center pt-4">
                <div class="form-container w-full mr-0 lg:mr-4">
                  <label for="surname" class="flex justify-between mb-1">Название компании</label>
                  <input
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="surname"
                    placeholder="Название компании"/>
                </div>
                <div class="form-container w-full mt-4 lg:mt-0 mr-0 lg:mr-4">
                  <label for="name" class="flex justify-between mb-1">БИН</label>
                  <input
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="name"
                    placeholder="БИН"/>
                </div>
                <div class="form-container w-full mt-4 lg:mt-0">
                  <label for="wallet-num" class="flex justify-between mb-1">Номер счета</label>
                  <input
                    maxlength="20"
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="wallet-num"
                    placeholder="Номер счета"/>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <component-title title="Руководитель"></component-title>
            <div>
              <div class="flex flex-col lg:flex-row items-center pt-4">
                <div class="form-container w-full mr-0 lg:mr-4">
                  <label for="surname" class="flex justify-between mb-1">Имя</label>
                  <input
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="surname"
                    placeholder="Имя"/>
                </div>
                <div class="form-container w-full mt-4 lg:mt-0 mr-0 lg:mr-4">
                  <label for="name" class="flex justify-between mb-1">Фамилия</label>
                  <input
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="name"
                    placeholder="Фамилия"/>
                </div>
                <div class="form-container w-full mt-4 lg:mt-0">
                  <label for="surname" class="flex justify-between mb-1">Отчество</label>
                  <input
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="surname"
                    placeholder="Отчество"/>
                </div>
              </div>
              <div class="flex items-center mt-4">
                <div class="form-container w-full lg:w-1/3 mr-4">
                  <label for="iin" class="flex items-start form-label inline-block mb-1 text-gray-700">
                    ИИН
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
                <div class="form-container w-full lg:w-1/3">
                  <label class="mb-1 flex items-start">Телефон *</label>
                  <input type="tel" class="form-control p-4 w-full block text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                         id="telephone"
                         placeholder="+7 (---) --- -- --">
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <component-title title="Контактные данные"></component-title>
            <div>
              <div class="flex flex-col items-start pt-4">
                <div class="form-container w-full w-full lg:w-1/3">
                  <label for="surname" class="flex justify-between mb-1">Юридический адрес*</label>
                  <input
                    type="text"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                           border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                           focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="surname"
                    placeholder="Юридический адрес"/>
                </div>
                <div class="form-container w-full mt-4 w-full lg:w-1/3">
                  <label class="mb-1 flex items-start">Телефон*</label>
                  <input type="tel" class="form-control p-4 w-full block text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                         id="telephone"
                         placeholder="+7 (---) --- -- --">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 rounded bg-white mb-5">
          <component-title title="Изменение статуса инвестора"></component-title>
          <div class="py-4">
            <div class="form-container w-full mb-4">
              <div class="form-container xl:w-96 mr-4">
                <label for="select-project" class="flex items-start form-label inline-block mb-1 text-gray-700">
                  Статус
                </label>
                <select id="select-project" class="form-select appearance-none w-full block px-4 py-3 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                        aria-label="Default select example">
                  <option selected value="1">Квалифицированный инвестор</option>
                  <option value="2">Не квалифицированный инвестор</option>
                </select>
              </div>
            </div>
            <div class="form-container w-full ">
              <label for="document" class="flex items-start form-label inline-block mb-1 text-gray-700">
                Подтверждающий документ
              </label>
              <input
                type="file"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="document"
              />
            </div>
          </div>
          <div>
            <button type="submit" class="group relative mr-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ComponentTitle from '@/components/ComponentTitle'
import intlTelInput from 'intl-tel-input'
import SidebarModeratorComponent from '@/components/SidebarModeratorComponent'

export default {
  name: 'EditUserModerator',
  components: {
    SidebarModeratorComponent,
    PageTitle,
    ComponentTitle
  },
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    const input = document.querySelector('#telephone')
    intlTelInput(input, {
      preferredCountries: ['kz', 'us', 'ru']
    })
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
}
.home-container {
  background-color: #E5E5E5;
  .form-container {
    p {
      color: #8C98A9;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      span {
        font-weight: 700;
      }
    }
    input {
      border-radius: .5rem!important;
      &[type=file] {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
  button {
    background-color: #1A3154;
    border-radius: .5rem;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: .75rem;
    line-height: 1rem;
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
.info-user-container {
  b,p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    color: #1A3154;
  }
}
</style>
