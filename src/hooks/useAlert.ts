import { useState } from "react";

import { AlertType, AlertState } from "@/types/alert";

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({
    message: "",
    type: "success",
    visible: false,
  });

  const showAlert = (message: string, type: AlertType = "success") => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 1000);
  };

  return { alert, showAlert };
};

export default useAlert;
