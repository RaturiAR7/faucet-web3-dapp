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
    <ConnectionProvider
      endpoint={`https://solana-devnet.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`}
    >
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <AirDrop />
          <ShowSolBalance />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
