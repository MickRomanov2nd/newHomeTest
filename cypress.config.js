const { defineConfig } = require("cypress");

/** Конфигурация Cypress */
export default defineConfig({
  /** Идентификатор проекта */
  projectId: "2u14tb",

  /** Ширина окна браузера */
  viewportWidth: 1600,

  /** Высота окна браузера */
  viewportHeight: 900,

  /** Отключение проверки безопасности */
  chromeWebSecurity: false,

  /** Таймаут ожидания выполнения процедур */
  defaultCommandTimeout: 10000,

  /** Переменные окружения */
  env: {
    /** Адрес сервиса */
    baseUrl: "https://portal.servers.com/login",

    /** Данные пользователя */



  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
