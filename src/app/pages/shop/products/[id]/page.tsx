import { trendingNFTs } from "@/data/nft";
import { notFound } from "next/navigation";

type NFTPageProps = {
  params: { id: string };
};

export default function NFTDetailPage({ params }: NFTPageProps) {
  const nft = trendingNFTs.find((n) => n.id === params.id);

  if (!nft) return notFound();

  return (
    <div className="min-h-screen p-8 bg-[#121212] text-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">{nft.name}</h1>
        <img src={nft.image} alt={nft.name} className="rounded-xl w-full" />
        <div className="flex items-center gap-3 mt-4">
          <img
            src={nft.avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{nft.username}</p>
            <p className="text-sm text-gray-400">Last bid: {nft.lastBid} ETH</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-6">
          This is a detailed page for {nft.name}. You can add more NFT data like
          description, owner history, bid history, traits, etc.
        </p>
      </div>
    </div>
  );
}
