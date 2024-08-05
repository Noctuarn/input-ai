import { ChangeEvent, useState } from "react";
import TranslateElement from "./TranslateElement";
import AiActionButton from "./AiActionButton";

type Props = {
  translateBtnClass?: string;
  enhanceBtnClass?: string;
  grammarBtnClass?: string;
  generateBtnClass?: string;
  translateSelectClass?: string;
  placeholder?: string;
  inputClass?: string;
};

const TextTransformElement = ({
  inputClass,
  placeholder,
  enhanceBtnClass,
  generateBtnClass,
  grammarBtnClass,
  translateBtnClass,
  translateSelectClass,
}: Props) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div
      className={`flex flex-col items-start gap-4`}
    >
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className={`border-2 border-black w-full p-2 ${inputClass}`}
        placeholder={`${
          placeholder ? placeholder : "Enter your text for an AI operation..."
        }`}
      />
      <div className="flex gap-5">
        <TranslateElement
          translateBtnClass={translateBtnClass}
          translateSelectClass={translateSelectClass}
          text={text}
        />
        <AiActionButton
          cn={enhanceBtnClass}
          label="Enhance"
          actionPath="enhance"
          body={{ text }}
        />
        <AiActionButton
          label="Check grammar issues"
          actionPath="grammar"
          body={{ text }}
          cn={grammarBtnClass}
        />
        <AiActionButton
          label="Generate text"
          actionPath="generate"
          body={{ text }}
          cn={generateBtnClass}
        />
      </div>
    </div>
  );
};

export default TextTransformElement;
