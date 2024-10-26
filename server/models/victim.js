import { model, Schema } from "mongoose";

const victimSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
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

export default model("Victim", victimSchema);