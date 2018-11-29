const Validator = require('is-my-json-valid')
const getContent = require('ssb-msg-content')

module.exports = function (schema) {
  const validator = Validator(schema, { verbose: true })

  return function validate (obj) {
    var result = validator(getContent(obj))
    if (validator.errors && typeof obj === 'object') {
      obj.errors = validator.errors
    }
    return result
  }
}
