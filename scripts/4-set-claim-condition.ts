import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0x8a1C00bcC097A05B684993e074656cd659fA9ab9");

(async () => {
  try {
    const claimConditions = [{
      startTime: new Date(),
      maxQuantity: 50_000,
      price: 0,
      quantityLimitPerTransaction: 1,
      waitInSeconds: MaxUint256,
    }]

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Successfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();