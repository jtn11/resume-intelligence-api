import crypto from "crypto";
export const generateApiKey = () => {
  return "rk_live_" + crypto.randomBytes(16).toString("hex");
};
