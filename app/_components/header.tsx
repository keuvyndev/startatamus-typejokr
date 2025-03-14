import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Header = () => {
  return (
    <>
      <div className="relative flex h-[180px] w-full flex-col">
        <Image
          src="/type-jokr-log.png"
          alt="Type Jokr Logo"
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-center gap-2 py-3">
        <HoverCard>
          <HoverCardTrigger>
            <Image
              width={27}
              height={27}
              src={"/info-button.png"}
              alt="More Info"
              className="hover:brightness-105"
            ></Image>
          </HoverCardTrigger>
          <HoverCardContent>
            Use o campo de busca para encontrar uma piada ou clique no botão de
            sorte para receber uma piada aleatória.
          </HoverCardContent>
        </HoverCard>
        <span className="text-[16px] font-bold">
          Every type is a Chuck Norris Joke.
        </span>
      </div>
    </>
  );
};

export default Header;
