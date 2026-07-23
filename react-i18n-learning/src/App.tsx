import { useTranslation } from "react-i18next";

function App() {
  // t は翻訳キーから文章を取得する関数です。
  // i18n は言語を変更するために使います。
  const { t, i18n } = useTranslation();

  return (
    <main>
      <p className="eyebrow">React i18n learning</p>
      <h1>{t("welcome.title")}</h1>
      <p>{t("welcome.description")}</p>
      <p>{t("greeting", { name: "Aki" })}</p>

      <div className="language-buttons" aria-label={t("language.label")}>
        <button
          type="button"
          className={i18n.language === "ja" ? "active" : ""}
          onClick={() => i18n.changeLanguage("ja")}
        >
          {t("language.japanese")}
        </button>
        <button
          type="button"
          className={i18n.language === "en" ? "active" : ""}
          onClick={() => i18n.changeLanguage("en")}
        >
          {t("language.english")}
        </button>
      </div>
    </main>
  );
}

export default App;
