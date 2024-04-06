import { useContext, useEffect, useState } from "react";
import LanguageContext from "./LanguageContext";

function Clock() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <h2>{language === 'en' ? 'Current time:' : 'Orario attuale:'} {date.toLocaleTimeString()}</h2>;
}

export default Clock;
