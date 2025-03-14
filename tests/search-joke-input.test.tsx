import { fireEvent, render, screen } from "@testing-library/react";
import SearchJokeInput from "../app/(home)/_components/search-joke-input";

describe("Search Joke Input Component", () => {
  it("Deve renderizar o Search Joke Input", () => {
    render(<SearchJokeInput />);
    expect(screen.getByTestId("search-joke-input")).toBeInTheDocument();
  });

  it("Deve verificar se o estilo do input mudou ao colocar o mouse encima", () => {
    render(<SearchJokeInput />);
    const searchInput = screen.getByTestId("search-joke-input");
    fireEvent.mouseOver(searchInput);
    expect(searchInput).toHaveClass("hover:border-primary");
  });

  it("Deve verificar se ao digitar no input o valor aparece em tela", () => {
    render(<SearchJokeInput />);
    const searchInput = screen.getByTestId("search-joke-input");
    fireEvent.change(searchInput, { target: { value: "piada" } });
    expect(searchInput).toHaveValue("piada");
  });

  it("Deve renderizar o botão de busca", () => {
    render(<SearchJokeInput />);
    const searchButton = screen.getByTestId("search-joke-button");
    expect(searchButton).toBeInTheDocument();
  });

  it("Deve verificar se o botão de busca é clicável", () => {
    render(<SearchJokeInput />);
    const searchButton = screen.getByTestId("search-joke-button");
    fireEvent.click(searchButton);
    expect(searchButton).toBeEnabled();
  });
});
