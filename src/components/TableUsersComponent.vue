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
                Логин
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                ФИО
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Телефон
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Email
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Роль
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b">
              <td class="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                524
              </td>
              <td class="first-col px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <div class="flex justify-center">
                  <img src="../assets/icon/modCheck.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                stepan.grebnev
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Гребнев Степан Аркадинович
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                +7 (921) 656-57-61
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                stepan.grebnev@mail.ru
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <role-tag role="Заемщик" />
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button @click="$router.push('/moderator-edit-user')" class="edit-btn rounded-lg"><img class="px-4 py-2" src="../assets/icon/edit.png" alt=""></button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button class="delete-btn rounded-lg"><img class="px-4 py-2" src="../assets/icon/delete.png" alt=""></button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                524
              </td>
              <td class="first-col px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <div class="flex justify-center">
                  <img src="../assets/icon/modDis.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                stepan.grebnev
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Гребнев Степан Аркадинович
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                +7 (921) 656-57-61
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                stepan.grebnev@mail.ru
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <role-tag role="Инвестор" />
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button @click="$router.push('/moderator-edit-user')" class="edit-btn rounded-lg"><img class="px-4 py-2" src="../assets/icon/edit.png" alt=""></button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button class="delete-btn rounded-lg"><img class="px-4 py-2" src="../assets/icon/delete.png" alt=""></button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                524
              </td>
              <td class="first-col px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <div class="flex justify-center">
                  <img src="../assets/icon/modCheck.png" alt="">
                </div>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                stepan.grebnev
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Гребнев Степан Аркадинович
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                +7 (921) 656-57-61
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                stepan.grebnev@mail.ru
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <div class="flex justify-center">
                  <role-tag role="Инвестор" />
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button @click="$router.push('/moderator-edit-user')" class="edit-btn rounded-lg"><img class="px-4 py-2" src="../assets/icon/edit.png" alt=""></button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button class="delete-btn rounded-lg"><img class="px-4 py-2" src="../assets/icon/delete.png" alt=""></button>
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
import RoleTag from '@/components/RoleTag'
export default {
  name: 'TableUsersComponent',
  components: {
    RoleTag
  }
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
  .delete-btn {
    border: 1px solid #FF5583;
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
