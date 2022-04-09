import React, { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import CandyMachine from "./CandyMachine"; //get CandyMachine from index.js inside the CandyMachine folder where we set the CandyMachine

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
	const [walletAddress, setWalletAddress] = useState(null); //set default value as Null 
	//check if wallet is connected
	const checkIfWalletIsConnected = async() => {
		try {
			const {solana} = window;
			if (solana) {
				if (solana.isPhantom) {
					console.log('Phantom wallet found');
				//check if user has given perms to access wallet
				const response = await solana.connect({
					onlyIfTrusted: true,
				});
				console.log(response.publicKey.toString());
				setWalletAddress(response.publicKey.toString());
				}
			} else {
				alert('Get Phantom wallet');
			}
		} catch(err) {
			console.error(err);
		}
	};

	//used to connect a wallet if user is not already connected
	const connectWallet = async() => {
		const {solana} = window;
		if (solana) {
			const response = await solana.connect();
			console.log('Connected with public key :' + response.publicKey.toString());
			setWalletAddress(response.publicKey.toString());
		}
	};
	const renderNotConnectedContainer = () => (
		<button className="cta-button connect-wallet-button" onClick={connectWallet}>Connect wallet</button>
	);

	useEffect(() => {
		const onLoad = async() => {
			await checkIfWalletIsConnected();
		}
		window.addEventListener('load', onLoad);
		//to remove the event listener once page is closed
		return () => window.removeEventListener('load', onLoad);
	}, []);

	return (
		<div className="App">
			<div className="container">
				<div className="header-container">
					<p className="header">🍭 Candy Drop</p>
					<p className="sub-text">NFT drop machine with fair mint</p>
					{!walletAddress && renderNotConnectedContainer()}
				</div>
				{walletAddress && (<CandyMachine walletAddress={window.solana}/>)}
				<div className="footer-container">
					<img
						alt="Twitter Logo"
						className="twitter-logo"
						src={twitterLogo}
					/>
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`Adapted from @${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
};

export default App;
