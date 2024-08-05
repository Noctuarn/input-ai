import TextTransformElement from "./components/TextTransformElement";

const App = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-2xl font-black">1) Deffault input</h1>
        <TextTransformElement />
      </div>

      {/* <div className="flex flex-col items-start gap-5">
        <h1 className="text-2xl font-black">2) Input with the TailwindCss styles</h1>
        <TextTransformElement
          placeholder="Here the input with the custom styles with TailwindCSS classes"
          enhanceBtnClass="bg-red-400"
          grammarBtnClass="bg-cyan-500 rounded-lg"
          translateBtnClass="bg-yellow-300"
          translateSelectClass="w-[200px]"
          inputClass="w-[70%]"
        />
      </div> */}

      {/* <div className="flex flex-col items-start gap-5">
        <h1 className="text-2xl font-black">3) Input with the vanilla CSS styles</h1>
        <TextTransformElement
          placeholder="Here the input with the custom styles with basic css classes"
          enhanceBtnClass="enh-btn"
          grammarBtnClass="gram-btn"
          translateBtnClass="translate-btn"
          translateSelectClass="translate-sel"
          inputClass="input"
        />
      </div> */}
      
    </div>
  );
};

export default App;
