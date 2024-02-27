import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
    const session = {}
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 fleStart gap-10">
        <Link href="/">
          <Image src="./logo.svg" width={115} height={43} alt="Logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((item) => (
            <Link href={item.href} key={item.key}>
              {item.text}
            </Link>
          ))}
        </ul>
        
      </div>

      <div className="flexCenter gap-4">{session ? <>
      userPHoto
      <Link href="/create-project" >Share Project </Link></> : <AuthProvider />}</div>
    </nav>
  );
};

export default Navbar;
