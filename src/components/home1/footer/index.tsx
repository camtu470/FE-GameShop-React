const Footer = () => {
  return (
    <div className="w-full bg-[#151D23] text-[##ADB0BC]">
      <div className="flex gap-10 p-10 ">
        <div className="w-4/12 flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <img src="../images/logo.png" alt="" className="w-16 h-16" />
            <h1 className="text-4xl font-extrabold bg-gradient-to-b from-blue-700 to-green-400 text-transparent bg-clip-text">
              CT<span className="text-white">GAME</span>
            </h1>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consectetur omnis explicabo, consequuntur facere ipsam maxime velit
            dicta commodi repellat.
          </p>
        </div>
        <div className="w-2/12 flex flex-col gap-4">
          <h1 className="text-xl font-bold  ">QUICK LINK</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="">Gamming</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">All NFTs</a>
            </li>
            <li>
              <a href="">Social Network</a>
            </li>
            <li>
              <a href="">Domain Names</a>
            </li>
            <li>
              <a href="">Collectibles</a>
            </li>
          </ul>
        </div>
        <div className="w-2/12 flex flex-col gap-4">
          <h1 className="text-xl font-bold  ">SUPPORTS</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="">Setting & Privacy</a>
            </li>
            <li>
              <a href="">Help & Support</a>
            </li>
            <li>
              <a href="">Live Auctions</a>
            </li>
            <li>
              <a href="">Item Details</a>
            </li>
            <li>
              <a href="">24/7 Supports</a>
            </li>
            <li>
              <a href="">Our News</a>
            </li>
          </ul>
        </div>
        <div className="w-4/12 flex flex-col gap-4">
          <h1 className="text-xl font-bold  ">NEWSLETTER</h1>
          <p className="text-sm">
            Subscribe our newsletter to get our latest update & newsconsectetur
          </p>
          <form action="" className="flex gap-2">
            <input
              type="text"
              placeholder="Get News & Updates"
              className="p-2 px-6 rounded-md outline-none text-sm bg-[#1f2935]"
            />
            <button className="btn p-2 bg-gray-700 text-white rounded text-xs font-bold">
              SEND
            </button>
          </form>
          <div className="flex items-center gap-1 text-[var(--mau-xanh-la)]">
            <p className="font-bold">
              ACTIVE <span className="">WITH US</span>
            </p>
            <i className="fa-solid fa-angles-right text-sm"></i>
          </div>
          <div className="flex gap-4 items-center mt-auto">
            <img
              src="https://themedox.com/mykd/wp-content/uploads/2023/10/social_icon01.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="https://themedox.com/mykd/wp-content/uploads/2023/10/social_icon02.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="https://themedox.com/mykd/wp-content/uploads/2023/10/social_icon03.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="https://themedox.com/mykd/wp-content/uploads/2023/10/social_icon04.png"
              alt=""
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
