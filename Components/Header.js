import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div className="border-b-2 flex-row">
      <h1 className="py-4 px-4 font-bold text-3xl">Decentralised Lottery</h1>
      <ConnectButton moralisAuth={false}></ConnectButton>
    </div>
  );
}
