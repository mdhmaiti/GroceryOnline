// the navbar consist if the Home, shop, orders, cart, and about and maybe a search option .

import Link from "next/link";
import MobMenu from "./MobMenu";
import { Button } from "./ui/button";
import { ShoppingCart, ShoppingBag, Home, Book, Package } from "lucide-react";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { ModeToggle } from "./ui/darkToggle";
import { AccountButton } from "./accountButton";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

const navItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Shop", url: "/shop" },
  { id: 3, title: "Orders", url: "/orders" },
  { id: 4, title: "Cart", url: "/cart" },
  { id: 5, title: "About", url: "/about" },
];

const Navbar = () => {
  return (
    
    <nav className=" p-5 w-full fixed top-0 left-0 z-40">
      <div className=" flex justify-between items-center w-full">
        <div className=" flex flex-row items-center space-x-1 w-full ">
          <Link href="/" className="flex flex-row  items-center space-x-1">
            <Image
              className="rounded-full "
              src="/MedhaPersonalLogo.png"
              height={40}
              width={40}
              priority={true}
              alt="Logo"
            />
            <span className={` text-xl tracking-widest hover:text-emerald-400 glow ${pacifico.className}`}>Grocery online</span>
          </Link>
          <ModeToggle/>
           <AccountButton />
        </div>
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <Link
              className=" text-lg font-medium  "
              href={item.url}
              key={item.id}
            >
              <div className="flex flex-row  justify-center items-center space-x-5">
                {item.title === "Cart" && <ShoppingCart className='glow'/>}
                {item.title === "Shop" && <ShoppingBag className='glow'/>}
                {item.title === "Home" && <Home className='glow'/>}
                {item.title === "About" && <Book className='glow' />}
                {item.title === "Orders" && <Package className='glow'/> }
                <Button
                  className=" text-xl font-medium shadow-lg shadow-emerald-500/50 "
                  variant="ghost"
                >
                  {item.title}
                </Button>
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:hidden  ">
          <MobMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
