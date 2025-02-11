import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#0f0f0f] border-b-2 border-blue flex flex-row items-center justify-center lg:justify-between p-4 lg:py-2 lg:py-8">
      <h1 className="julius text-2xl font-bold text-center">Linkfolio</h1>
      <nav>
        <ul className="hidden lg:flex quicksand justify-center text-[#474747] space-x-4">
          <li>
            <Link href="/" className="hover:text-[#fff]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#fff]">
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/deepak2004/"
              className="hover:text-[#fff]"
            >
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className="hover:text-[#fff]">
              Login/Signup
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
