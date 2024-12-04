import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black overflow-hidden">
        <header className="fixed top-0 w-full bg-black z-10 p-4">
          <h1 className="text-red-600 text-3xl font-bold font-mono">NEWFLIX</h1>
        </header>
        <main className="pt-16 w-full px-24">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}
