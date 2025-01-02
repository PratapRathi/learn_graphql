import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/ui/Header.jsx";
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";

function App() {
	const authUser = true;
	return (
		<>
			{authUser && <Header />}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/transaction/:id' element={<TransactionPage />} />
				<Route path='*' element={<NotFound/>} />
			</Routes>
		</>
	);
}
export default App;