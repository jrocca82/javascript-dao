import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x8a1C00bcC097A05B684993e074656cd659fA9ab9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Baby Shark",
        description: "This NFT will give you access to RoccaDAO!",
        image: "https://i.pinimg.com/originals/e8/d2/41/e8d2413f1a6b8ecb7ba6e5f84ec8f0ec.png",
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();