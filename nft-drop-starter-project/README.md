# Solana NFT Drop Project (adapted from Buildspace)

### Welcome 👋

To get started with this project, clone this repo and follow these commands:

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project
4. Start coding!


## Uploading NFT's
After airdropping some SOL to your local wallet
```
jeet@Jeet-ROG:~/SolanaUdemy/nft-drop-starter-project$ ts-node /home/jeet/SolanaUdemy/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet -k ~/.config/solana/devnet.json -cp config.json ./assets
wallet public key: ATUdNb71tuoCFhAuo8j1SKdGvssNj1ByuViPVHYv5ayd
(node:1458) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
WARNING: The "arweave" storage option will be going away soon. Please migrate to arweave-bundle or arweave-sol for mainnet.

Beginning the upload for 3 (img+json) pairs
started at: 1649543837278
initializing candy machine
Candy machine address:  3JfRoSfzqHmCcteUdvqAYwW1gcxEzHjic1JcrVgnoL4T
Collection metadata address:  C9FTmkkftqkBHgbdpQU8G6ZLjhvRou22A1ffc5YjYq7i
Collection metadata authority:  ATUdNb71tuoCFhAuo8j1SKdGvssNj1ByuViPVHYv5ayd
Collection master edition address:  DgXrxtUtWHZSi71gKUnoC5zgFFL5GFE6WHwUr4MYauLg
Collection mint address:  DFekgDaJmHdNqVy3BvtJt27i1w7Gz7iqvyU6mehp61qK
Collection PDA address:  9beoKsPL7T9qCNQFYjqVryMzVBEGMhP4g4D5B2HKwJ7y
Collection authority record address:  4KhboMNY57MFuPoAnSkY9C4Q3X5FdhSi7R7pvFA7Pb44
Collection:  {
  collectionMetadata: 'C9FTmkkftqkBHgbdpQU8G6ZLjhvRou22A1ffc5YjYq7i',
  collectionPDA: '9beoKsPL7T9qCNQFYjqVryMzVBEGMhP4g4D5B2HKwJ7y',
  txId: 'e2t2EnTzSLJn6shtZVdeoNWeLzhzrBrKf5TTaocVxajjb1tG4d6URC6NbgNVhUnCRQL9t1az4MfSWzZ1nzT2LMf'
}
initialized config for a candy machine with publickey: 3JfRoSfzqHmCcteUdvqAYwW1gcxEzHjic1JcrVgnoL4T
[0] out of [3] items have been uploaded
Starting upload for [3] items, format {"mediaExt":".png","index":"0"}
Progress: [████████████████████████████████████████] 100% | 3/3
Writing all indices in 1 transactions...
Progress: [████████████████████████████████████████] 100% | 1/1
Done. Successful = true.
ended at: 2022-04-09T22:38:00.579Z. time taken: 00:00:43
```

NTF Contract address: 3JfRoSfzqHmCcteUdvqAYwW1gcxEzHjic1JcrVgnoL4T

## Verify Uploaded NFT's

```
jeet@Jeet-ROG:~/SolanaUdemy/nft-drop-starter-project$ ts-node /home/jeet/SolanaUdemy/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload -e devnet -k ~/.config/solana/devnet.json 
wallet public key: ATUdNb71tuoCFhAuo8j1SKdGvssNj1ByuViPVHYv5ayd
(node:1778) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Checking 3 items that have yet to be checked...
Looking at key  0
Looking at key  1
Looking at key  2
uploaded (3) out of (3)
ready to deploy!
```

## NFT Upload details

```
{
  "program": {
    "uuid": "3JfRoS",
    "candyMachine": "3JfRoSfzqHmCcteUdvqAYwW1gcxEzHjic1JcrVgnoL4T",
    "collection": "C9FTmkkftqkBHgbdpQU8G6ZLjhvRou22A1ffc5YjYq7i"
  },
  "items": {
    "0": {
      "link": "https://arweave.net/tqNzqjva9qy27lpfrsUy29GB4yz6gPw6cRqeSnyxUVA",
      "imageLink": "https://arweave.net/XcE-HmZm08SLZOGuoGRrRujvkUiGctnKhkRWSi-awbE?ext=png",
      "name": "Bulbasaur",
      "onChain": true,
      "verifyRun": true
    },
    "1": {
      "link": "https://arweave.net/XX_foUIUDXUEcMxhKn3UIeD6HE5paKJPH4tdL0jSBlM",
      "imageLink": "https://arweave.net/nzCG1zy8ZEfezJ6SBgbI8YabWftniy27SH7-7GTxnVY?ext=png",
      "name": "Squirtle",
      "onChain": true,
      "verifyRun": true
    },
    "2": {
      "link": "https://arweave.net/_zkuzDy1gWzebvaiuNe5toQTa9vTLyBCefx9FXww1y8",
      "imageLink": "https://arweave.net/bBbtk20rNbi8Zss2jTYK4qpkR9cjZBTuqkJjnFEk54E?ext=png",
      "name": "Charmander ",
      "onChain": true,
      "verifyRun": true
    }
  },
  "env": "devnet",
  "cacheName": "temp"
}
```
