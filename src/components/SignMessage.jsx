import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { useState } from "react";

const SignMessage = () => {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");

  const handleSignMessage = async () => {
    try {
      if (!publicKey) {
        throw new Error("Wallet not connected");
      }
      if (!signMessage) {
        throw new Error("Wallet does not support message signing");
      }
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
        throw new Error("Signature verification failed");
      else {
        alert("Signature verified successfully!: " + bs58.encode(signature));
      }
    } catch (error) {
      console.log("Error signing message:", error);
    }
  };

  return (
    <div>
      <h1>Sign a Message</h1>
      <div>
        <input
          type='text'
          placeholder='Message'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSignMessage}>Sign Message</button>
      </div>
    </div>
  );
};

export default SignMessage;
