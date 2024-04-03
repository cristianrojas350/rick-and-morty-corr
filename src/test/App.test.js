import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"; // Importa screen de @testing-library/dom
import App from "../App"; // Importa el componente App
import CardDetails from "../components/Card/CardDetails"; // Importa el componente CardDetails
import "@testing-library/jest-dom/extend-expect"; // Importa extend-expect para agregar expect.toHaveTextContent

test("renders app component", () => {
  render(<App />);
});

test("renders card details component", async () => {
  // Simula datos de ejemplo que pasarías al componente CardDetails
  const params = { id: "1" }; // Simula el parámetro de la URL
  const mockData = {
    id: 1,
    name: "Example Name",
    status: "Alive",
    location: { name: "Example Location" },
    origin: { name: "Example Origin" },
    gender: "Male",
    species: "Human",
    image: "https://example.com/image.jpg",
  };

  // Simula la función useParams para obtener el id del personaje de la URL
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => params,
  }));

  // Simula la llamada a la API utilizando fetch
  global.fetch = jest.fn().mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockData),
  });

  // Renderiza el componente CardDetails
  render(<CardDetails />);

  // Espera a que se carguen los datos del personaje
  const nameElement = await screen.findByText("Example Name");
  expect(nameElement).toBeInTheDocument();

  // Verifica si el nombre del personaje se muestra correctamente en la tarjeta de detalles
  expect(screen.getByText("Example Location")).toBeInTheDocument();
});
