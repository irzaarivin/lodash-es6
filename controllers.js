const _ = require('lodash')

const examples = {
  es6: {
    literal: async (firstName, lastName) => {
      // return setTimeout(() => {
      //   return console.log(`Template Literal : ${firstName} ${lastName}`)
      // }, 1000)
      return await console.log(`Template Literal : ${firstName} ${lastName}`)
    },
    arrayFunc: async () => {
      return console.log('Array Function : const anyFunc = () => {...}')
    },
    destruct: async (values) => {
      const {nama, umur, status} = values
      return console.log(`Destructuring {nama, umur, status} = {${nama}, ${umur}, ${status}}`)
    },
    ternary: async (status) => {
      return console.log(`Ternary : Isi valuenya adalah (${status ? 'true' : 'false'})`)
    },
    map: async (obj) => {
      return console.log("Hasil Mapping :", obj.map(anime => anime.name))
    },
    filter: async (obj) => {
      return console.log("Hasil Filter :", obj.filter(anime => anime.name === "Naruto"))
    },
    find: async (obj) => {
      return console.log("Hasil Find :", obj.find(anime => anime.name === "Saint seiya"))
    },
    reduce: async (obj) => {
      return console.log("Hasil Reduce :", obj.reduce((acc, anime) => acc + anime.id, 0))
    },
    spread: async (...obj) => {
      return console.log(`Hasil Spreading : Isi dari parameter yang diberikan = (${obj})`)
    },
    defaultParams: async (a = 1, b = 2) => {
      return console.log(`Default Parameter : Isi dari parameter yang diberikan = ${a} dan ${b}`)
    }
  },
  lodash: {
    assign: async (a, b) => {
      return console.log("Hasil Lodash _.assign({a: 1}, {b: 2}) =>", _.assign(a, b))
    },
    times: async (time) => {
      return console.log(`Hasil Lodash _.times(${time}) => ${_.times(time)}`)
    },
    find: async (arr) => {
      return console.log(`Hasil Lodash _.find([${arr}], x => x === 3) => ${_.find(arr, x => x === 3)}`)
    },
    filter: async (arr) => {
      return console.log(`Hasil Lodash _.filter([${arr}], x => x === 3) => ${_.filter(arr, x => x === 3)}`)
    },
    get: async (obj) => {
      return console.log(`Hasil Lodash _.get(${obj}, 'a') => ${_.get(obj, 'name')}`)
    },
    set: async (obj) => {
      const neww = _.set(obj, "umur", 18)
      return console.log(`Hasil Lodash _.set(${obj}, "umur", 18) =>`, neww)
    },
    keyBy: async (obj) => {
      return console.log("Hasil Lodash _.keyBy() =>", _.keyBy(obj, x => x.id))
    },
    uniq: async (arr) => {
      return console.log("Hasil Lodash _.uniq([" + arr +  "]) =>", JSON.stringify(_.uniq(arr)))
    },
    difference: async () => {
      return console.log("Hasil Lodash _.difference([1, 2, 3], [1, 2, 4]) =>", _.difference([1, 2, 3], [1, 2, 4]))
    },
    intersection: async () => {
      return console.log("Hasil Lodash _.intersection([1, 2, 3], [1, 2, 4]) =>", _.intersection([1, 2, 3], [1, 2, 4]))
    },
    sortBy: async (obj) => {
      return console.log("Hasil Lodash _.sortBy() =>", JSON.stringify(_.sortBy(obj, ['name', 'id'])))
    }
  }
}

module.exports = examples