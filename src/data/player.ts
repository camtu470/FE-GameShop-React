export interface CompetitionImage {
  image: string;
  description: string;
}

export interface Player {
  id: number;
  name: string;
  role: string;
  image: string;
  team: string;
  wins: number;
  awards: string[];
  bio: string;
  introduction: string;
  competitionImages: CompetitionImage[];
  gameGenres: string[];
  strengths: string[];
  strengthDescriptions: string;
}

export const players: Player[] = [
  {
    id: 1,
    name: "Killed Master",
    role: "Blockchain Expert",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team01.png",
    team: "CryptoWarriors",
    wins: 42,
    awards: ["Best Strategist 2023", "MVP Blockchain Cup 2022"],
    bio: "Killed Master là chuyên gia về công nghệ blockchain, nổi tiếng với chiến thuật chơi sâu sắc và khả năng phân tích cao.",
    introduction:
      "Một người tiên phong trong lĩnh vực blockchain gaming, Killed Master đã góp phần đưa đội CryptoWarriors trở thành một trong những tên tuổi lớn của các giải đấu chiến thuật công nghệ cao.",
    competitionImages: [
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details.jpg",
        description:
          "Cuộc thi Blockchain Arena 2023 nơi Killed Master giành danh hiệu MVP với chiến thuật đột phá.",
      },
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details01.jpg",
        description:
          "Hình ảnh tại giải CryptoWar Champion League 2022 khi CryptoWarriors đăng quang ngôi vô địch.",
      },
      {
        image:
          "https://karosatuklik.com/wp-content/uploads/2022/06/gamer-1.jpg",
        description:
          "Tham dự FPS Global Tournament 2023 – giành giải 'Đội tổ chức tốt nhất'.",
      },
    ],
    gameGenres: ["Strategy", "Blockchain RPG", "Battle Arena"],
    strengths: ["Chiến lược", "Lãnh đạo", "Kỹ năng phân tích"],
    strengthDescriptions:
      "Killed Master có khả năng xây dựng chiến thuật sâu sắc, phân tích đối thủ chính xác và dẫn dắt đội hình thi đấu đạt hiệu quả tối ưu.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Frontend Developer",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team02.png",
    team: "PixelWizards",
    wins: 25,
    awards: ["UI Genius 2021", "Frontend Master 2022"],
    bio: "Jane là nhà phát triển frontend tài năng với gu thiết kế hiện đại và khả năng phối hợp nhóm tuyệt vời.",
    introduction:
      "Jane đem đến sự sáng tạo và tinh tế cho mọi dự án cô tham gia. Cô không chỉ là một lập trình viên mà còn là một nghệ sĩ giao diện.",
    competitionImages: [
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details01.jpg",
        description:
          "Sự kiện GameDev Frontend Challenge 2022 – nơi Jane đoạt giải thiết kế giao diện đẹp nhất.",
      },
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details02.jpg",
        description:
          "Cuộc thi GameFlow UX 2023 nơi John giành giải UX sáng tạo nhất.",
      },
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details02.jpg",
        description:
          "Cuộc thi 'Pixel Power 2021' với màn trình diễn UX gây ấn tượng mạnh.",
      },
      {
        image:
          "https://karosatuklik.com/wp-content/uploads/2022/06/gamer-1.jpg",
        description:
          "Tham dự FPS Global Tournament 2023 – giành giải 'Đội tổ chức tốt nhất'.",
      },
    ],
    gameGenres: ["Casual", "Platformer", "Creative Games"],
    strengths: ["Thiết kế giao diện", "UX", "Phối hợp nhóm"],
    strengthDescriptions:
      "Jane nổi bật với gu thẩm mỹ tinh tế, khả năng thiết kế trải nghiệm người dùng cuốn hút và giao tiếp nhóm linh hoạt.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "UI/UX Designer",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team03.png",
    team: "DesignDominators",
    wins: 31,
    awards: ["Creative Mind Award", "UX Star 2023"],
    bio: "John nổi bật trong việc thiết kế trải nghiệm người dùng mượt mà, giúp tăng hiệu suất game.",
    introduction:
      "John là người đứng sau những thiết kế UX mang tính đột phá cho nhiều tựa game hàng đầu. Anh là đầu não sáng tạo của DesignDominators.",
    competitionImages: [
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details02.jpg",
        description:
          "Cuộc thi GameFlow UX 2023 nơi John giành giải UX sáng tạo nhất.",
      },
      {
        image:
          "https://themedox.com/mykd/wp-content/uploads/2023/10/team_details02.jpg",
        description:
          "Ảnh tại sự kiện 'Puzzle UX Hackathon' với phần trình bày được đánh giá cao.",
      },
    ],
    gameGenres: ["Simulation", "Puzzle", "Mobile Games"],
    strengths: ["UI/UX", "Trải nghiệm người dùng", "Thẩm mỹ thiết kế"],
    strengthDescriptions:
      "John có con mắt nghệ thuật tinh tường, luôn tạo ra giao diện dễ sử dụng và hiệu quả, đặc biệt trong các thể loại mobile.",
  },
  {
    id: 4,
    name: "Emily Clark",
    role: "Project Manager",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team04.png",
    team: "EliteOps",
    wins: 50,
    awards: ["Top Leader 2022", "Best Team Organizer"],
    bio: "Emily là người lãnh đạo tuyệt vời, quản lý dự án và đội nhóm với khả năng điều phối chiến lược hiệu quả.",
    introduction:
      "Emily là thủ lĩnh của EliteOps – một đội game đình đám chuyên về các thể loại MOBA và FPS. Khả năng lãnh đạo của cô đã giúp đội giành hàng loạt chiến thắng vang dội.",
    competitionImages: [
      {
        image:
          "https://symbols.vn/wp-content/uploads/2021/11/Anh-Game-Thu-Free-Fire-dang-tranh-tai.jpg",
        description:
          "Ảnh tại giải MOBA Legends 2022, nơi Emily dẫn dắt EliteOps đến chiến thắng thuyết phục.",
      },
      {
        image:
          "https://karosatuklik.com/wp-content/uploads/2022/06/gamer-1.jpg",
        description:
          "Tham dự FPS Global Tournament 2023 – giành giải 'Đội tổ chức tốt nhất'.",
      },
    ],
    gameGenres: ["Action", "MOBA", "FPS"],
    strengths: ["Quản lý dự án", "Kỹ năng lãnh đạo", "Chiến thuật nhóm"],
    strengthDescriptions:
      "Emily có khả năng quản lý nhóm linh hoạt, ra quyết định nhanh và xây dựng chiến lược tổng thể hiệu quả cho toàn đội.",
  },
  {
    id: 5,
    name: "Emily Clark",
    role: "Project Manager",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team04.png",
    team: "EliteOps",
    wins: 50,
    awards: ["Top Leader 2022", "Best Team Organizer"],
    bio: "Emily là người lãnh đạo tuyệt vời, quản lý dự án và đội nhóm với khả năng điều phối chiến lược hiệu quả.",
    introduction:
      "Emily là thủ lĩnh của EliteOps – một đội game đình đám chuyên về các thể loại MOBA và FPS. Khả năng lãnh đạo của cô đã giúp đội giành hàng loạt chiến thắng vang dội.",
    competitionImages: [
      {
        image:
          "https://symbols.vn/wp-content/uploads/2021/11/Anh-Game-Thu-Free-Fire-dang-tranh-tai.jpg",
        description:
          "Ảnh tại giải MOBA Legends 2022, nơi Emily dẫn dắt EliteOps đến chiến thắng thuyết phục.",
      },
      {
        image:
          "https://karosatuklik.com/wp-content/uploads/2022/06/gamer-1.jpg",
        description:
          "Tham dự FPS Global Tournament 2023 – giành giải 'Đội tổ chức tốt nhất'.",
      },
    ],
    gameGenres: ["Action", "MOBA", "FPS"],
    strengths: ["Quản lý dự án", "Kỹ năng lãnh đạo", "Chiến thuật nhóm"],
    strengthDescriptions:
      "Emily có khả năng quản lý nhóm linh hoạt, ra quyết định nhanh và xây dựng chiến lược tổng thể hiệu quả cho toàn đội.",
  },
  {
    id: 6,
    name: "Emily Clark",
    role: "Project Manager",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team04.png",
    team: "EliteOps",
    wins: 50,
    awards: ["Top Leader 2022", "Best Team Organizer"],
    bio: "Emily là người lãnh đạo tuyệt vời, quản lý dự án và đội nhóm với khả năng điều phối chiến lược hiệu quả.",
    introduction:
      "Emily là thủ lĩnh của EliteOps – một đội game đình đám chuyên về các thể loại MOBA và FPS. Khả năng lãnh đạo của cô đã giúp đội giành hàng loạt chiến thắng vang dội.",
    competitionImages: [
      {
        image:
          "https://symbols.vn/wp-content/uploads/2021/11/Anh-Game-Thu-Free-Fire-dang-tranh-tai.jpg",
        description:
          "Ảnh tại giải MOBA Legends 2022, nơi Emily dẫn dắt EliteOps đến chiến thắng thuyết phục.",
      },
      {
        image:
          "https://karosatuklik.com/wp-content/uploads/2022/06/gamer-1.jpg",
        description:
          "Tham dự FPS Global Tournament 2023 – giành giải 'Đội tổ chức tốt nhất'.",
      },
    ],
    gameGenres: ["Action", "MOBA", "FPS"],
    strengths: ["Quản lý dự án", "Kỹ năng lãnh đạo", "Chiến thuật nhóm"],
    strengthDescriptions:
      "Emily có khả năng quản lý nhóm linh hoạt, ra quyết định nhanh và xây dựng chiến lược tổng thể hiệu quả cho toàn đội.",
  },
];
