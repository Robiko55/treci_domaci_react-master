import React from "react";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((sneaker) => (
          <div key={sneaker.id} className="sneaker" data-testid={`car-${sneaker.id}`}>
            <div>
              <h3>{sneaker.model}</h3>
            </div>
            <div>
              <img src={sneaker.image} alt="#" />
              <p> {sneaker.make_id}</p>
              <p>Year: {sneaker.year}</p>
            </div>
            <div>
              {favorites.some((s) => s.id === sneaker.id) ? (
                <button onClick={() => removeFromFavorites(sneaker.id)}>
                  Izbaci iz omiljenih
                </button>
              ) : (
                <button onClick={() => addToFavorites(sneaker)}>
                 Dodaj u omiljeno
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>Dodajte automobile u omiljene da bi se prikazale ovde!</h1>
      )}
    </div>
  );
};

export default Favorites;