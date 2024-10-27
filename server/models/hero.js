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
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

export default model("Hero", heroSchema);