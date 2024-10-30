import { atom } from "recoil";

export const rootLoadingAtom = atom({
  key: "rootLoadingAtom", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
