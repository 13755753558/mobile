import dayjs from "dayjs";

export interface LocaleStoreProps {
  locale: "en-us" | "zh-cn";
  setLocale(locale: string): void;
}

export const useLocaleStore = (): LocaleStoreProps => {
  return {
    /**
     * 当前语言环境
     */
    locale: "en-us",
    /**
     * 设置当前语言环境
     * @param locale 语言环境
     */
    setLocale(locale) {
      const _locale = /^zh\b/.test(locale.toLocaleLowerCase())
        ? "zh-cn"
        : "en-us";
      this.locale = _locale;
      dayjs.locale(/^zh\b/.test(locale.toLocaleLowerCase()) ? 'zh' :"en");
      localStorage.setItem("language", _locale);
    },
  };
};
