export default {
  async fetch(request, env, ctx) {
    // PIZZA LUXE — полностью статический сайт. Вся маршрутизация — через assets.
    return env.ASSETS.fetch(request);
  }
};
