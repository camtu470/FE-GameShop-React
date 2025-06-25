// export interface NFT {
//   id: string;
//   name: string;
//   username: string;
//   handle: string;
//   avatar: string;
//   image: string;
//   lastBid: string;
// }

// export const trendingNFTs: NFT[] = Array.from({ length: 36 }).map((_, i) => ({
//   id: i.toString(),
//   name: `NFT #${i + 1}`,
//   username: "Jon Max",
//   handle: "@jonmax",
//   avatar:
//     "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar02.png",
//   image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img04.jpg",
//   lastBid: (0.005 + i * 0.001).toFixed(3),
// }));


export interface NFT {
  id: string;
  name: string;
  username: string;
  handle: string;
  avatar: string;
  image: string;
  lastBid: string;
  shortdescription: string;
  description: string;
  images: string[];
  rating: number;
  category: string;
  tags: string[];
  sku: string;
  specs: { label: string; value: string }[];
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
  shortdescription:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti, voluptatum error molestiae dolore tempore neque beatae autem doloribus numquam?",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti, voluptatum error molestiae dolore tempore neque beatae autem doloribus numquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti, voluptatum error molestiae dolore tempore neque beatae autem doloribus numquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti, voluptatum error molestiae dolore tempore neque beatae autem doloribus numquam?",
  images: [
    "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img04.jpg",
    "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img05.jpg",
    "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img06.jpg",
  ],
  rating: 0,
  category: "Gaming",
  tags: ["Badge", "Trophy"],
  sku: `DLUPK-${59 + i}P`,
  specs: [
    { label: "General", value: "PS5 Digital Platform" },
    { label: "Technical Information", value: "Qualcomm Snapdragon XR2" },
    { label: "Display", value: "3664 x 1920" },
    { label: "RAM & Storage", value: "8GB/256GB" },
    { label: "Included", value: "PS5 VR Streaming Assistant" },
  ],
}));
