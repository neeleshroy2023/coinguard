import { useRef, useState } from 'react';
import { generateMnemonic } from 'bip39';
import ethereumLogo from '../assets/ethereum.png'
import solanaLogo from '../assets/solana.png'

function WalletManager() {
  const [mnemonic, setMnemonic] = useState<string>('');
  const blockchains = [
    {
      name: 'Solana',
      icon: solanaLogo
    },

    {
      name: 'Ethereum',
      icon: ethereumLogo,
    },
  ];

  const generateNewMnemonic = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  };

  const showModal = () => {
    const id: any = document.getElementById('blockchain_modal')
    id.showModal()
  }

  return (
    <>
      <button className="btn btn-primary" onClick={showModal}>+ Add a Wallet</button>
      <dialog id="blockchain_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Select a blockchain</h3>
          <div className='flex gap-3 mt-6 justify-center'>
          {blockchains.map((chain) => (
            <div className="card bg-base-100 w-40 shadow-xl flex justify-center items-center cursor-pointer">
              <figure>
                <img src={chain.icon}/>
              </figure>
              <div className="card-body">
                <div className="card-title">{chain.name}</div>
              </div>
            </div>
          ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default WalletManager;
