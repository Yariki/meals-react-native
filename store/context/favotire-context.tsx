
import { createContext, useState } from "react";

interface FavoriteContextType {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});


export const  FavoriteContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);


    function addFavorite(id: string) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }
    function removeFavorite(id: string) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }


    return (        
        <FavoriteContext.Provider value={{
            ids: favoriteMealIds,
            addFavorite: addFavorite,
            removeFavorite: removeFavorite,
        }}>
            {children}
        </FavoriteContext.Provider>
    );
};
