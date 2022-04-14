const anchor = require('@project-serum/anchor');

const main = async() => {
    console.log("starting tests ...");


    const provider = anchor.Provider.env();
    anchor.setProvider(provider);
    const program = anchor.workspace.Gifportal;

    const baseAccount = anchor.web3.Keypair.generate(); //this is to generate some base accounts to be used for testing 
    const tx = await program.rpc.startStuffOff({
        accounts: {
            baseAccount: baseAccount.publicKey,
            user: provider.wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        },
        signers: [baseAccount]
    });
    console.log("Transaction signature", tx);
    let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('GIF Count ', account.totalGifs.toString());

    await program.rpc.addGif("testGifLink.gif",{
        accounts: {
            baseAccount: baseAccount.publicKey,
            user: provider.wallet.publicKey
        },
    });
    account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('GIF Count ', account.totalGifs.toString());
    console.log('GIF lisrt ', account.gifList);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0)
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

runMain();