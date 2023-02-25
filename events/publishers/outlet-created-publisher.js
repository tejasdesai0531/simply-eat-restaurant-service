const Publisher = require('./base-publisher')

class OutletCreatedPublisher extends Publisher {

    getSubject() { return 'outlet:created' }
}

module.exports = OutletCreatedPublisher