import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
const ShowSolBalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    const getSolBalance = async () => {
      try {
        if (wallet.publicKey) {
          const balance = await connection.getBalance(wallet.publicKey);
          setBalance(balance / 1000000000);
        }
      } catch (error) {
        console.log("Error fetching balance:", error);
      }
    };
    getSolBalance();
  }, [wallet.publicKey, connection]);
  return (
    <div>
      <h4>
        {wallet.publicKey && balance !== null
          ? `You have ${balance} Sols`
          : "Not connected to a wallet"}
      </h4>
    </div>
  );
};

export default ShowSolBalance;
