import { atom } from "recoil";

export const menuBurgerStatus = atom({
    key: 'menuBurger',
    default: false,
  });

  export const iconStatus = atom({
    key: 'icon',
    default: {
      "BBVA": false,
      "Gerencia": false,
      "Cliente": false,
      "Mapas": false,
    },
  });