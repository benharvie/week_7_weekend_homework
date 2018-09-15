const config = {
  entry: `${__dirname}/src/app.js`, // entry point, first line of code that executes (__dirname = pwd)
  output: {
    path: `${__dirname}/public/js`, // describing the file we want webpack to create (__dirname = pwd)
    filename: 'bundle.js' // file name output, convention is bundle.js
  },
  mode: 'development' // set development mode
};

module.exports = config;
