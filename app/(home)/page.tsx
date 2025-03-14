import { Separator } from "../_components/ui/separator";
import Header from "../_components/header";
import RoundedBox, { RoundedBoxContent } from "../_components/rounded-box";
import SearchJokeInput from "./_components/search-joke-input";
import LuckButton from "./_components/luck-button";
import SearchResponseContent from "./_components/search-response";

export default function Home() {
  return (
    <>
      {/* Layout para Mobile */}
      <div className="block lg:hidden">
        <Header />
        <RoundedBox>
          <RoundedBoxContent className="space-y-3 px-5">
            <SearchJokeInput />
            <LuckButton />
            <Separator className="mt-3" />
            <SearchResponseContent />
          </RoundedBoxContent>
        </RoundedBox>
      </div>
      {/* Layout para Desktop */}
      <div className="hidden lg:block">
        <Header />
        <RoundedBox>
          <RoundedBoxContent className="space-y-3 px-5">
            <div className="flex gap-2">
              <SearchJokeInput />
              <LuckButton />
            </div>
            <Separator className="mt-3" />
            <SearchResponseContent />
          </RoundedBoxContent>
        </RoundedBox>
      </div>
    </>
  );
}
