import { Form, Section } from "../styles/Form";
import Nav from "../components/Nav/Nav";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validators/formValidators";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

// email: gabihcaldeira@hotmail.com
// senha: Senhas1!

const Login = () => {
  const { LogIn, navigate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <Section>
      <Nav />
      <Form onSubmit={handleSubmit(LogIn)} errors={errors} formType="login">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email")}
          placeholder="exemplo@email.com"
        />
        <p className="errorMsg errorMsg-email">{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        <p className="errorMsg errorMsg-password">{errors.password?.message}</p>

        <button type="submit">Entrar</button>

        <span>Ainda não possui uma conta?</span>
        <button onClick={() => navigate("/register", { replace: true })}>
          Cadastre-se
        </button>
      </Form>
    </Section>
  );
};

export default Login;
