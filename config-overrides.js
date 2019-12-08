module.exports = function override(config, _env) {
  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // several examples !

          // default value
          formatter: require("eslint/lib/formatters/stylish"),

          // community formatter
          formatter: require("eslint-friendly-formatter"),

          // custom formatter
          formatter: function(results) {
            // `results` format is available here
            // http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()

            // you should return a string
            // DO NOT USE console.*() directly !
            return "OUTPUT";
          }
        }
      }
    ]
  }
  
  return config;
}