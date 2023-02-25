require('dotenv').config()
const natsWrapper = require('./config/nats-wrapper')
const mongoWrapper = require('./config/mongo-wrapper')
const OutletCreatedListner = require('./events/listeners/outlet-created-listener')
const app = require('./app')


const start = async () => {

  try {
    await natsWrapper.connect()
    await mongoWrapper.connect()

    new OutletCreatedListner(natsWrapper.getClient()).listen()

    app.listen(3000, () => {
      console.log("Server listening on port 3000")
    })
  } catch (err) {
    console.log(err)
  }
}

start()

