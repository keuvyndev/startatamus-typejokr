"use client";

import { Button } from "@/app/_components/ui/button";
import { JokeContext } from "@/app/_context/joke";
import Image from "next/image";
import { useContext } from "react";

const LuckButton = () => {
  const { getRandomJoke } = useContext(JokeContext);

  const handleClick = async () => {
    await getRandomJoke();
  };
  return (
    <Button onClick={handleClick} className="w-full" variant={"default"}>
      <Image width={22} height={22} src={"/smile.png"} alt="More Info"></Image>
      {"I'm feeling with luck"}
    </Button>
  );
};

export default LuckButton;
