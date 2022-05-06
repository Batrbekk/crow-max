<template>
  <aside class="w-80 h-screen" aria-label="Sidebar">
    <div class="overflow-y-auto relative h-full py-4 bg-white">
      <a href="https://flowbite.com" class="flex items-center pl-2.5 mb-14">
        <img src="../assets/logo.svg" class="mr-3 sm:h-12 w-full" alt="Flowbite Logo" />
      </a>
      <ul class="space-y-2 sidebar-container flex-col">
        <div class="px-3">
          <li class="account-container py-2 px-4 mb-4">
            <div class="flex justify-between place-items-center">
              <router-link to="/setting">
                <img src="../assets/avatar/ava.png" alt="">
              </router-link>
              <div>
                <p class="title">Robert Warren</p>
                <p class="sub-title">Статус квалификации</p>
              </div>
              <router-link to="/">
                Выйти
              </router-link>
            </div>
          </li>
          <li>
            <router-link to="/home" :class="{'active': active === '1'}" class="flex items-center my-2 px-4 py-3.5 text-base font-normal text-gray-900 rounded-lg text-gray-500">
              <img src="../assets/icon/home.png" alt="">
              <span class="flex-1 whitespace-nowrap">Главная</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rocket" :class="{'active': active === '2'}" class="flex relative items-center my-2 px-4 py-3.5 text-base font-normal text-gray-900 rounded-lg text-gray-500">
              <img src="../assets/icon/rocket.png" alt="">
              <span class="flex-1 whitespace-nowrap">Заявки</span>
              <span class="absolute right-0 mr-4 tag-span inline-flex justify-center items-center px-2.5 py-1.5 rounded-full">123</span>
            </router-link>
          </li>
          <li>
            <router-link to="/port" :class="{'active': active === '3'}" class="flex relative items-center my-2 px-4 py-3.5 text-base font-normal text-gray-900 rounded-lg text-gray-500">
              <img src="../assets/icon/port.png" alt="">
              <span class="flex-1 whitespace-nowrap">Портфель</span>
              <span class="absolute right-0 mr-4 tag-span inline-flex justify-center items-center px-2.5 py-1.5 rounded-full">123</span>
            </router-link>
          </li>
          <li>
            <router-link to="/setting" :class="{'active': active === '4'}" class="flex items-center my-2 px-4 py-3.5 text-base font-normal text-gray-900 rounded-lg text-gray-500">
              <img src="../assets/icon/set.png" alt="">
              <span class="flex-1 whitespace-nowrap">Настройки</span>
            </router-link>
          </li>
        </div>
        <div class="sidebar-bot-container w-full bottom-4 absolute">
          <li class="mx-3">
            <router-link to="#" class="flex items-center my-2 px-4 py-3.5">
              <img class="mr-3" src="../assets/icon/question.png" alt="">
              <span>Вопросы и ответы</span>
            </router-link>
          </li>
          <li class="mx-3 sidebar-phone-container">
            <router-link to="tel:+77758221235" class="flex items-center my-2 px-4 py-3.5">
              <img class="mr-3" src="../assets/icon/phone.png" alt="">
              <span>8 (778) 200 20 20</span>
            </router-link>
          </li>
        </div>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  props: {
    active: String
  }
}
</script>

<style scoped lang="scss">
.account-container {
  background-color: #E5F6F2;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
  }
  .title {
    color: #1A3154;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  .sub-title {
    color: #1A3154;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
  }
  a {
    display: flex;
    align-content: center;
    height: 100%;
    color: #00A47D;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
}
.sidebar-container {
  .tag-span {
    background-color: #E8EAEE;
    color: #164368;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
  }
  .active {
    border-left: 4px solid #00A47D;
    background-color: #E5F6F2;
    .tag-span {
      background-color: #fff!important;
      color: #00A47D;
    }
  }
  li {
    &:hover {
      background-color: #E5F6F2;
      border-radius: 4px;
    }
    a {
      color: #1A3154;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }
  .sidebar-phone-container {
    background-color: #A6DFD1!important;
    border-radius: 4px;
  }
  .sidebar-bot-container {
    margin-top: 35vh!important;
  }
}
</style>
