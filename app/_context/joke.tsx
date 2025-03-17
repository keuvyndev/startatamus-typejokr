"use client";

import { createContext, ReactNode, useState } from "react";
import { IJoke } from "../_types/api";
import { toast } from "sonner";

interface IJokeContext {
  joke: IJoke;
  searchParams: string;
  getRandomJoke: () => Promise<void>;
  getJokeBySearch: (searchParams: string) => Promise<void>;
}

const cleanJoke = {
  categories: [],
  created_at: "",
  icon_url: "",
  id: "",
  updated_at: "",
  url: "",
  value: "",
};

export const JokeContext = createContext<IJokeContext>({
  joke: cleanJoke,
  searchParams: "",
  getRandomJoke: async () => {},
  getJokeBySearch: async () => {},
});

export const JokeProvider = ({ children }: { children: ReactNode }) => {
  const [joke, setJoke] = useState<IJoke>(cleanJoke);
  const [searchParams, setSearchParams] = useState("");

  const getRandomJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      if (!response.ok) {
        throw new Error("Erro ao buscar piada");
      }
      const data = await response.json();
      setJoke(data);
      setSearchParams("");
      toast.success("Piada carregada com sucesso");
    } catch (error) {
      console.error(error);
      setJoke({
        categories: [],
        created_at: "",
        icon_url: "",
        id: "",
        updated_at: "",
        url: "",
        value: "Erro ao buscar piada",
      });
    }
  };

  const getJokeBySearch = async (searchParams: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${searchParams}`,
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar piada");
      }
      const data = await response.json();
      let dataResult;
      if (data.result.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.result.length);
        dataResult = data.result[randomIndex];
      } else {
        dataResult = {
          categories: [],
          created_at: "",
          icon_url: "",
          id: "",
          updated_at: "",
          url: "",
          value: "Nenhuma piada encontrada",
        };
        toast.error("Nenhum resultado encontrado");
      }
      setJoke(dataResult);
      setSearchParams(searchParams);
      toast.success("Busca realizada com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Nenhum resultado encontrado");
      setJoke({
        categories: [],
        created_at: "",
        icon_url: "",
        id: "",
        updated_at: "",
        url: "",
        value: "Erro ao buscar piada",
      });
    }
  };

  return (
    <JokeContext.Provider
      value={{
        joke,
        searchParams,
        getJokeBySearch,
        getRandomJoke,
      }}
    >
      {children}
    </JokeContext.Provider>
  );
};
