import { model, Schema } from "mongoose";

const heroSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        // numberOfRescues: {
        //     type: Number,
        //     required: true,
        // },
        // reputation: {
        //     type: Number,
        //     required: true,
        // }
    },
    {
        timestamps: true
    }
);

export default model("Hero", heroSchema);