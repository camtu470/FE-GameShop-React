// data/nft.ts

export interface NFT {
  id: string;
  name: string;
  username: string;
  handle: string;
  avatar: string;
  image: string;
  lastBid: string;
}

export const trendingNFTs: NFT[] = Array.from({ length: 36 }).map((_, i) => ({
  id: i.toString(),
  name: `NFT #${i + 1}`,
  username: "Jon Max",
  handle: "@jonmax",
  avatar:
    "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar02.png",
  image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img04.jpg",
  lastBid: (0.005 + i * 0.001).toFixed(3),
}));
