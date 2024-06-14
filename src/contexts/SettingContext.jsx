"use client";

import { createContext, useEffect, useState } from "react"; 
// ============================================================


// ============================================================

// SET "rtl" OR "ltr" HERE

// THEN GOTO BROWSER CONSOLE AND RUN localStorage.clear() TO CLEAR LOCAL STORAGE
const initialSettings = {
  direction: "ltr"
};
export const SettingsContext = createContext({
  settings: initialSettings,
  updateSettings: arg => {}
});
export default function SettingsProvider({
  children
}) {
  const [settings, setSettings] = useState(initialSettings);

  const updateSettings = updatedSetting => {
    setSettings(updatedSetting);
    window.localStorage.setItem("settings", JSON.stringify(updatedSetting));
  };

  useEffect(() => {
    if (!window) return;
    const getItem = window.localStorage.getItem("settings");
    if (getItem) setSettings(JSON.parse(getItem));else setSettings(initialSettings);
  }, []);
  return <SettingsContext.Provider value={{
    settings,
    updateSettings
  }}>
      {children}
    </SettingsContext.Provider>;
}