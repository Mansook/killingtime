import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import {
  changefile,
  initializeform,
  selectLog,
  selectReg,
  selectAuth,
} from "../../modules/slices/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectAuth);
  // console.log(form);
  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changefile({
        form: "login",
        key: name,
        value,
      })
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeform("login"));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form.login}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  );
};
export default LoginForm;
