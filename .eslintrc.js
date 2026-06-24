module.exports = {
  root: true,
  extends: ["standard"],
  globals: {
    IS_DEVELOPMENT: "readonly",
  },
  parsetOptions: {
    ecmasVersion: 2020,
  },
  rules: {
    "arrow-parens": ["error", "always"],
    "no-extra-parens": "off",
  },
};
