<template>
  <div class="bg-white rounded-lg ">
    <div class="p-4 text-left">
      <h1 class="py-1.5 notification-title mb-4">Уведомления</h1>
      <div class="notification mb-4">
        <div class="notification-sm-container flex justify-between pb-1.5">
          <h4>Уведомление от платформы</h4>
          <p>21.03.2022</p>
        </div>
        <p class="mt-1.5">
          Равным образом, реализация намеченных плановых заданий играет важную роль в формировании приоритизации разума
          над эмоциями. В частности, перспективное планирование представляет собой интересный эксперимент проверки
          экономической целесообразности принимаемых решений. Мы вынуждены отталкиваться от того, что семантический
          разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные
          решения касаемо прогресса профессионального сообщества.
        </p>
      </div>
      <div class="notification">
        <div class="notification-sm-container flex justify-between pb-1.5">
          <h4>Уведомление от платформы</h4>
          <p>21.03.2022</p>
        </div>
        <p class="mt-1.5">
          Равным образом, реализация намеченных плановых заданий играет важную роль в формировании приоритизации разума
          над эмоциями. В частности, перспективное планирование представляет собой интересный эксперимент проверки
          экономической целесообразности принимаемых решений. Мы вынуждены отталкиваться от того, что семантический
          разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные
          решения касаемо прогресса профессионального сообщества.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notificationComponent'
}
</script>

<style lang="scss" scoped>
.notification-title {
  font-family: 'Gilroy',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #164368;
  border-bottom: 2px solid #80D1BE;
}
.notification-sm-container {
  border-bottom: 2px solid #80D1BE;
  h4 {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #53647F;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #AFB7C3;
  }
}
.notification {
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #53647F;
  }
}
</style>
