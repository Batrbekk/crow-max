<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto project-table-container sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full table-container border text-center">
            <thead class="">
            <tr>
              <th scope="col" class="first-col text-sm text-left font-medium px-6 py-4">
                ID
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
              </th>
              <th scope="col" class="text-sm font-medium px-6 py-4">
                Компания
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Имя проекта
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Дата подачи
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Сумма
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Ближайший платеж
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Срок
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Ставка
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img src="../assets/icon/modWarCheck.png" alt="">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                АО "Алматытемiр"
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Закуп оборудования
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                27.03.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                11 200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                3 мес
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                27%
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button @click="$router.push('/moderator-edit-rocket')" class="rounded-lg px-4 py-2"><img src="../assets/icon/dotsMod.png" alt=""></button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img src="../assets/icon/modCheck.png" alt="">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                АО "Алматытемiр"
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Закуп оборудования
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                27.03.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                11 200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                3 мес
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                27%
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button @click="$router.push('/moderator-edit-rocket')" class="rounded-lg px-4 py-2"><img src="../assets/icon/dotsMod.png" alt=""></button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="first-col text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img src="../assets/icon/modUnCheck.png" alt="">
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                АО "Алматытемiр"
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Закуп оборудования
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                27.03.2022
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                11 200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                250 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                3 мес
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                27%
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button @click="$router.push('/moderator-edit-rocket')" class="rounded-lg px-4 py-2"><img src="../assets/icon/dotsMod.png" alt=""></button>
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
  name: 'TableRocketModeratorComponent',
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
