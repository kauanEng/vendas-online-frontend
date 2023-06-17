import { createContext } from "react";

interface GlobalData {
    accessToken?: string;
}

interface globalContextPropos {
    globalData: GlobalData;
    setGlobalData: (globalData: GlobalData) => void
}

const GlobalContext = createContext({} as globalContextPropos)