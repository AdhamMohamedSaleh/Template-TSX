import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-primary-foreground z-50 shadow">
      <div className="container relative mx-auto flex items-center justify-between py-4 px-4">
        
        <div>
          <Link href="/" className="hover:text-blue-600 font-black">MySite</Link>
        </div>

        <div className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div><ModeToggle /></div>
          <div className="font-bold">Sign Up</div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;