var mongoose = require('mongoose');
var SchemaClass = mongoose.Schema;

var colSchema = new SchemaClass({
    email: { type: String, required: true, unique: true, index: true },
    name: String,
    mobile: String,
    address: String,
    city: String,
    ppic: String,
    ipic: String
}, {
    versionKey: false
});

var userColRef;

// Check if the model is already defined
if (mongoose.models && mongoose.models.clientProfile) {
    userColRef = mongoose.models.clientProfile;
} else {
    userColRef = mongoose.model("clientProfile", colSchema);
}

module.exports = userColRef;
