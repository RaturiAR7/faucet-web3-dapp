import { useWallet } from "@solana/wallet-adapter-react";

const AirDrop = () => {
  const wallet = useWallet();
  return (
    <div>
      <input type='text' placeholder='Amount' />
      <button>Send Airdrop</button>
    </div>
  );
};

export default AirDrop;
