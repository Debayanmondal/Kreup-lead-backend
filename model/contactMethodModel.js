import mongoose from "mongoose";

const contactMethodSchema = mongoose.Schema({
  method: { type: String, required: true }, // e.g., Email, Phone, Skype
});

// Define the ContactMethod model
const ContactMethod = mongoose.model("ContactMethod", contactMethodSchema);

// Export the ContactMethod model
export default ContactMethod;
