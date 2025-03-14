import { fireEvent, render, screen } from "@testing-library/react";
import SearchJokeInput from "../app/(home)/_components/search-joke-input";
import { JokeContext } from "@/app/_context/joke";

describe("Search Joke Input Component", () => {
  it("Deve chamar a função getJokeBySearch ao enviar o formulário", () => {
    const getJokeBySearch = jest.fn();
    render(
      <JokeContext.Provider
        value={{
          getJokeBySearch,
          getRandomJoke: jest.fn(),
          joke: {
            categories: [],
            created_at: "",
            icon_url: "",
            id: "",
            updated_at: "",
            url: "",
            value: "",
          },
        }}
      >
        <SearchJokeInput />
      </JokeContext.Provider>,
    );

    const searchInput = screen.getByTestId("search-joke-input");
    fireEvent.change(searchInput, { target: { value: "piada" } });

    const searchButton = screen.getByTestId("search-joke-button");
    fireEvent.click(searchButton);

    expect(getJokeBySearch).toHaveBeenCalledWith("piada");
  });
});
