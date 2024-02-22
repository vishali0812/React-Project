var mongoose = require("mongoose");

function ServiceProfileModel() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true },
        name: String,
        mobile: String,
        address: String,
        city: String,
        ppic: String,
        ipic: String,
        category: String,
        expert: String,
        exp: String,
        shop: String,
        dis: String,
    }, {
        versionKey: false
    });

    var userColRef = mongoose.model("ServiceProfile", colSchema);
    return userColRef;
}

module.exports = ServiceProfileModel();
