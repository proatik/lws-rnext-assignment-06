import Link from "next/link";
import Image from "next/image";

// icons/images.
import MenuIcon from "@/public/svg/menu.svg";
import AvatarIcon from "@/public/svg/avatar.svg";
import LwsLogo from "@/public/lws-logo-black.svg";
import CartIcon from "@/public/svg/shopping-cart.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-5 mx-auto lg:w-10/12 max-w-7xl lg:py-6">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src={MenuIcon}
            alt="menu icon"
            className="relative w-5 h-5 lg:hidden"
          />

          <Link href="/">
            <Image
              src={LwsLogo}
              alt="lws logo"
              className="relative h-10 w-[119px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={AvatarIcon}
          alt="login account avatar"
          className="relative hidden lg:block w-[18px] h-[18px]"
        />

        <Image
          src={CartIcon}
          alt="shopping cart icon"
          className="relative block w-5 h-5"
        />
      </div>
    </nav>
  );
};

export default Navbar;
