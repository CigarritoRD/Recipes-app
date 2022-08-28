import Footer from "./components/Footer";

import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Pages />
        <Footer />
      </BrowserRouter>
    </>
  );
}
