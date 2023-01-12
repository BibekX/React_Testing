import { rest } from "msw";
import { setupServer } from "msw/node";
import Api from "../Api";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const server = setupServer(
  rest.get("https://pokeapi.co/api/v2/pokemon/pikachu", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "Pikachu",
        moves: ["Thundershock", "Iron Tail", "Bolt Tackle"],
      })
    );
  })
);

test("mock api", async () => {
  render(<Api />);

  await waitFor(() => {
    // const apiElement = screen.getByText("Thundershock");
    const apiElement = screen.getAllByRole("listitem");
    expect(apiElement[0]).toBeInTheDocument();
  });
});

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());
