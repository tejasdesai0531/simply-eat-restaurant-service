const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogueSchema = new mongoose.Schema(
  {
    outletID :{type: Schema.Types.ObjectId, ref: 'Outlet'},
    categories : [{
        
        name:{type:String},
        items:[{
            name:{type:String},
            price:{type:Number},
            imgUrl:{type:String},
            description:{type:String},
            approvalStatus:{
                type: String,
                enum : ["PENDING", "APPROVED", "REJECTED"],
                default: 'PENDING'
            },
            visibility:{
                type:Boolean,
                required:true,
            }
        }]
    }],
  },
  {
    collation: { locale: "en_US", strength: 1 },
    usePushEach: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

catalogueSchema.set('toJSON', {
  transform: function(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;

    ret.categories.forEach(category => {
      category.id = category._id
      delete category._id

      category.items.forEach(item => {
        item.id = item._id
        delete item._id
      })
    })

    return ret;
  }
});





const Catalogue = mongoose.model("Catalogue", catalogueSchema);

module.exports = Catalogue;
