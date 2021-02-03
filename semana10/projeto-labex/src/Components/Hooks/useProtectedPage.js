import {useHistory} from "react-router-dom";
import {useEffect} from "react";

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(()=> {
        const token = localStorage.getItem("token");

        if(!token) {
            history.push("/login")
            window.alert("Por favor entrar com suas credenciais.")
        }
    },[history])

}