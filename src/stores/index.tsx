import React, { PropsWithChildren, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { LocaleStoreProps, useLocaleStore } from "./locale";
export interface StoreProps extends LocaleStoreProps {
  locale: "en-us" | "zh-cn";
  footerRatio: number; //0为在不可见视下
  setFooterRatio: (num: number) => void;
}
export const StoreContext = React.createContext<StoreProps>({
  locale: "en-us",
  setLocale: () => {},
  footerRatio: 1,
  setFooterRatio: () => {},
});

export const StoreProvider = (props: PropsWithChildren<{}>) => {
  const localeStore = useLocaleStore();
  const store = useLocalObservable<StoreProps>(() => {
    return {
      ...localeStore,
      footerRatio: 1,
      setFooterRatio(num: number) {
        this.footerRatio = num;
      },
    };
  });

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
