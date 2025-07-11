import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
    visible: false,
  });

  const showAlert = (message, type = "success") => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 1000);
  };

  return { alert, showAlert };
};

export default useAlert;
