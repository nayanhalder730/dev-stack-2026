import "./App.css";
import Nav from "./component/nav";
import Banner from "./component/banner";
import { Suspense } from "react";
import type { ITechnology } from "./type/type";
import Technologies from "./component/technologies";

const technologiesPromis = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback="Loading....">
        <Technologies technologies={technologiesPromis()} />
      </Suspense>
    </>
  );
}

export default App;