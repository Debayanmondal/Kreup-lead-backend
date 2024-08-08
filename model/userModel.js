import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true }, // e.g., Lead Owner
});

// Define the User model
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;
