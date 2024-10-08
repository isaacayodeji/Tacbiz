import { Suspense, useEffect } from "react";
import "./App.css";
import Layout from "./layout";
import Loader from "./components/Loader";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout />;
      </Suspense>
    </>
  );
}

export default App;
