import React from "react";
import {
  Navbar,
  Home,
  Popular,
  Special,
  Login,
  Footer,
  Gallery,
  Review,
  HowItWorks,
  Loader,
} from "./components";

function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
          <Login />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
