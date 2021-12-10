module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ea2e06a15dd3ad12d5dde906b66c3d0'),
  },
});
