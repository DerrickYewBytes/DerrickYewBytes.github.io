export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 0,
      features: {
        "nesting-rules": true,
      },
    },
    "postcss-css-variables": {},
  },
};
