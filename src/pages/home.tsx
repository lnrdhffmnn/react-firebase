import { useAtomValue } from "jotai";
import { userAtom } from "../atoms/user";
import { routes } from "../routes";

export default function Home() {
  const user = useAtomValue(userAtom);

  return (
    <>
      <img
        src={user?.photoURL!}
        alt={user?.displayName!}
        width={120}
        height={120}
        className="rounded-full shadow-md"
      />
      <p className="mt-4 font-bold text-xl">{user?.displayName}</p>
      <p className="text-zinc-300 text-sm">{user?.email}</p>
      <p className="mt-4">
        <span className="font-bold">Primeiro login: </span>
        <span className="text-zinc-300">
          {new Date(user?.metadata.creationTime!).toLocaleString()}
        </span>
      </p>
      <p>
        <span className="font-bold">Último login: </span>
        <span className="text-zinc-300">
          {new Date(user?.metadata.lastSignInTime!).toLocaleString()}
        </span>
      </p>
      <p className="mt-4">
        <a href={routes.settings.href} className="text-sky-500 hover:underline">
          {routes.settings.label}
        </a>
      </p>
      <p>
        <a href={routes.logout.href} className="text-sky-500 hover:underline">
          {routes.logout.label}
        </a>
      </p>
    </>
  );
}
