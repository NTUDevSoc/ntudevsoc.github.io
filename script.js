const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'ntu-devsoc',
  read_key: 'IJBcWosazBzNuBtTvGW78w9qwRC4qnORTQPnc1w59DaVEyZRDC'
})

const data = await bucket.getObjects({
  type: 'posts',
  props: 'slug,title,content',
  limit: 20
})

bucket.getBucket().then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })