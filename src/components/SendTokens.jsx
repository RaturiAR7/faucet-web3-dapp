import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

const SendTokens = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const sendTokens = async () => {
    try {
      const transaction = new Transaction();
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(receiverAddress),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
      await wallet.sendTransaction(transaction, connection);
      alert(`Sent ${amount} SOLs to ${receiverAddress}`);
    } catch (error) {
      console.log("Error sending tokens:", error);
    }
  };
  return (
    <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
      <input
        type='text'
        placeholder='To'
        onChange={(e) => {
          setReceiverAddress(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Amount'
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={sendTokens}>Send Sol's</button>
    </div>
  );
};

export default SendTokens;
