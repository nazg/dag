
module.exports = {
  "*.{js,ts,vue}": [
    "vue-cli-service lint",
  ],
  "*.{json,md,scss}": [
    "prettier --write",
  ],
}
