import { Separator } from "../_components/ui/separator";
import Header from "../_components/header";
import RoundedBox, { RoundedBoxContent } from "../_components/rounded-box";
import SearchJokeInput from "./_components/search-joke-input";
import LuckButton from "./_components/luck-button";
import SearchResponseContent from "./_components/search-response";

export default function Home() {
  return (
    <>
      <Header />
      <RoundedBox>
        <RoundedBoxContent className="space-y-3 px-5">
          <SearchJokeInput />
          <LuckButton />
          <Separator className="mt-3" />
          <SearchResponseContent />
        </RoundedBoxContent>
      </RoundedBox>
    </>
  );
}
