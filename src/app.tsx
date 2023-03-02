import { onAuthStateChanged } from "firebase/auth";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { userAtom } from "./atoms/user";
import { auth } from "./lib/firebase";

export default function App() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setUser(user));

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-mono bg-zinc-800 text-white p-8">
      <Outlet />
    </div>
  );
}
