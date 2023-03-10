import { useAtomValue } from "jotai";
import { Navigate, Outlet } from "react-router-dom";
import { userAtom } from "../atoms/user";
import { routes } from "../routes";
import Loading from "./loading";

export default function Protected() {
  const user = useAtomValue(userAtom);

  if (user === undefined) {
    return <Loading />;
  } else if (user === null) {
    return <Navigate to={routes.login.href} replace />;
  } else {
    return <Outlet />;
  }
}
