import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/ui/Header.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import { useQuery } from "@apollo/client";
import { GET_AUTH_USER } from "../graphql/queries/user.query.js";
import { Toaster } from "react-hot-toast";

function App() {
  const { data, error, loading } = useQuery(GET_AUTH_USER);
  console.log("Authenticated User: ", data);
  console.log("Error: ", error);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data?.authUser && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}
export default App;
