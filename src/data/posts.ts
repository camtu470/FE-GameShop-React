// data/posts.ts
export type Section =
  | { type: "introduce"; content: string }
  | { type: "text"; title?: string; content: string }
  | { type: "image"; src: string; alt?: string }
  | {
      type: "text-image";
      title?: string;
      content: string;
      image?: { src: string; alt?: string };
    };

export type Post = {
  id: number;
  title: string;
  author: string;
  date: string;
  comments: number;
  describe: string;
  image: string;
  sections: Section[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "The NFT metaverse Alien Worlds",
    author: "ABC",
    date: "October 24, 2023",
    comments: 3,
    describe:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
    image:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post01.jpg",
    sections: [
      {
        type: "introduce",
        content:
          "Gioi thiệu Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
      },
      {
        type: "text",
        title: "Tieu de 1 Lorem, ipsum dolor sit amet consectetur adipisicing",
        content:
          "Content tiêu đề 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
      },
      {
        type: "image",
        src: "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post01.jpg",
        alt: "Image description 1",
      },
      {
        type: "text-image",
        title: "CONTENT 2 Lorem, ipsum dolor sit amet consectetur adipisicing",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
        image: {
          src: "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post01.jpg",
          alt: "Image description 2",
        },
      },
      {
        type: "text",
        title: "Tieu de 3 Lorem, ipsum dolor sit amet consectetur adipisicing",
        content:
          "Content tiêu đề 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
      },
      {
        type: "text",
        title: "Tieu de 4 Lorem, ipsum dolor sit amet consectetur adipisicing",
        content:
          "Content tiêu đề 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
      },
      {
        type: "text-image",
        title: "CONTENT 2 Lorem, ipsum dolor sit amet consectetur adipisicing",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, facilis natus pariatur voluptas delectus qui, aliquam similique quod ab quo maiores voluptate iusto ea temporibus neque fugit aspernatur deleniti enim maxime officiis est! Corrupti labore maiores nobis vel accusamus recusandae blanditiis, vitae assumenda non laboriosam odio ipsa! Excepturi, cum.",
        image: {
          src: "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post01.jpg",
          alt: "Image description 2",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Exploring Crypto Gaming Trends",
    author: "XYZ",
    date: "October 18, 2023",
    comments: 5,
    describe: "Excepteur sint occaecat cupidatat non proident...",
    image:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post02.jpg",
    sections: [
      {
        type: "text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    ],
  },
];
