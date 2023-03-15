import React from "react";
import {
  Navbar,
  Home,
  Popular,
  Special,
  Contact,
  Footer,
  Gallery,
  Review,
  HowItWorks,
  Loader,
} from "./components";

function App() {
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Special />
          <Popular />
          <HowItWorks />
          <Gallery />
          <Review />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
