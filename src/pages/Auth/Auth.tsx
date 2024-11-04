import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { fetchAuth } from "../../api";
import { API_URL } from "../../api/constant";

const Auth = () => {
  const [authType, setAuthType] = useState<"login" | "signUp">("login");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const isValidEmail = (email: string) => {
    const regexPatten = new RegExp(
      "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}"
    );
    if (regexPatten.test(email)) {
      return true;
    }
    return false;
  };

  const isValidPassword = (password: string) => {
    if (password.length >= 8) return true;
    return false;
  };

  const handleSubmit = () => {
    const apiUrl =
      authType === "login" ? API_URL.AUTH.LOGIN : API_URL.AUTH.SIGN_UP;
    fetchAuth(apiUrl, {
      email,
      password,
    });
  };

  useEffect(() => {
    if (isValidEmail(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  useEffect(() => {
    if (isValidPassword(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <section>
        <h3>Welcome</h3>
        <span>Sign in to your account or create a new one</span>
      </section>
      <div>
        <S.TabButton
          role="button"
          $active={authType === "login"}
          onClick={() => setAuthType("login")}
        >
          Login
        </S.TabButton>
        <S.TabButton
          role="button"
          $active={authType === "signUp"}
          onClick={() => setAuthType("signUp")}
        >
          Sign Up
        </S.TabButton>
      </div>
      <div>
        <h6>Email</h6>
        <p>{emailValid ? "OOO" : "XXX"}</p>
        <input
          placeholder="you@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <h6>Password (8 characters minimum)</h6>
        <p>{passwordValid ? "OOO" : "XXX"}</p>
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button disabled={!(emailValid && passwordValid)} onClick={handleSubmit}>
        {authType === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Auth;

const S = {
  TabButton: styled.button<{ $active?: boolean }>`
    background-color: white;
    color: black;
    ${(props) =>
      props.$active &&
      css`
        background-color: black;
        color: white;
      `}
  `,
};
