// mobile menu which will be hidden for the > md screen

import Link from "next/link";

interface MobMenuProps {
  closeMobMenu: () => void;
}

const MobMenu = ({ closeMobMenu }: MobMenuProps) => {
    const handleMenuItemClick = () => {
        // Close the mobile menu when a menu item is clicked, the state variable is passed in the navbar
        closeMobMenu();
    }
    
  return (
    <div className="fixed inset-y-0 left-0 bg-slate-100 flex flex-col gap-4 items-center w-1/2 z-50 transition-transform duration-300 ease-in-out transform "> 
        {/* inset jinis ta khub kosto kora peyechi lol , it covers the entire view port lol */}
      <button className="absolute top-2 right-2 text-black" onClick={closeMobMenu}>
        ✕
      </button>
      MobMenu
      <Link href="/" onClick={handleMenuItemClick}>Home</Link>
      <Link href="/shop" onClick={handleMenuItemClick}>Shop</Link>
      <Link href="/orders" onClick={handleMenuItemClick}>Orders</Link>
      <Link href="/cart" onClick={handleMenuItemClick}>Cart</Link>
      <Link href="/about" onClick={handleMenuItemClick}>About</Link>
    </div>
  );
};

export default MobMenu;
