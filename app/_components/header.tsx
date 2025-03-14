import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Header = () => {
  return (
    <>
      {/* Layout para Mobile */}
      <div className="block lg:hidden">
        <div className="relative flex h-[180px] w-full flex-col">
          <Image
            src="/type-jokr-log.png"
            alt="Logo Type Jokr"
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
              Use o campo de busca para encontrar uma piada ou clique no botão
              de sorte para receber uma piada aleatória.
            </HoverCardContent>
          </HoverCard>
          <span className="text-[16px] font-bold">
            Every type is a Chuck Norris Joke.
          </span>
        </div>
      </div>

      {/* Layout para Desktop */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          <div className="ml-12 flex items-center gap-4">
            <HoverCard>
              <HoverCardTrigger>
                <Image
                  width={45}
                  height={45}
                  src={"/info-button.png"}
                  alt="More Info"
                  className="hover:brightness-105"
                ></Image>
              </HoverCardTrigger>
              <HoverCardContent>
                Use o campo de busca para encontrar uma piada ou clique no botão
                de sorte para receber uma piada aleatória.
              </HoverCardContent>
            </HoverCard>
            <span className="text-4xl font-bold">
              Every type is a Chuck Norris Joke.
            </span>
          </div>
          <div className="relative mr-14 h-[180px] w-[280px]">
            <Image
              src="/type-jokr-log.png"
              alt="Logo Type Jokr"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
