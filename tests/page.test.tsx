import { render, screen } from "@testing-library/react";
import Home from "../app/(home)/page";

describe("Home", () => {
  it("Verifica se o componente Header foi renderizado", () => {
    render(<Home />);
    expect(
      screen.getAllByText(/Every type is a Chuck Norris Joke./i).length,
    ).toBeGreaterThan(0);
  });

  it("Verifica se o componente SearchJokeInput foi renderizado", () => {
    render(<Home />);
    expect(
      screen.getAllByPlaceholderText(/Search for joke.../i).length,
    ).toBeGreaterThan(0);
  });

  it("Verifica se o componente LuckButton foi renderizado", () => {
    render(<Home />);
    expect(
      screen.getAllByText(/I'm feeling with luck/i).length,
    ).toBeGreaterThan(0);
  });

  it("Verifica se o componente Message foi renderizado", () => {
    render(<Home />);
    expect(
      screen.getAllByText(/Chuck Norris está aguardando você agir/i).length,
    ).toBeGreaterThan(0);
  });
});
