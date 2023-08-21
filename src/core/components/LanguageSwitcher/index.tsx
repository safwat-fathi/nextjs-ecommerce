import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { setStorage } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const [value, setValue] = useState<string>(i18n.language);

  const languageNames = useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: "language",
    });
  }, [currentLanguage]);

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;
      // document.dir = locale === "ar" ? "rtl" : "ltr";
      setStorage("lang", locale);
      return router.push(path, path, { locale });
    },
    [router]
  );

  useEffect(() => {
    setStorage("lang", currentLanguage);
  }, []);

  return (
    <select
      className="focus:outline-none focus:ring-0 bg-transparent uppercase font-bold"
      value={value}
      onChange={e => {
        setValue(e.target.value);
        switchToLocale(e.target.value);
      }}
    >
      {locales.map(locale => {
        const label = capitalize(languageNames.of(locale) ?? locale);
        const option = {
          value: locale,
          label,
        };

        return (
          <option key={locale} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

function capitalize(lang: string) {
  return lang.slice(0, 1).toUpperCase() + lang.slice(1);
}

export default LanguageSwitcher;
