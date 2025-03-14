import { render, screen } from "@testing-library/react";
import Header from "../app/_components/header";

describe("Header Component", () => {
  it("Deve renderizar a logo do Type Jokr", () => {
    render(<Header />);
    expect(screen.getAllByAltText("Logo Type Jokr").length).toBeGreaterThan(0);
  });

  it("Deve renderizar o Info Button", () => {
    render(<Header />);
    expect(screen.getAllByAltText("More Info").length).toBeGreaterThan(0);
  });

  it("Deve renderizar o texto Every type is a Chuck Norris Joke.", () => {
    render(<Header />);
    expect(screen.getAllByAltText("More Info").length).toBeGreaterThan(0);
  });
});
