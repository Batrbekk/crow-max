<template>
  <div class="flex login-container">
    <div class="login-preview md-hide">
      <img src="../assets/login/loginP.svg" alt="">
    </div>
    <div class="min-h-full login-form-container flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 md-width-full w-6/12">
      <div class="max-w-md w-full space-y-8">
        <div class="flex items-center justify-center">
          <router-link to="/"><img class="" src="../assets/icon/left.png" alt=""></router-link>
          <h2 class="text-center w-full text-3xl font-bold text-gray-900">Регистрация</h2>
        </div>
        <ul class="nav nav-tabs justify-center flex md:flex-row list-none border-b-0 pl-0 mb-4" id="tabs-tab"
            role="tablist">
          <li class="nav-item w-full" role="presentation">
            <a href="#tabs-home" class="nav-link block font-medium text-xs leading-tight uppercase border-x-0
            border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100
            focus:border-transparent active" id="tabs-home-tab" data-bs-toggle="pill"
               data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
               aria-selected="true">Я инвестор</a>
          </li>
          <li class="nav-item w-full" role="presentation">
            <a href="#tabs-profile" class="nav-link block font-medium text-xs leading-tight uppercase border-x-0
                border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100
                focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill"
               data-bs-target="#tabs-profile" role="tab"
               aria-controls="tabs-profile" aria-selected="false">Я предприниматель</a>
          </li>
        </ul>
        <div class="tab-content" id="tabs-tabContent">
          <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
            <div class="form-group flex flex-col">
              <label class="mb-1 flex items-start">Телефон *</label>
              <input type="tel" class="form-control p-4 w-full block text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                     id="telephone"
                     placeholder="+7 (---) --- -- --">
            </div>
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="examplePassword0" class="flex items-start form-label inline-block mb-2 text-gray-700">
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
            </div>
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="examplePassword1" class="flex items-start form-label inline-block mb-2 text-gray-700">
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
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="exampleTel0" class="flex items-start form-label inline-block mb-2 text-gray-700">
                  ИИН
                </label>
                <input
                  maxlength="12"
                  type="tel"
                  class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                  id="exampleTel0"
                />
              </div>
            </div>
            <div class="flex justify-center w-full mt-6">
              <button type="submit" class="group relative w-full mr-2 flex justify-center py-4 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Регистрация
              </button>
            </div>
          </div>
          <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="email-address" class="flex mb-1">Email</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required
                       class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                       placeholder="name@name.kz">
              </div>
            </div>
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="examplePassword0" class="flex items-start form-label inline-block mb-2 text-gray-700">
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
            </div>
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="examplePassword1" class="flex items-start form-label inline-block mb-2 text-gray-700">
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
            <div class="flex justify-center mt-6">
              <div class="w-full">
                <label for="exampleTel0" class="flex items-start form-label inline-block mb-2 text-gray-700">
                  ИИН
                </label>
                <input
                  maxlength="12"
                  type="tel"
                  class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                  id="exampleTel0"
                />
              </div>
            </div>
            <div class="flex justify-center mt-6">
              <button type="submit" class="group relative w-full mr-2 flex justify-center py-4 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'tw-elements'
import 'intl-tel-input/build/css/intlTelInput.css'
import 'intl-tel-input/build/js/intlTelInput.js'
import intlTelInput from 'intl-tel-input'
export default {
  name: 'RegistrationView',
  components: {},
  mounted () {
    const input = document.querySelector('#telephone')
    intlTelInput(input, {
      preferredCountries: ['kz', 'us', 'ru']
    })
  }

}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 780px) {
  .md-hide {
    display: none;
  }
  .md-width-full {
    width: 100%!important;
  }
}
.login-container {
  padding: 1.25rem;
  height: 100vh;
  .login-preview {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .login-form-container {
    .nav-item {
      .nav-link {
        color: #1A3154;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: .875rem;
        line-height: 24px;
      }
      .active {
        color: #00A47D;
        border-color: #00A47D;
      }
    }
    .form-group {
      .label {
        color: #1A3154;
        font-family: 'Montserrat',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: .75rem;
        line-height: 16px;
      }
    }
    label {
      font-family: 'Montserrat',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: .75rem;
      line-height: 1rem;
      color: #1A3154;
      a {
        color: #00A47D;
      }
    }
    input {
      box-sizing: border-box;
      border-radius: .5rem;
    }
    button {
      background-color: #00A47D;
      border-radius: .5rem;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: .75rem;
      line-height: 1rem;
    }
    .reg-btn {
      background-color: transparent;
      color: #00A47D;
      border-color: #00A47D!important;
    }
  }
}
</style>
