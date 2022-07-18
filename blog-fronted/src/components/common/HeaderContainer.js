import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { logout, selectUser } from "../../modules/slices/user";
const HeaderContainer = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user.user} onLogout={onLogout} />;
};

export default HeaderContainer;
