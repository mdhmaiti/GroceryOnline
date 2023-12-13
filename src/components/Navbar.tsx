// the navbar consist if the Home, shop, orders, cart, and about and maybe a search option .
"use client"
import Link from "next/link";
import MobMenu from "./MobMenu";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    const [isMobMenuOpen, setMobMenuOpen] = useState(false);
    const toggleMobMenu = () => {
        setMobMenuOpen(!isMobMenuOpen);
      };
    
  return (
    <nav className="bg-slate-100 p-4">
      <div className=" flex justify-between items-center">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/shop">Shop</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="md:hidden">
        <Button
            variant="outline"
            onClick={toggleMobMenu}
          >
            ☰
          </Button>
          {isMobMenuOpen && <MobMenu closeMobMenu={() => setMobMenuOpen(false)} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
