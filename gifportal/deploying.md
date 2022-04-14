# Deploying app to devnet

## set url to devnet
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ solana config set --url devnet
Config File: /home/jeet/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /home/jeet/.config/solana/devnet.json 
Commitment: confirmed 
```

## Check what network we are using 
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ solana config get
Config File: /home/jeet/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /home/jeet/.config/solana/devnet.json 
Commitment: confirmed 
```

## airdrop SOL
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ solana airdrop 2 --url devnet
Requesting airdrop of 2 SOL

Signature: 4Vj6HveFNtLtmajg3nRpbvZAFFeF36u4ygKUtXyS3DQwPxYJjuEZexfs6pidXjkh5ksdWKFgWR4KAvLNgWraZuUr

3.974605158 SOL
```

## Change settings in anchor.toml
refer the toml

## build
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ anchor build
BPF SDK: /home/jeet/.local/share/solana/install/releases/1.10.6/solana-release/bin/sdk/bpf
cargo-build-bpf child: rustup toolchain list -v
cargo-build-bpf child: cargo +bpf build --target bpfel-unknown-unknown --release
    Finished release [optimized] target(s) in 0.10s
cargo-build-bpf child: /home/jeet/.local/share/solana/install/releases/1.10.6/solana-release/bin/sdk/bpf/dependencies/bpf-tools/llvm/bin/llvm-readelf --dyn-symbols /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal.so

To deploy this program:
  $ solana program deploy /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal.so
The program address will default to this keypair (override with --program-id):
  /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal-keypair.json
```

this will create a new build with new program ID

## Access the program ID
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ solana address -k target/deploy/gifportal-keypair.json
BdNmQ5EcuZQt3WfR6L6oRje8WhFH9pSjLnhnhUkapdy9
```
copy this go to lib.rs and replace the content of declare_id with the one above. Do the same in Anchor.toml

## Run Anchor build after replacing the program ID's
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ anchor build
BPF SDK: /home/jeet/.local/share/solana/install/releases/1.10.6/solana-release/bin/sdk/bpf
cargo-build-bpf child: rustup toolchain list -v
cargo-build-bpf child: cargo +bpf build --target bpfel-unknown-unknown --release
   Compiling gifportal v0.1.0 (/home/jeet/SolanaUdemy/gifportal/programs/gifportal)
    Finished release [optimized] target(s) in 0.90s
cargo-build-bpf child: /home/jeet/.local/share/solana/install/releases/1.10.6/solana-release/bin/sdk/bpf/scripts/strip.sh /home/jeet/SolanaUdemy/gifportal/target/bpfel-unknown-unknown/release/gifportal.so /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal.so
cargo-build-bpf child: /home/jeet/.local/share/solana/install/releases/1.10.6/solana-release/bin/sdk/bpf/dependencies/bpf-tools/llvm/bin/llvm-readelf --dyn-symbols /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal.so

To deploy this program:
  $ solana program deploy /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal.so
The program address will default to this keypair (override with --program-id):
  /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal-keypair.json
```

## Deploy to devnet
```
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ anchor deploy --provider.cluster devnet
Deploying workspace: https://api.devnet.solana.com
Upgrade authority: /home/jeet/.config/solana/id.json
Deploying program "gifportal"...
Program path: /home/jeet/SolanaUdemy/gifportal/target/deploy/gifportal.so...
Program Id: BdNmQ5EcuZQt3WfR6L6oRje8WhFH9pSjLnhnhUkapdy9

Deploy success
jeet@Jeet-ROG:~/SolanaUdemy/gifportal$ 
```

https://explorer.solana.com/address/BdNmQ5EcuZQt3WfR6L6oRje8WhFH9pSjLnhnhUkapdy9?cluster=devnet