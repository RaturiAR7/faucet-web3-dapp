import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const AirDrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  console.log("Wallet: ", wallet.publicKey);

  const sendAirDropToUser = async () => {
    console.log(wallet.publicKey);
    await connection.requestAirdrop(wallet.publicKey, 1000000000);
    alert("Airdrop sent to", wallet.publicKey);
  };
  return (
    <div>
      <input type='text' placeholder='Amount' />
      <button onClick={sendAirDropToUser}>Send Airdrop</button>
    </div>
  );
};

export default AirDrop;
