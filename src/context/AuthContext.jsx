import { createContext ,useState} from "react";

export const AuthContext=createContext()

export function AuthContextProvider({children}){
    const [resumeData, setResumeData] = useState({
        name: '',
        email: '',
        phone: '',
        summary: '',
        experience: '',
        education: '',
        skills: '',
    });
    return <AuthContext.Provider value={{resumeData,setResumeData}}>
        {children}
    </AuthContext.Provider>
}