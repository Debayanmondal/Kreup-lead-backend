import mongoose from "mongoose";

const sourceSchema = mongoose.Schema({
  sourceName: { type: String, required: true }, // e.g., Website, Referral, Advertisement
});

// Define the Source model
const Source = mongoose.model("Source", sourceSchema);

// Export the Source model
export default Source;
