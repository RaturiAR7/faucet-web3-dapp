import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

const AirDrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0);

  const sendAirDropToUser = async () => {
    try {
      await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      );
    } catch (error) {
      console.log("Error sending airdrop:", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={sendAirDropToUser}>Send Airdrop</button>
    </div>
  );
};

export default AirDrop;
