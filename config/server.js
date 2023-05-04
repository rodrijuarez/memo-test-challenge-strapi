module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "secret"),
    },
    serveAdminPanel: env.bool("SERVE_ADMIN", true),
    url: env("PUBLIC_URL", "https://memo-test-challenge-strapi.onrender.com/"),
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("PUBLIC_URL", "https://memo-test-challenge-strapi.onrender.com/"),
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
