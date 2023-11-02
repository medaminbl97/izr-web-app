import axios from "axios";
import { useState, useEffect } from "react";

function useText(path: string, abh: any) {
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get(path)
      .then((res) => {
        setText(res.data);
        console.log(text);
      })
      .catch((error) => {
        console.error("Error loading text file:", error);
      });
  }, [abh]);

  return text;
}

export default useText;
