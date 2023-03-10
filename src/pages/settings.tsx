import { deleteUser } from "firebase/auth";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";
import { userAtom } from "../atoms/user";
import UserIcon from "../components/user-icon";
import { routes } from "../routes";

export default function Settings() {
  const user = useAtomValue(userAtom);

  async function handleDeleteUserAccount() {
    user && (await deleteUser(user));
  }

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        {user?.photoURL ? (
          <img
            src={user?.photoURL!}
            alt={user?.displayName!}
            width={75}
            height={75}
            className="rounded-full shadow-md"
          />
        ) : (
          <UserIcon size={75} />
        )}
        <span className="font-bold text-xl">{user?.displayName}</span>
      </div>
      <button
        onClick={handleDeleteUserAccount}
        className="mt-8 bg-red-700 px-8 py-2 rounded-md shadow-md font-bold hover:bg-red-600 transition-colors"
      >
        Apagar conta
      </button>
      <Link to={routes.home.href} className="text-sky-500 hover:underline mt-8">
        {routes.home.label}
      </Link>
    </>
  );
}
