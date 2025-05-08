import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import AirDrop from "./components/AirDrop";
import ShowSolBalance from "./components/ShowSolBalance";

function App() {
  ///Create own RPC url
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <h1>Solana Faucet App</h1>
        <WalletModalProvider>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          <AirDrop />
          <ShowSolBalance />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
