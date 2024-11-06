import { useMemo } from "react";

const useFormattedDate = (dateString) => {
  const formattedDate = useMemo(() => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;
