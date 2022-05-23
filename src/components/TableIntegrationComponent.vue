<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto project-table-container sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full table-container border text-center">
            <thead class="">
            <tr>
              <th scope="col" class="first-col text-sm text-left font-medium px-6 py-4">
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Дата
              </th>
              <th scope="col" class="text-sm font-medium px-6 py-4">
                Время
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Сумма
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Получатель БИН_ИИН
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Получатель ИИК
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Плательщик ИИК
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Проект
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Компания/Инвестор
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img src="../assets/icon/import.png" alt="">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                04.02.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                15:24:52
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                991995.00
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                990740000683
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                KZ1289800007856707703
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                KZ129650000038207703
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Наименование проекта 1
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ТОО “New Level”
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img src="../assets/icon/export.png" alt="">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                04.02.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                15:24:52
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                991995.00
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                990740000683
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                KZ1289800007856707703
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                KZ129650000038207703
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Наименование проекта 1
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ТОО “New Level”
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img src="../assets/icon/export.png" alt="">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                04.02.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                15:24:52
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                991995.00
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                990740000683
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                KZ1289800007856707703
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                KZ129650000038207703
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Наименование проекта 1
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ТОО “New Level”
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
  name: 'IntegrationModeratorComponent',
  components: {},
  props: {}
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
    border: 1px solid #00A47D;
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
}
</style>
