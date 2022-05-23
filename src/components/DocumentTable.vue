<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto project-table-container sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full table-container border text-center">
            <thead class="">
            <tr>
              <th scope="col" class="first-col text-sm text-left font-medium px-6 py-4">
                <div class="form-check flex justify-center">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                </div>
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Статус
              </th>
              <th scope="col" class="text-sm font-medium px-6 py-4">
                Имя проекта
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Дата добавления
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Подписанты
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Подпись
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <div class="form-check flex justify-center">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <img src="../assets/icon/modCheck.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Закуп оборудования
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                02.03.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex items-center sign-warning-container justify-center">
                  <p class="text-center mr-4">2/3</p>
                  <img src="../assets/icon/signWarning.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <button class="nca-btn rounded-lg px-4 py-2 flex items-center">
                    <img src="../assets/icon/nca.png" class="mr-1.5" alt="">
                    Подписать
                  </button>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button class="rounded-lg download-btn"><img src="../assets/icon/downloadIcon.png" alt=""></button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <div class="form-check flex justify-center">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <img src="../assets/icon/modCheck.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Закуп оборудования
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                02.03.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex items-center sign-warning-container justify-center">
                  <p class="text-center mr-4">2/3</p>
                  <img src="../assets/icon/signWarning.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <button class="nca-btn rounded-lg px-4 py-2 flex items-center">
                    <img src="../assets/icon/nca.png" class="mr-1.5" alt="">
                    Подписать
                  </button>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button class="rounded-lg download-btn"><img src="../assets/icon/downloadIcon.png" alt=""></button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <div class="form-check flex justify-center">
                  <input disabled class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <img src="../assets/icon/modUnCheck.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Закуп оборудования
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                02.03.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex items-center sign-warning-container justify-center">
                  <img src="../assets/icon/signWarningDis.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <button disabled class="nca-btn rounded-lg px-4 py-2 flex items-center">
                    <img src="../assets/icon/ncaDis.png" class="mr-1.5" alt="">
                    Подписать
                  </button>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button disabled class="rounded-lg download-btn"><img src="../assets/icon/downloadIcon.png" alt=""></button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentTable'
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .project-table-container {
    overflow-x: scroll!important;
  }
}
.table-container {
  button {
    border: 1px solid #53647F;
  }
  .first-col {
    width: 5%;
  }
  thead {
    background-color: #E8EAEE;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.25);
    th {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }
  .sign-warning-container {
    p {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #164368;
    }
  }
  .nca-btn {
    border-color: #00A47D;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #00A47D;
    &:disabled {
      border-color: #8C98A9;
      color: #8C98A9;
    }
  }
  .download-btn {
    border: none;
  }
}

</style>
