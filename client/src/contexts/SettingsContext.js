import { createContext } from "react";
import { useDispatch } from "react-redux";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";



const initialState={
    ...defaultSettings,
    onToggleMode: ()=>{}
}

const SettingsContext= createContext(initialState);

const SettingsProvider= ({children})=>{


    // const dispatch= useDispatch();

    const [settings, setSettings] = useLocalStorage("settings", {
        themeMode: initialState.themeMode,
      });
    
    // mode
    const onToggleMode=()=>{
        setSettings({
            ...settings,
            themeMode: settings.themeMode === "light" ? "dark" : "light",
          });
       console.log('Clicked')
    //    dispatch(setMode);

    console.log(defaultSettings)

    }


    return (
        <SettingsContext.Provider
        value={{ 
            ...settings,
            onToggleMode
         }}>
          {children}
        </SettingsContext.Provider>
    )
}

export {SettingsContext};
export default SettingsProvider;