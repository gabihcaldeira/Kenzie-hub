import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Section } from "../styles/Form";
import { registerSchema } from "../validators/formValidators";
import Nav from "../components/Nav/Nav";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
  const { SignIn, navigate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  return (
    <Section>
      <Nav>
        <button onClick={() => navigate("/", { replace: true })}>Voltar</button>
      </Nav>
      <Form onSubmit={handleSubmit(SignIn)} errors={errors} formType="register">
        <h1>Cadastro</h1>
        <label htmlFor="name">Nome</label>
        <input {...register("name")} />
        <p className="errorMsg errorMsg-name">{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input {...register("email")} />
        <p className="errorMsg errorMsg-email">{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input type="password" {...register("password")} />
        <p className="errorMsg errorMsg-password">{errors.password?.message}</p>

        <label htmlFor="confirm_password">Confirmar Senha</label>
        <input type="password" {...register("confirm_password")} />
        <p className="errorMsg errorMsg-confirmPassword">
          {errors.confirm_password?.message}
        </p>

        <label htmlFor="bio">Bio</label>
        <input {...register("bio")} />
        <p className="errorMsg errorMsg-bio">{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input {...register("contact")} />
        <p className="errorMsg errorMsg-contact">{errors.contact?.message}</p>

        <label htmlFor="course_module">Selecionar módulo</label>
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <p className="errorMsg errorMsg-course-module">
          {errors.course_module?.message}
        </p>

        <button type="submit">Cadastrar</button>
      </Form>
    </Section>
  );
};

export default Register;
