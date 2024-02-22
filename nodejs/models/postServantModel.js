module.exports = PostServantModel;
const mongoose = require("mongoose");

let userColRef; 

function PostServantModel() {
    if (!userColRef) {
        const SchemaClass = mongoose.Schema;
        const colSchema = new SchemaClass({
            email: { type: String, required: true, index: true },
            deadline: { type: Date },
            category: String,
            location: String,
            mobile: String,
            task: String
        }, {
            versionKey: false,
        });

        userColRef = mongoose.model("ServantRequest", colSchema);
    }

    return userColRef;
}

module.exports = PostServantModel;
