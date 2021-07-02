import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="absolute top-0 left-0 w-1/12 h-10 bg-gradient-to-r to-[#06202A]"></div>
      <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl scrollbar-hide sm:px-20 whitespace-nowrap sm:space-x-20">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            className="last:pr-24 transition duration-100 transform cursor-pointer hover:scale-125 hover:text-[#1ce783] active:text-[#1ce783]"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202A]"></div>
    </nav>
  );
}

export default Nav;
