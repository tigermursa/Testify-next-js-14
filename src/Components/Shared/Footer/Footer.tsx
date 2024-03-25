const Footer = () => {
  return (
    <footer>
      <div className="bg-black flex justify-between items-center px-5 text-gray-300 h-[40px]">
        <div className="text-xl font-semibold">Copyright 2024</div>
        <div>
          <ul className="flex gap-5 cursor-pointer">
            <li className="hover:text-white">Services</li>
            <li className="hover:text-white">Policy</li>
            <li className="hover:text-white">Our Ratings</li>
            <li className="hover:text-white">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
