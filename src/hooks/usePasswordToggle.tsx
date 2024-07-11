import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? (
    <EyeOff size={20} onClick={() => setVisible(false)} />
  ) : (
    <Eye size={20} onClick={() => setVisible(true)} />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;
