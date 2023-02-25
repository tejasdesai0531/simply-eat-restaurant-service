const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    countryCode: { type: String, required: true },
    cityCode: { type: String, required: true },
    contact: { type: String, required: true },
  },
  {
    collation: { locale: "en_US", strength: 1 },
    usePushEach: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

outletSchema.options.toJSON = {
  transfrom: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
};

outletSchema.statics.addOutlet = (outlet) => {
  return Outlet.create(outlet);
};

outletSchema.statics.getOutlets = () => {
  return Outlet.find({});
};

const Outlet = mongoose.model("Outlet", outletSchema);

module.exports = Outlet;
