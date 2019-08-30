exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost:8080/moquicon",
      show: true
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: "MoquiCon2"
};
