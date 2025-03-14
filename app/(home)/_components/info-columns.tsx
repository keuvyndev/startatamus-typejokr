"use client";

import { capitalizeFirstLetter } from "@/app/_utils/capitalizeFirstLetter";
import { formatDateToPTBR } from "@/app/_utils/formatDateToPT";
import { ColumnDef } from "@tanstack/react-table";
import JokeTableDropdownMenu from "./joke-table-dropdown-menu";
import { IJoke } from "@/app/_types/api";

export const infoColumns: ColumnDef<IJoke>[] = [
  {
    accessorKey: "categories",
    header: "Categoria",
    cell: (row) => {
      const cell = row.row.original;
      return cell.categories[0] ? (
        <span>{capitalizeFirstLetter(cell.categories[0])}</span>
      ) : (
        <span>Nenhuma</span>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Criada em",
    cell: (row) => {
      const cell = row.row.original;
      return <span>{formatDateToPTBR(cell.created_at)}</span>;
    },
  },
  {
    accessorKey: "updated_at",
    header: "Atualizada em",
    cell: (row) => {
      const cell = row.row.original;
      return <span>{formatDateToPTBR(cell.updated_at)}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => <JokeTableDropdownMenu joke={row.row.original} />,
  },
];
