"use client";
import Message from "./message";
import { Button } from "@/app/_components/ui/button";
import { useContext } from "react";
import { JokeContext } from "@/app/_context/joke";
import Link from "next/link";
import { ClipboardCopyIcon } from "lucide-react";
import { toast } from "sonner";
import { DataTable } from "./data-table";
import { infoColumns } from "./info-columns";

const SearchResponseContent = () => {
  const { joke } = useContext(JokeContext);
  const handleClickCopyId = () => {
    navigator.clipboard.writeText(joke.id);
    toast.success("ID copiada com sucesso.");
  };

  if (joke.id) {
    return (
      <>
        <div className="container mx-auto mt-10 mb-5">
          <DataTable columns={infoColumns} data={[joke]} />
        </div>
        <div className="flex gap-4">
          <Message message={joke.value} />
        </div>
        <div className="mt-8 flex justify-between">
          <Button onClick={handleClickCopyId}>
            <ClipboardCopyIcon size={16} /> Copy ID to ClipBoard
          </Button>
          <Button asChild>
            <Link href={joke.url} rel="noopener noreferrer" target="_blank">
              Access Joke URL
            </Link>
          </Button>
        </div>
      </>
    );
  }
  return (
    <div className="flex gap-4">
      <Message
        info={true}
        message={
          "Chuck Norris está aguardando você agir... ou ele vai agir primeiro!"
        }
      />
    </div>
  );
};

export default SearchResponseContent;
