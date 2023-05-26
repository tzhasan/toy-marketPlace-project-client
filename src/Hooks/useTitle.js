import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Legends`;
  }, [title]);
};

export default useTitle;
