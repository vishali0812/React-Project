module.exports = SignupSchema;
const mongoose = require("mongoose");

let userColRef; 

function SignupSchema() {
    if (!userColRef) {
        const SchemaClass = mongoose.Schema;
        const colSchema = new SchemaClass({
            email: { type: String, required: true, unique: true, index: true },
            pwd: String,
            type: String,
            dos: { type: Date, default: Date.now },
            status: { type: String, default: '1' },
        }, {
            versionKey: false,
        });

        userColRef = mongoose.model("users", colSchema);
    }

    return userColRef;
}

module.exports = SignupSchema;
