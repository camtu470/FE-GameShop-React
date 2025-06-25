// server
import { trendingNFTs } from "@/data/nft";
import { notFound } from "next/navigation";
import NFTDetailClient from "./NFTDetailClient";

type NFTPageProps = {
  params: { id: string };
};

export default function NFTDetailPage({ params }: NFTPageProps) {
  const nft = trendingNFTs.find((n) => n.id === params.id);
  if (!nft) return notFound();

  return <NFTDetailClient nft={nft} />;
}
