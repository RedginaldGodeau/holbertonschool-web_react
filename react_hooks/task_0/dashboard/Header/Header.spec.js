import { render, screen, useContext } from "@testing-library/react";
import { beforeEach } from "@jest/globals";
import Header from "./Header";
import * as Aphrodite from "aphrodite";
import { AppContext } from "../App/AppContext";

// Mock the useContext hook
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    useContext.mockClear(); // Clear mock implementation before each test
  });

  it("Should render the logo image", async () => {
    useContext.mockReturnValue({ user: { isLoggedIn: false } });
    render(<Header />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });

  it("Render h1 with good text", async () => {
    useContext.mockReturnValue({ user: { isLoggedIn: false } });
    render(<Header />);

    const titleH1 = screen.getByRole("heading", {
      level: 1,
      name: /School dashboard/i,
    });

    expect(titleH1).toBeInTheDocument();
  });

  it("Should render welcome message when user is logged in", () => {
    useContext.mockReturnValue({ user: { isLoggedIn: true, email: 'test@example.com' } });
    render(<Header />);
    const welcomeMessage = screen.getByText(/Welcome test@example.com/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("Should render logout link when user is logged in", () => {
    useContext.mockReturnValue({ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() });
    render(<Header />);
    const logoutLink = screen.getByText(/logout/i);
    expect(logoutLink).toBeInTheDocument();
  });
});
