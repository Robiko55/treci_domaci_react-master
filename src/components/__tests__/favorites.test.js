import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Favorites from "../Favorites";
import { AppContextProvider } from "../context/appContext";

// Mocking the context module
jest.mock('../context/appContext', () => ({
  useAppContext: () => ({
    favorites: [],
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
  }),
}));

describe("Favorites", () => {
  test("renders with empty favorites", () => {
    render(
     
        <Favorites />
      
    );

    expect(screen.getByText("Dodajte automobile u omiljene da bi se prikazale ovde!")).toBeInTheDocument();
  });

  test("renders with favorites", () => {
    const mockFavorites = [
      { id: 1, model: "car-1"},
      { id: 2, model: "car-2" },
    ];

    jest.mock('../context/appContext', () => ({
      useAppContext: () => ({
        favorites: mockFavorites,
        addToFavorites: jest.fn(),
        removeFromFavorites: jest.fn(),
      }),
    }));

    render(
        <Favorites />
    );

    expect(screen.getByTestId("car-1")).toBeInTheDocument();
    expect(screen.getByTestId("car-2")).toBeInTheDocument();
  });

//   test("adds and removes from favorites", () => {
//     const mockFavorites = [
//       { id: 1, model: "Car 1", image: "car1.jpg", make_id: "Make 1", year: 2022 },
//     ];

//     jest.mock('../context/appContext', () => ({
//       useAppContext: () => ({
//         favorites: mockFavorites,
//         addToFavorites: jest.fn(),
//         removeFromFavorites: jest.fn(),
//       }),
//     }));

//     render(
//       <AppContextProvider>
//         <Favorites />
//       </AppContextProvider>
//     );

//     expect(screen.getByText("Car 1")).toBeInTheDocument();
//     expect(screen.getByText("Izbaci iz omiljenih")).toBeInTheDocument();

//     fireEvent.click(screen.getByText("Izbaci iz omiljenih"));
//     expect(screen.getByText("Dodaj u omiljeno")).toBeInTheDocument();
//   });
});