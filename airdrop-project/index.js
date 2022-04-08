//Import required Solana packages
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair, //allows to create a new wallet
    LAMPORTS_PER_SOL
} = require("@Solana/web3.js");

const wallet = new Keypair(); //This wallet is used to airdrop solana

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

//print public and secret key
// console.log(publicKey);
// console.log(secretKey);

//view balance of the wallet
const getWalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed'); //connect to dev net there is also 'testnet'
        const walletBalance = await connection.getBalance(publicKey);
        console.log('Wallet balance : ' +walletBalance);
    } catch (err) {
        console.error(err);
    }
}

//function to airdrop sol into the wallet
const airDropSol = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed'); 
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 *  LAMPORTS_PER_SOL); //number of SOL is in Lamport which is the smallest unit of SOL
        await connection.confirmTransaction(fromAirDropSignature);

    } catch (err) {
        console.error(err);
    }
}

const main = async() => {
    await getWalletBalance();
    console.log('airdropping 2 sol');
    await airDropSol();
    await getWalletBalance();
}

main();