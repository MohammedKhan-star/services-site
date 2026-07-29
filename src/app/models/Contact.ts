import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  ip?: string;
  userAgent?: string;
  status: "New" | "Contacted" | "In Progress" | "Completed";
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    company: {
      type: String,
      default: "",
    },

    service: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    ip: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "In Progress", "Completed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  models.Contact || model<IContact>("Contact", ContactSchema);

export default Contact;