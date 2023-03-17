const { Listner } = require('@simply-eat/common');
const outletModel = require('../../models/outlet.model');

class OutletRejectedListener extends Listner {

    getSubject() { return 'outlet:rejected' }

    async onMessage(data, msg) {
        console.log("Inside onMessage : ", data);

        let outletID = data.id;
        let outlet  = await outletModel.findById(outletID);
        outlet.verification.isVerified = false;
        outlet.verification.rejectReason = data.rejectReason;
       await outlet.save();

        msg.ack();
    }
}

module.exports = OutletRejectedListener