import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);
