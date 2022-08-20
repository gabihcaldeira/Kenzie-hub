import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub_Token");
    if (token) {
      api
        .get(`profile`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => {
          console.log(err);
          localStorage.clear();
        });
    }
  }, []);

  function SignIn(data) {
    const message = toast.loading("Carregando...", { theme: "dark" });

    const { confirm_password, ...userData } = data;

    api
      .post("users", userData)
      .then((response) => {
        toast.update(message, {
          render: "Cadastro realizado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          theme: "dark",
        });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.response.data.message;
        toast.update(message, {
          render: (
            <>
              <h4 className="toast__title">
                Não foi possível realizar o cadastro.
              </h4>
              <p className="toast__description">{errorMessage}</p>
            </>
          ),
          type: "error",
          isLoading: false,
          autoClose: 3000,
          theme: "dark",
        });
      });
  }

  function LogIn(data) {
    const message = toast.loading("Carregando...", { theme: "dark" });
    api
      .post("sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub_Token", token);
        localStorage.setItem("@KenzieHub_userId", user.id);
        toast.update(message, {
          render: "Login realizado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          theme: "dark",
        });

        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.response.data.message;
        toast.update(message, {
          render: (
            <>
              <h4 className="toast__title">
                Não foi possível realizar o Login.
              </h4>
              <p className="toast__description">{errorMessage}</p>
            </>
          ),
          type: "error",
          isLoading: false,
          autoClose: 3000,
          theme: "dark",
        });
      });
  }

  function logOut() {
    localStorage.clear();
    navigate("/", { replace: true });
    toast("Volte Sempre!", {
      icon: () => (
        <img
          alt="waving pikachu"
          src="https://emoji.slack-edge.com/TQZR39SET/pikachu_wave/77b0321f2d9a0763.gif"
          style={{ width: "40px" }}
        />
      ),
      theme: "dark",
      autoClose: 2000,
      pauseOnHover: false,
    });
  }
  return (
    <UserContext.Provider value={{ SignIn, LogIn, navigate, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
