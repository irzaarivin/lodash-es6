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
    array: {
      chunk: async () => {
        return console.log("Hasil Lodash _.chunk([1, 2, 3, 4, 5], 2) =>", _.chunk([1, 2, 3, 4, 5], 2))
      },
      compact: async () => {
        return console.log("Hasil Lodash _.compact([0, 1, false, 2, '', 3]) =>", _.compact([0, 1, false, 2, '', 3]))
      },
      concat: async () => {
        return console.log("Hasil Lodash _.concat([1, 2, 3], [4, 5, 6], [7, 8, 9]) =>", _.concat([1, 2, 3], [4, 5, 6], [7, 8, 9]))
      },
      difference: async () => {
        return console.log("Hasil Lodash _.difference([1, 2, 3], [1, 2, 4]) =>", _.difference([1, 2, 3], [1, 2, 4]))
      },
      differenceBy: async () => {
        return console.log("Hasil Lodash _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) =>", _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
      },
      differenceWith: async () => {
        return console.log("Hasil Lodash _.differenceWith([2.1, 1.2], [2.3, 3.4], _.isEqual) =>", _.differenceWith([2.1, 1.2], [2.3, 3.4], _.isEqual))
      },
      drop: async () => {
        return console.log("Hasil Lodash _.drop([1, 2, 3], 2) =>", _.drop([1, 2, 3], 2))
      },
      dropRight: async () => {
        return console.log("Hasil Lodash _.dropRight([1, 2, 3], 2) =>", _.dropRight([1, 2, 3], 2))
      },
      dropRightWhile: async () => {
        return console.log("Hasil Lodash _.dropRightWhile([1, 2, 3], x => x < 3) =>", _.dropRightWhile([1, 2, 3], x => x < 3))
      },
      dropWhile: async () => {
        return console.log("Hasil Lodash _.dropWhile([1, 2, 3], x => x < 3) =>", _.dropWhile([1, 2, 3], x => x < 3))
      },
      fill: async () => {
        return console.log("Hasil Lodash _.fill([4, 6, 8, 10], '*', 1, 3) =>", _.fill([4, 6, 8, 10], '*', 1, 3))
      },
      findIndex: async () => {
        return console.log("Hasil Lodash _.findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x % 2 === 0) =>", _.findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x % 2 === 0))
      },
      findLastIndex: async () => {
        return console.log("Hasil Lodash _.findLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x % 2 === 0) =>", _.findLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x % 2 === 0))
      },
      head: async () => {
        return console.log("Hasil Lodash _.head([1, 2, 3, 4, 5]) =>", _.head([1, 2, 3, 4, 5]))
      },
      flatten: async () => {
        return console.log("Hasil Lodash _.flatten([1, [2], [3, [[4]]]]) =>", _.flatten([1, [2], [3, [[4]]]]))
      },
      flattenDeep: async () => {
        return console.log("Hasil Lodash _.flattenDeep([1, [2], [3, [[4]]]]) =>", _.flattenDeep([1, [2], [3, [[4]]]]))
      },
      flattenDepth: async () => {
        return console.log("Hasil Lodash _.flattenDepth([1, [2], [3, [[4]]]], 1) =>", _.flattenDepth([1, [2], [3, [[4]]]], 1))
      },
      fromPairs: async () => {
        return console.log("Hasil Lodash _.fromPairs([['a', 1], ['b', 2]]) =>", _.fromPairs([['a', 1], ['b', 2]]))
      },
      indexOf: async () => {
        return console.log("Hasil Lodash _.indexOf([1, 2, 3, 1, 2, 3], 2) =>", _.indexOf([1, 2, 3, 1, 2, 3], 2))
      },
      initial: async () => {
        return console.log("Hasil Lodash _.initial([1, 2, 3, 4]) =>", _.initial([1, 2, 3, 4]))
      },
      intersection: async () => {
        return console.log("Hasil Lodash _.intersection([2, 1], [2, 3]) =>", _.intersection([2, 1], [2, 3]))
      },
      intersectionBy: async () => {
        return console.log("Hasil Lodash _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) =>", _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor))
      },
      intersectionWith: async () => {
        return console.log("Hasil Lodash _.intersectionWith([2.1, 1.2], [2.3, 3.4], _.isEqual) =>", _.intersectionWith([2.1, 1.2], [2.3, 3.4], _.isEqual))
      },
      join: async () => {
        return console.log("Hasil Lodash _.join(['a', 'b', 'c', 'd'], '-') =>", _.join(['a', 'b', 'c', 'd'], '-'))
      },
      last: async () => {
        return console.log("Hasil Lodash _.last([1, 2, 3, 4, 5]) =>", _.last([1, 2, 3, 4, 5]))
      },
      lastIndexOf: async () => {
        return console.log("Hasil Lodash _.lastIndexOf([1, 2, 1, 2], 2) =>", _.lastIndexOf([1, 2, 1, 2], 2))
      },
      nth: async () => {
        return console.log("Hasil Lodash _.nth([1, 2, 3, 4], 2) =>", _.nth([1, 2, 3, 4], 2))
      },
      pull: async () => {
        return console.log("Hasil Lodash _.pull([1, 2, 3, 4], 3) =>", _.pull([1, 2, 3, 4], 3))
      },
      pullAll: async () => {
        return console.log("Hasil Lodash _.pullAll([1, 2, 3, 4], [3, 4]) =>", _.pullAll([1, 2, 3, 4], [3, 4]))
      },
      pullAllBy: async () => {
        return console.log("Hasil Lodash _.pullAllBy([1, 2, 3, 4], [3, 4], Math.floor) =>", _.pullAllBy([1, 2, 3, 4], [3, 4], Math.floor))
      },
      pullAllWith: async () => {
        return console.log("Hasil Lodash _.pullAllWith([1, 2, 3, 4], [3, 4], _.isEqual) =>", _.pullAllWith([1, 2, 3, 4], [3, 4], _.isEqual))
      },
      pullAt: async () => {
        return console.log("Hasil Lodash _.pullAt([1, 2, 3, 4], [1, 3]) =>", _.pullAt([1, 2, 3, 4], [1, 3]))
      },
      reverse: async () => {
        return console.log("Hasil Lodash _.reverse([1, 2, 3, 4]) =>", _.reverse([1, 2, 3, 4]))
      },
      remove: async () => {
        return console.log("Hasil Lodash _.remove([1, 2, 3, 4], x => x > 2) =>", _.remove([1, 2, 3, 4], x => x > 2))
      },
      slice: async () => {
        return console.log("Hasil Lodash _.slice([1, 2, 3, 4], 2) =>", _.slice([1, 2, 3, 4], 2))
      },
      sortedIndex: async () => {
        return console.log("Hasil Lodash _.sortedIndex([1, 2, 3, 4], 2) =>", _.sortedIndex([1, 2, 3, 4], 2))
      },
      sortedIndexBy: async () => {
        return console.log("Hasil Lodash _.sortedIndexBy([1, 2, 3, 4], 2) =>", _.sortedIndexBy([1, 2, 3, 4], 2))
      },
      sortedIndexOf: async () => {
        return console.log("Hasil Lodash _.sortedIndexOf([1, 2, 3, 4], 2) =>", _.sortedIndexOf([1, 2, 3, 4], 2))
      },
      sortedLastIndex: async () => {
        return console.log("Hasil Lodash _.sortedLastIndex([1, 2, 3, 4], 2) =>", _.sortedLastIndex([1, 2, 3, 4], 2))
      },
      sortedLastIndexBy: async () => {
        return console.log("Hasil Lodash _.sortedLastIndexBy([1, 2, 3, 4], 2) =>", _.sortedLastIndexBy([1, 2, 3, 4], 2))
      },
      sortedLastIndexOf: async () => {
        return console.log("Hasil Lodash _.sortedLastIndexOf([1, 2, 3, 4], 2) =>", _.sortedLastIndexOf([1, 2, 3, 4], 2))
      },
      sortedUniq: async () => {
        return console.log("Hasil Lodash _.sortedUniq([1, 2, 3, 4]) =>", _.sortedUniq([1, 2, 3, 4]))
      },
      sortedUniqBy: async () => {
        return console.log("Hasil Lodash _.sortedUniqBy([1, 2, 3, 4]) =>", _.sortedUniqBy([1, 2, 3, 4]))
      },
      tail: async () => {
        return console.log("Hasil Lodash _.tail([1, 2, 3, 4]) =>", _.tail([1, 2, 3, 4]))
      },
      take: async () => {
        return console.log("Hasil Lodash _.take([1, 2, 3, 4], 2) =>", _.take([1, 2, 3, 4], 2))
      },
      takeRight: async () => {
        return console.log("Hasil Lodash _.takeRight([1, 2, 3, 4], 2) =>", _.takeRight([1, 2, 3, 4], 2))
      },
      takeRightWhile: async () => {
        return console.log("Hasil Lodash _.takeRightWhile([1, 2, 3, 4], x => x > 2) =>", _.takeRightWhile([1, 2, 3, 4], x => x > 2))
      },
      takeWhile: async () => {
        return console.log("Hasil Lodash _.takeWhile([1, 2, 3, 4], x => x > 2) =>", _.takeWhile([1, 2, 3, 4], x => x > 2))
      },
      union: async () => {
        return console.log("Hasil Lodash _.union([1, 2, 3, 4], [5, 6, 7, 8]) =>", _.union([1, 2, 3, 4], [5, 6, 7, 8]))
      },
      unionBy: async () => {
        return console.log("Hasil Lodash _.unionBy([1, 2, 3, 4], [5, 6, 7, 8]) =>", _.unionBy([1, 2, 3, 4], [5, 6, 7, 8]))
      },
      unionWith: async () => {
        return console.log("Hasil Lodash _.unionWith([1, 2, 3, 4], [5, 6, 7, 8]) =>", _.unionWith([1, 2, 3, 4], [5, 6, 7, 8]))
      },
      uniq: async () => {
        return console.log("Hasil Lodash _.uniq([1, 2, 3, 4]) =>", _.uniq([1, 2, 3, 4]))
      },
      uniqBy: async () => {
        return console.log("Hasil Lodash _.uniqBy([1, 2, 3, 4]) =>", _.uniqBy([1, 2, 3, 4]))
      },
      uniqWith: async () => {
        return console.log("Hasil Lodash _.uniqWith([1, 2, 3, 4]) =>", _.uniqWith([1, 2, 3, 4]))
      },
      unzip: async () => {
        return console.log("Hasil Lodash _.unzip([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) =>", _.unzip([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
      },
      unzipWith: async () => {
        return console.log("Hasil Lodash _.unzipWith([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) =>", _.unzipWith([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
      },
      without: async () => {
        return console.log("Hasil Lodash _.without([2, 1, 2, 3], 1, 2) =>", _.without([2, 1, 2, 3], 1, 2))
      },
      xor: async () => {
        return console.log("Hasil Lodash _.xor([2, 1], [2, 3]) =>", _.xor([2, 1], [2, 3]))
      },
      xorBy: async () => {
        return console.log("Hasil Lodash _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor) =>", _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor))
      },
      xorWith: async () => {
        return console.log("Hasil Lodash _.xorWith([2.1, 1.2], [2.3, 3.4], Math.floor) =>", _.xorWith([2.1, 1.2], [2.3, 3.4], Math.floor))
      },
      zip: async () => {
        return console.log("Hasil Lodash _.zip([1, 2, 3], [4, 5, 6], [7, 8, 9]) =>", _.zip([1, 2, 3], [4, 5, 6], [7, 8, 9]))
      },
      zipObject: async () => {
        return console.log("Hasil Lodash _.zipObject(['a', 'b'], [1, 2]) =>", _.zipObject(['a', 'b'], [1, 2]))
      },
      zipObjectDeep: async () => {
        return console.log("Hasil Lodash _.zipObjectDeep(['a.b[0].c', 'a.b[1].c'], [1, 2]) =>", _.zipObjectDeep(['a.b[0].c', 'a.b[1].c'], [1, 2]))
      },
      zipWith: async () => {
        return console.log("Hasil Lodash _.zipWith([1, 2, 3], [4, 5, 6], [7, 8, 9]) =>", _.zipWith([1, 2, 3], [4, 5, 6], [7, 8, 9]))
      }
    },
    collection: {
      countBy: async () => {
        return console.log("Hasil Lodash _.countBy([6.1, 4.2, 6.3], Math.floor) =>", _.countBy([6.1, 4.2, 6.3], Math.floor))
      },
      forEach: async () => {
        return console.log("Hasil Lodash _.forEach([1, 2, 3], value => console.log(value)) =>", _.forEach([1, 2, 3], value => console.log(value)))
      },
      forEachRight: async () => {
        return console.log("Hasil Lodash _.forEachRight([1, 2, 3], value => console.log(value)) =>", _.forEachRight([1, 2, 3], value => console.log(value)))
      },
      every: async () => {
        return console.log("Hasil Lodash _.every([true, 1, null, 'yes'], Boolean) =>", _.every([true, 1, null, 'yes'], Boolean))
      },
      filter: async () => {
        return console.log("Hasil Lodash _.filter([1, 2, 3], value => value > 1) =>", _.filter([1, 2, 3], value => value > 1))
      },
      find: async () => {
        return console.log("Hasil Lodash _.find([1, 2, 3], value => value > 1) =>", _.find([1, 2, 3], value => value > 1))
      },
      findLast: async () => {
        return console.log("Hasil Lodash _.findLast([1, 2, 3], value => value > 1) =>", _.findLast([1, 2, 3], value => value > 1))
      },
      flatMap: async () => {
        return console.log("Hasil Lodash _.flatMap([1, 2, 3], value => [value, value * 2]) =>", _.flatMap([1, 2, 3], value => [value, value * 2]))
      },
      flatMapDeep: async () => {
        return console.log("Hasil Lodash _.flatMapDeep([1, 2, 3], value => [value, value * 2]) =>", _.flatMapDeep([1, 2, 3], value => [value, value * 2]))
      },
      flatMapDepth: async () => {
        return console.log("Hasil Lodash _.flatMapDepth([1, 2, 3], value => [value, value * 2]) =>", _.flatMapDepth([1, 2, 3], value => [value, value * 2]))
      },
      forEach: async () => {
        return console.log("Hasil Lodash _.forEach([1, 2, 3], value => console.log(value)) =>", _.forEach([1, 2, 3], value => console.log(value)))
      },
      forEachRight: async () => {
        return console.log("Hasil Lodash _.forEachRight([1, 2, 3], value => console.log(value)) =>", _.forEachRight([1, 2, 3], value => console.log(value)))
      },
      groupBy: async () => {
        return console.log("Hasil Lodash _.groupBy([6.1, 4.2, 6.3], Math.floor) =>", _.groupBy([6.1, 4.2, 6.3], Math.floor))
      },
      includes: async () => {
        return console.log("Hasil Lodash _.includes([1, 2, 3], 1) =>", _.includes([1, 2, 3], 1))
      },
      invokeMap: async () => {
        return console.log("Hasil Lodash _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort') =>", _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'))
      },
      keyBy: async () => {
        return console.log("Hasil Lodash _.keyBy([6.1, 4.2, 6.3], Math.floor) =>", _.keyBy([6.1, 4.2, 6.3], Math.floor))
      },
      map: async () => {
        return console.log("Hasil Lodash _.map([1, 2, 3], value => value * 2) =>", _.map([1, 2, 3], value => value * 2))
      },
      orderBy: async () => {
        return console.log("Hasil Lodash _.orderBy([1, 2, 3], ['a', 'b', 'c']) =>", _.orderBy([1, 2, 3], ['a', 'b', 'c']))
      },
      partition: async () => {
        return console.log("Hasil Lodash _.partition([1, 2, 3], value => value > 1) =>", _.partition([1, 2, 3], value => value > 1))
      },
      reduce: async () => {
        return console.log("Hasil Lodash _.reduce([1, 2, 3], (sum, value) => sum + value, 0) =>", _.reduce([1, 2, 3], (sum, value) => sum + value, 0))
      },
      reduceRight: async () => {
        return console.log("Hasil Lodash _.reduceRight([1, 2, 3], (sum, value) => sum + value, 0) =>", _.reduceRight([1, 2, 3], (sum, value) => sum + value, 0))
      },
      reject: async () => {
        return console.log("Hasil Lodash _.reject([1, 2, 3], value => value > 1) =>", _.reject([1, 2, 3], value => value > 1))
      },
      sample: async () => {
        return console.log("Hasil Lodash _.sample([1, 2, 3]) =>", _.sample([1, 2, 3]))
      },
      sampleSize: async () => {
        return console.log("Hasil Lodash _.sampleSize([1, 2, 3], 2) =>", _.sampleSize([1, 2, 3], 2))
      },
      shuffle: async () => {
        return console.log("Hasil Lodash _.shuffle([1, 2, 3]) =>", _.shuffle([1, 2, 3]))
      },
      size: async () => {
        return console.log("Hasil Lodash _.size([1, 2, 3]) =>", _.size([1, 2, 3]))
      },
      some: async () => {
        return console.log("Hasil Lodash _.some([1, 2, 3], value => value > 1) =>", _.some([1, 2, 3], value => value > 1))
      },
      sortBy: async () => {
        return console.log("Hasil Lodash _.sortBy([1, 2, 3], value => value > 1) =>", _.sortBy([1, 2, 3], value => value > 1))
      }
    },
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