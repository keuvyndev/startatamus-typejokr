"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { JokeContext } from "@/app/_context/joke";
import { SearchIcon } from "lucide-react";
import { useContext, useState } from "react";

const SearchJokeInput = () => {
  const [params, setParams] = useState("");
  const { getJokeBySearch } = useContext(JokeContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
    console.log(params);
    await getJokeBySearch(params);
  };

  return (
    <>
      {/* Layout para Mobile */}
      <div className="block lg:hidden">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center justify-between"
        >
          <Input
            type="joke"
            placeholder="Search for joke..."
            className="hover:border-primary w-[90%]"
            onChange={handleInputChange}
            value={params}
          />
          <Button type="submit" className="bg-primary">
            <SearchIcon />
          </Button>
        </form>
      </div>

      {/* Layout para Desktop */}
      <div className="hidden lg:block">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            type="joke"
            placeholder="Search for joke..."
            className="hover:border-primary w-2xs shadow-md"
            onChange={handleInputChange}
            value={params}
          />
          <Button type="submit" className="bg-primary">
            <SearchIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default SearchJokeInput;
