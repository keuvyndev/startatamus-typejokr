import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

import { ClipboardCopyIcon, MoreHorizontalIcon } from "lucide-react";
import { IJoke } from "@/app/_types/api";
import { Button } from "@/app/_components/ui/button";

interface JokeTableDropdownMenuProps {
  joke: IJoke;
}
const JokeTableDropdownMenu = ({ joke }: JokeTableDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-full" variant={"ghost"} asChild>
          <MoreHorizontalIcon size={16} className="text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-1.5"
          onClick={() => navigator.clipboard.writeText(joke.icon_url)}
        >
          <ClipboardCopyIcon size={16} /> Copiar Icon URL
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default JokeTableDropdownMenu;
