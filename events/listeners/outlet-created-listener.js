const Listner = require('./base-listener')

class OutletCreatedListner extends Listner {

    getSubject() { return 'outlet:created' }

    onMessage(data, msg) {
        console.log("Inside onMessage : ", data)
        msg.ack();
    }
}

module.exports = OutletCreatedListner