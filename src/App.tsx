import Navigation from './components/Navigation';
import WalletManager from './components/WalletManager';

function App() {
  return (
    <main className="container mx-auto p-4 font-coinguard">
      <Navigation />
      <h3 className="ml-6 mt-12 text-bold text-6xl mb-8">
        An HD wallet with multi-blockchain support
      </h3>
      <WalletManager />

      {/* <button className="btn btn-primary" onClick={generateNewMnemonic}>
        Generate Wallet
      </button>

      <input
        type="text"
        placeholder="Your Secret Phrase"
        className="input input-bordered w-full max-w-xs"
        value={mnemonic}
      />

      {
        solanaKeys.map(solKeys => (
          <>
            <p>Public Key: {solKeys.publicKey}</p>
            <p>Private Key: {solKeys.privateKey}</p>
          </>
        ))
      } */}
    </main>
  );
}

export default App;
