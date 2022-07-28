import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x027b8992de06896B3aa6d2D4904E4EEB53E5f6Ab");

(async () => {
  try {
    const amount = 1_000_000;
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "ROCCA in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();