import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 fleStart gap-10">
        <Link href="/">
          <Image src="./logo.svg" width={115} height={43} alt="Logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session.user.image && (
              <Image
                src={session.user.image}
                width={40}
                height={40}
                className="rounded-full"
                alt={session.user.name}
              />
            )}
            <Link href="/create-project">Share Project </Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
