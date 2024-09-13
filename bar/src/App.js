import AsideMenu from "./Components/AsideMenu";
import SectionCart from "./Components/SectionCart";
import FormCreate from "./Components/FormCreate";
import FormLogin from "./Components/FormLogin";
//import CardsLoader from "./Components/CardsLoader";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import { FetchContextProvider } from "./Context/FetchContext"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <FetchContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <header>
                  <Navbar/>
                </header>
                <main>
                  <section>
                    <AsideMenu/>
                    <MainContent/>
                  </section>
                </main>
              </>
            } />
            <Route path="/formulario" element={
            <>
              <section className="sectionForm">
                <FormLogin/>
              </section>
            </>
            } />
            <Route path='/Crear-cuenta' element={
              <>
              <section className="sectionForm">
                <FormCreate/>
              </section>
              </>
            }/>
            <Route path="/Cart" element={
              <SectionCart/>
            }/>
          </Routes>
        </div>
      </Router>
    </FetchContextProvider>
  );
}

export default App;