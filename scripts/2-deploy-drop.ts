import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "RoccaDAO Membership",
            description: "An NFT for members of RoccaDao.",
            image: "https://images.saatchiart.com/saatchi/1377655/art/7353521/additional_49b088f30e26947e5f2f59b6b1d337115f49d0e0-AICC2-8.jpg",
            // you can set this to your own wallet address if you want to charge for the drop.
            primary_sale_recipient: AddressZero
        });

        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        const metadata = await editionDrop.metadata.get();

        console.log(
            "✅ Successfully deployed editionDrop contract, address:",
            editionDropAddress
        );
    } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
    }
})();
