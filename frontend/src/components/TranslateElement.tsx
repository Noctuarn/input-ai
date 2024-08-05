import { ChangeEvent, useState } from "react";
import AiActionButton from "./AiActionButton";
import { languages } from "../data/languages";

interface TranslateElementProps {
  text: string;
  translateBtnClass?: string;
  translateSelectClass?: string
}

const TranslateElement = ({
  text,
  translateBtnClass,
  translateSelectClass,
}: TranslateElementProps) => {
  const [language, setLanguage] = useState<string>(languages[0]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center">
      <select
        onChange={handleLanguageChange}
        value={language}
        className={`${translateSelectClass} h-full border-2 border-black`}
      >
        {languages.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <AiActionButton
        actionPath="translate"
        cn={translateBtnClass}
        label="Translate"
        body={{ text, language }}
      />
    </div>
  );
};

export default TranslateElement;
