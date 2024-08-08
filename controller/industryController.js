import Industry from "../model/industryModel.js";

// Get all industryName
export const getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.find({}).select("industryName");
    res.status(200).json(industries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
