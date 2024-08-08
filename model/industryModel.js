import mongoose from "mongoose";

const industrySchema = mongoose.Schema({
  industryName: { type: String, required: true }, // e.g., Software, Manufacturing, Healthcare
});

// Define the Industry model
const Industry = mongoose.model("Industry", industrySchema);

// Export the Industry model
export default Industry;
