const uniqueRandomArray = require('unique-random-array')
const gotNames = require('./got-names.json')


module.exports = {
  all: gotNames,
  random: uniqueRandomArray(gotNames)
}
