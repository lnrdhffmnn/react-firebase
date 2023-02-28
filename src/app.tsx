import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-mono bg-zinc-800 text-white p-8">
      <Outlet />
    </div>
  );
}
