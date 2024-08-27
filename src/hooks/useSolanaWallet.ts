import { mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { Keypair } from '@solana/web3.js';
import { useState } from 'react';

type tSolanaWallet = {
  mnemonic: string;
};


function useSolanaWallet({ mnemonic }: tSolanaWallet) {
  const [solanaKeys, setSolanaKeys] = useState<any>([]);

  const generateSolanaWallet = async (index: number) => {
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${index}'/0'`;
    const derivedSeed = derivePath(path, seed.toString('hex')).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keyPair = Keypair.fromSecretKey(secret);

    setSolanaKeys((prev: any) => [...prev, {
      publicKey: keyPair.publicKey.toBase58(),
      privateKey: keyPair.secretKey.toString()
    }])
  };

  return {
    solanaKeys,
    generateSolanaWallet,
  };
}

export default useSolanaWallet;
