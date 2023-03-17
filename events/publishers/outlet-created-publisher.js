const {Publisher} = require('@simply-eat/common')

class OutletCreatedPublisher extends Publisher {

    getSubject() { return 'outlet:created' }
}

module.exports = OutletCreatedPublisher