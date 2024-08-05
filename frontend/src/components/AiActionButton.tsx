import axios from "axios";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  actionPath: string;
  body: any;
  cn?: string
}

const AiActionButton = ({ actionPath, cn, label, body, ...rest }: Props) => {
  const handleClick = async () => {
    try {
      const result = await axios.post(
        import.meta.env.VITE_BASE_API_PATH + actionPath,
        body
      );
      alert(result.data);
    } catch (error) {
      console.error("Error during API call:" + error);
    }
  };

  return (
    <button className={` bg-gray-600 text-white p-2 ${cn}`} onClick={handleClick} {...rest}>
      {label}
    </button>
  );
};

export default AiActionButton;
