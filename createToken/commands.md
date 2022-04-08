# Solana and SPL commands

## create wallet
```
jeet@Jeet-ROG:~/SolanaUdemy$ solana-keygen pubkey
7ibi7ZC4kVDygDy7bi4Q8oPz9F4iC6nKmvQKX9RJLYBy
```

## balance of wallet
```
jeet@Jeet-ROG:~/SolanaUdemy$ solana balance --url devnet
0 SOL
```

## Airdrop SOL to wallet
```
jeet@Jeet-ROG:~/SolanaUdemy$ solana airdrop 2 7ibi7ZC4kVDygDy7bi4Q8oPz9F4iC6nKmvQKX9RJLYBy --url devnet
Requesting airdrop of 2 SOL

Signature: TDP8sbsWLxTA8wxtfSWYknsngZachRM8fwhoxgNzX1i3moLWUSipx9MwTuF1jAApshz4Rfi7fxkBYYhUVjcioQ9

2 SOL
```

## Create new token
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token create-token --url devnet
Creating token BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz

Signature: 81wYQZRqgqKkpu9qsjb8wKsDVs9L7wEnN8hQNoQH42zt3j6bX3BsPX3b3X32z5FffFzgCDqnWWmxFafeWQ8PRaj
```

## Create new account for token
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token create-account BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz --url devnet
Creating account GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8

Signature: 574yxZadJwP7TqfKkGyiHQeMUNKFmSamVo7mgTZfefBPjYfdKpQYkvUE9Zv6Qh6tTUb9mk4J3UYqnoYHyqo919H9
```
## Get balance on account
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token balance BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz --url devnet
0
```

## Mint tokens
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token mint BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz 1000 --url devnet
Minting 1000 tokens
  Token: BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz
  Recipient: GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8

Signature: 22gF6xn4dSTQ1cG9s8TsxCCS4xkC1fv33ppUwbuPy51habTtZbQRjDBN9WYvEAwWmgrpqtSdCZL1TkKC27Xi5XuN
```

## Get total supply of token
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token supply BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz --url devnet
1000
```

## Deauthorize your minitng capabilities
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token authorize BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz mint --disable --url devnet
Updating BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz
  Current mint authority: 7ibi7ZC4kVDygDy7bi4Q8oPz9F4iC6nKmvQKX9RJLYBy
  New mint authority: disabled

Signature: fnqqzoo5wY5LVqNTCZXoYMPBmFhD8AVnsPjKKgPf6RcZPT56EXWNe8qH6N6Mk7EqCZzjNUfFANGdPfbZDDirVLM
```

## Burn tokens
Uses account address instead of token
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token burn GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8 100 --url devnet
Burn 100 tokens
  Source: GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8

Signature: eCfD68KX21cFHBxeadtKHQfcAGPeEcKSqt1DUuYUVjwaXu6XvMSRXPnzbB82AUzG1kyrJ45g7s1i46L2JWbx7Gk
```

## Transfer tokens from one wallet to another
```
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token transfer BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz 200 Eye7Hohgvdx2EiC5A81Y2dTFc8JhNNZ9RTnaXdVw85Ph --url devnet
Transfer 200 tokens
  Sender: GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8
  Recipient: Eye7Hohgvdx2EiC5A81Y2dTFc8JhNNZ9RTnaXdVw85Ph
Error: The recipient address is not funded. Add `--allow-unfunded-recipient` to complete the transfer 
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token transfer BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz 200 Eye7Hohgvdx2EiC5A81Y2dTFc8JhNNZ9RTnaXdVw85Ph --url devnet --allow-unfunded-recipient
Transfer 200 tokens
  Sender: GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8
  Recipient: Eye7Hohgvdx2EiC5A81Y2dTFc8JhNNZ9RTnaXdVw85Ph
  Recipient associated token account: 2zYw8FPetQpzu5HiySXET3a8jP5u4acfgtDnDUmjvTmT
Error: Recipient's associated token account does not exist. Add `--fund-recipient` to fund their account
jeet@Jeet-ROG:~/SolanaUdemy/createToken$ spl-token transfer BpRRNN8TegUFKrT4SG41uBsTzX7sGoFDz4WNh1Pyx5hz 200 Eye7Hohgvdx2EiC5A81Y2dTFc8JhNNZ9RTnaXdVw85Ph --url devnet --allow-unfunded-recipient --fund-recipient
Transfer 200 tokens
  Sender: GbGMXyCVrN6bGQTZ44xx7higyJYqxu8xXDsEsR5dxBN8
  Recipient: Eye7Hohgvdx2EiC5A81Y2dTFc8JhNNZ9RTnaXdVw85Ph
  Recipient associated token account: 2zYw8FPetQpzu5HiySXET3a8jP5u4acfgtDnDUmjvTmT
  Funding recipient: 2zYw8FPetQpzu5HiySXET3a8jP5u4acfgtDnDUmjvTmT (0.00203928 SOL)

Signature: 4hxp2JBn3VywpuENRz1jWP9sSGqGYCFP5Dpd4aw8XNgUa9jn2BbRWrMRjmFBPHxy33Yfxs9HHqyZuoGbXSuKV79S
```