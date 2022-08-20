import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const registerSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "A senha precisa ter no minímo 8 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "A senha deve conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo."
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
  bio: yup.string().required("Campo obrigatório"),
  //regex do site - https://regexr.com/39nr7
  //regex do email e como fazer mais de uma opção de input com yup - https://github.com/jquense/yup/issues/743
  contact: yup
    .string()
    .required("Campo obrigatório. Email, Telefone ou Rede Social.")
    .test(
      "is-contact",
      "Digite um Email, Telefone ou Rede Social válidos.",
      function (value) {
        const emailRegex =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const phoneRegex = /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/;
        const siteRegex =
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        let isValidSite = siteRegex.test(value);
        if (!isValidEmail && !isValidPhone && !isValidSite) {
          return false;
        }
        return true;
      }
    ),
  course_module: yup.string().required("Campo obrigatório"),
});

export const techSchema = yup.object({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});
