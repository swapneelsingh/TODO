import mongoose, {Schema} from "mongoose";

const todoSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);