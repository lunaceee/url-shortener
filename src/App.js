import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import React, { useState } from "react";

function App() {
  const [urlList, setUrlList] = useState([]);

  return (
    <div className="flex flex-col h-screen justify-between gap-4">
      <header className="grid items-center bg-blue-900 text-center h-40">
        <h1 className="text-white">URL shortener</h1>
      </header>
      <main className="container mx-auto mb-10 grid gap-4 lg:grid-flow-col justify-items-center">
        <UrlForm setUrlList={setUrlList} />
        <UrlList urlList={urlList} setUrlList={setUrlList} />
      </main>
      <footer className="h-40"></footer>
    </div>
  );
}

export default App;
