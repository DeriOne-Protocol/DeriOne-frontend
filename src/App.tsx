import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import { Connectors } from "./components/Connectors";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { FormContext } from "./contexts/FormContext";
import { useFormReducer } from "./hooks/useFormReducer";

function getLibrary(provider: any): ethers.providers.Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function App() {
  const [state, dispatch] = useFormReducer();

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <FormContext.Provider value={[state, dispatch]}>
          <Connectors />
          <Header />
          <Body />
          <Footer />
        </FormContext.Provider>
      </Web3ReactProvider>
    </>
  );
}