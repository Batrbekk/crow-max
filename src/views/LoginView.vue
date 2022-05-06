<template>
  <div class="flex login-container">
    <div class="login-preview md-hide">
      <img src="../assets/login/loginP.svg" alt="">
    </div>
    <div class="min-h-full login-form-container flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 md-width-full w-6/12">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="text-center text-3xl font-bold text-gray-900">Вход</h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="mb-6">
              <label for="email-address" class="flex mb-1">Email</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                     class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                     placeholder="name@name.kz">
            </div>
            <div>
              <label for="password" class="flex justify-between mb-1">Пароль <a href="#">Забыли пароль?</a></label>
              <input
                type="password"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="examplePassword0"
                placeholder="Пароль"/>
            </div>
          </div>

          <div class="flex">
            <router-link class="button-link w-6/12 mr-2 flex justify-center py-4 px-16 border border-transparent" to="/home">Вход</router-link>
            <router-link class="button-link reg-btn w-6/12 flex justify-center py-4 px-16 border border-transparent" to="/registration">Регистрация</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {}
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
      border: 1px solid #8C98A9;
      box-sizing: border-box;
      border-radius: .5rem;
    }
    .button-link {
      background-color: #00A47D;
      border-radius: .5rem;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: .75rem;
      line-height: 1rem;
      color: #fff;
    }
    .reg-btn {
      background-color: transparent!important;
      color: #00A47D!important;
      border-color: #00A47D!important;
    }
  }
}
</style>
