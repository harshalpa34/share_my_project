import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

type ColumnPros = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnPros) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex-start footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="purple-logo-of-project"
          />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            This project is made for developers to showcase their projects in
            the public and explore others projects
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {footerLinks.map((item) => (
            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn title={item.title} links={item.links} />
            </div>
          ))}
        </div>

        <div className="flexBetween footer_copyright">
          <p>@2024 All Rights Are reserved</p>
          <p className="text-gray">
            <span className="text-black font-semibold">0</span> projects
            submitted
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
