import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {

const [isDark, setIsDark] = useLocalStorage("isDark", {name : true})

useEffect((isDark) => {

    if (isDark === true) {
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }
}, [isDark]);

}


