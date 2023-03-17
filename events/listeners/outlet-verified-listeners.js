const { Listner } = require('@simply-eat/common');
const outletModel = require('../../models/outlet.model');

class OutletVerifiedListener extends Listner {

    getSubject() { return 'outlet:verified' }

    async onMessage(data, msg) {
        console.log("Inside onMessage : ", data);

        let outletID = data.id;
        let outlet  = await outletModel.findById(outletID);
        outlet.verification.isVerified = true;
       await outlet.save()

        msg.ack();
    }
}

module.exports = OutletVerifiedListener