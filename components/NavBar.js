import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar(){
  const pathname= usePathname();
  const isLinkActive = (href) => {
    return pathname === href ? 'text-primary' : '';
  };
    return (
      <div className="bg-[#f6f6f6f6]">
        <nav className=" max-w-6xl mx-auto font-semibold p-4">
          <ul className="flex justify-center gap-6 ">
            <Link href={'/'} className={isLinkActive('/')}>Home</Link>
            <Link href={'/services'} className={isLinkActive('/services')}>Services</Link>
            <Link href={'/about-us'} className={isLinkActive('/about-us')}>About Us</Link>
            <Link href={'/contact-us'} className={isLinkActive('/contact-us')}>Contact Us</Link>
            <Link href={'/blogs'} className={isLinkActive('/blogs')}>Blogs</Link>
          </ul>
        </nav>

      </div>
    )
  }
  
  