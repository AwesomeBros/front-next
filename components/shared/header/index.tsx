import { NAVMENU } from "@/lib/constants";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="border-b w-full h-14">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl">AwesomeBros</h1>
        </Link>
        <div className="flex items-center gap-5">
          {NAVMENU.map((menu) => (
            <Link className="hover:underline" key={menu.title} href={menu.href}>
              <p className="">{menu.title}</p>
            </Link>
          ))}
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
