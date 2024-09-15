import { mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { Keypair } from '@solana/web3.js';

type tSolanaWallet = {
  mnemonic: string;
  index: number;
  setSolanaKeys: any;
};

const SolanaWallet = async ({
  mnemonic,
  index,
  setSolanaKeys,
}: tSolanaWallet) => {
  const seed = await mnemonicToSeed(mnemonic);
  const path = `m/44'/501'/${index}'/0'`;
  const derivedSeed = derivePath(path, seed.toString('hex')).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keyPair = Keypair.fromSecretKey(secret);

  const handleGenerateSolanaWallet = () =>
    setSolanaKeys((prev: [string]) => [...prev, {
        publicKey: keyPair.publicKey,
        privateKey: keyPair.secretKey
    }]);
  return (
    <>
      <button className="btn btn-neutral" onClick={handleGenerateSolanaWallet}>
        Add Wallet +
      </button>
    </>
  );
};

export default SolanaWallet;
