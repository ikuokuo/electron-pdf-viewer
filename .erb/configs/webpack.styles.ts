const { getThemeVariables } = require('antd/dist/theme');

const lessOptions = {
  modifyVars: getThemeVariables({
    dark: true,
    // compact: true,
  }),
  javascriptEnabled: true,
};

export default {
  lessOptions,
};
