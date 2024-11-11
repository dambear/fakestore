import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [store, setStore] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  if (!store || store.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-center mt-2">
        <h1 className="text-3xl font-bold">Fake Store</h1>
      </div>

      <div className="flex flex-wrap gap-4 max-w-screen justify-center overflow-auto m-4">
        <Card store={store} />
      </div>
    </>
  );
}

export default App;
