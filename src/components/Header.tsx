import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext } from "react";

export const Header = () => {
    const loggedUserCtx = useContext(LoggedUserContext);

    const handleLogout = () => {
        loggedUserCtx?.setName('');
    }

    return (
        <header className="flex">
            <h1 className="text-3xl flex-1">Título da Página</h1>
            {loggedUserCtx?.name &&
                <>
                    <p className="mt-1">Usuário Logado: {loggedUserCtx?.name}</p>
                    <button onClick={handleLogout} className="ml-3 font-bold block">Sair</button>
                </>
            }
            {!loggedUserCtx || loggedUserCtx?.name === '' &&
                <p>Usuário DESLOGADO</p>
            }
        </header>
    );
}