import "./styles.css";
import Start from "./pages/Start/Start";
import LoginRegistro from "./pages/Login/LoginRegistro";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import { UserContext } from "./context/UserContext";
import { useMemo, useState } from "react";

function App() {
	const [user, setUser] = useState({});
	const providerValue = useMemo(() => ({ user, setUser }, [user, setUser]));
	return (
		<div className="app">
			<UserContext.Provider value={providerValue}>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/login" element={<LoginRegistro />} />
					<Route path="/home/*" element={<Home />} />
				</Routes>
			</UserContext.Provider>
		</div>
	);
}

export default App;
