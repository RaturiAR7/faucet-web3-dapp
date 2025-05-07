import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

const AirDrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0);

  const sendAirDropToUser = async () => {
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    console.log(
      `Airdrop ${amount / 1000000000} SOLs to: `,
      wallet.publicKey.toString()
    );
  };
  return (
    <div>
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
