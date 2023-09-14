import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function NavBar(){
  // const pathname= usePathname();
    return (
      <div className="bg-[#f6f6f6f6]">
        <nav className=" max-w-6xl mx-auto font-semibold p-4">
          <ul className="flex justify-center gap-6 ">
            <Link href={'/'} className="text-primary">Home</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/about-us'}>About Us</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
            <Link href={'/blogs'}>Blogs</Link>
            <Link href={'/articles'}>Articles</Link>
          </ul>
        </nav>

      </div>
    )
  }
  
  