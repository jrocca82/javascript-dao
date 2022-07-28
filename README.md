To run scripts: node --loader ts-node/esm ./my-script.ts

All contracts deployed to rinkeby by default

Scripts 1-4 deploys a membership NFT contract
Example contract deployed at 0x8a1C00bcC097A05B684993e074656cd659fA9ab9

Sample Membership NFT:
https://testnets.opensea.io/assets/rinkeby/0x8a1C00bcC097A05B684993e074656cd659fA9ab9/0

Governance Token created by scripts 5-6 and airdropped to members by script 7
Example contract deployed at 0x027b8992de06896B3aa6d2D4904E4EEB53E5f6Ab

Voting Contract created by script 8 & 9
Example contract deployed at 0xA109FFe114C44b7c144da24498A1Ddb4aE0E28E0
Script 9 sends governance token to voting contract

Script 10 creates a proposal

Script 11 revokes admin privilege of minter (the person who ran the scripts above), allowing for decentralized governance
