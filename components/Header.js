import Image from "next/image";
import HeaderItem from "./HeaderItem";
import logo from "../public/images/hulu_logo.png";

import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src={logo} className="object-contain" width={200} height={100} />
    </header>
  );
}

export default Header;
