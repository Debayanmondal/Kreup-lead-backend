import User from "../model/userModel.js";

// Get all userName where role is Lead Owner
export const getLeadOwners = async (req, res) => {
  try {
    const leadOwners = await User.find({ role: "Lead Owner" }).select(
      "userName"
    );
    res.status(200).json(leadOwners);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
