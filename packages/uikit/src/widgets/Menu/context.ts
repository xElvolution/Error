import { createContext, ElementType } from "react";

interface MenuContextType {
  linkComponent: ElementType;
  themeMode: "light" | "dark";
}

export const MenuContext = createContext<MenuContextType>({
  linkComponent: "a",
  themeMode: "light",
});
