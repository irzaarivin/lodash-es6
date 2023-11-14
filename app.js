(async () => {
  const express = require('express')
  const app = express()
  const examples = require('./controllers')
  const port = 3000
  const obj = [
    { id: 1, name: 'Saint seiya'},
    { id: 2, name: 'Naruto'},
    { id: 3,name: 'Nanatsu no Tazai'}
  ]

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  console.log('                                                                              ')
  console.log("JavaScript Ecma Script 6 :")
  console.log('------------------------------------------------------------------------------')
  await examples.es6.literal('Irza', 'Arivin')
  await examples.es6.arrayFunc()
  await examples.es6.destruct({nama: 'Irza', umur: 18, status: 'Mahasiswa'})
  await examples.es6.ternary(true)
  await examples.es6.map(obj)
  await examples.es6.filter(obj)
  await examples.es6.find(obj)
  await examples.es6.reduce(obj)
  await examples.es6.spread('Aku', 'Suka', 'Kamu')
  await examples.es6.defaultParams(1, 9)
  console.log('==============================================================================')
  console.log('                                                                              ')
  console.log("LoDash :")
  console.log('------------------------------------------------------------------------------')
  await examples.lodash.assign({a: 1}, {b: 2})
  await examples.lodash.times(7)
  await examples.lodash.find([1, 2, 3, 4, 5])
  await examples.lodash.filter([1, 2, 3, 4, 5])
  await examples.lodash.get({ id: 3,name: 'Nanatsu no Tazai'})
  await examples.lodash.set({ id: 3,name: 'Nanatsu no Tazai'})
  await examples.lodash.keyBy(obj)
  await examples.lodash.uniq([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9])
  await examples.lodash.difference()
  await examples.lodash.intersection()
  await examples.lodash.sortBy(obj)
  console.log('                                                                              ')

  app.listen(port, () => {
    // console.log(`RND Lodash - ES6 listening on port ${port}`)
  })
})()