import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { GoStop } from "react-icons/go";
import api from "../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [userInfo, setUserInfo] = useState({});
  const [userTechs, setUserTechs] = useState([]);
  const [techInfo, setTechInfo] = useState({});

  function addNewTech(data) {
    const message = toast.loading("Processando...", { theme: "dark" });
    const token = localStorage.getItem("@KenzieHub_Token");

    api
      .post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.update(message, {
          render: "Tecnologia adicionada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          theme: "dark",
        });
        setIsModalOpen(false);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        toast.update(message, {
          render: (
            <>
              <h4 className="toast__title">
                Não foi possível cadastrar essa tecnologia.
              </h4>
              <p className="toast__description">{errorMessage}</p>
            </>
          ),
          type: "error",
          isLoading: false,
          autoClose: 3000,
          theme: "dark",
        });
        console.log(err);
      });
  }

  function deleteTech(techId) {
    const message = toast.loading("Processando...", { theme: "dark" });
    const token = localStorage.getItem("@KenzieHub_Token");
    api
      .delete(`users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.update(message, {
          render: "Tecnologia deletada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          theme: "dark",
        });
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        toast.update(message, {
          render: (
            <>
              <h4 className="toast__title">
                Não foi possível deletar a tecnologia.
              </h4>
              <p className="toast__description">{errorMessage}</p>
            </>
          ),
          type: "error",
          isLoading: false,
          autoClose: 3000,
          theme: "dark",
        });
        console.log(err);
      });
  }

  function deletingTech() {
    deleteTech(techInfo.id);
    setIsModalOpen(false);
  }

  function warnDeleteTech() {
    const warnMsg = ({ closeToast }) => (
      <>
        <h3 className="toast__warn-title">
          Tem certeza que quer deletar essa tecnologia?
        </h3>
        <p className="toast__warn-description">
          Essa ação não pode ser desfeita!
        </p>
        <div className="toast__warn-buttons">
          <button
            className="toast__warn-button button-delete"
            onClick={() => {
              deletingTech();
              closeToast();
            }}
          >
            Deletar
          </button>
          <button
            className="toast__warn-button button-cancel"
            onClick={closeToast}
          >
            Cancelar
          </button>
        </div>
      </>
    );
    toast.warning(warnMsg, {
      icon: () => <GoStop className="toast__warning-icon" />,
      position: "top-center",
      theme: "dark",
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      className: "toast__deleteWarning",
    });
  }

  function techUpdate(data) {
    const message = toast.loading("Processando...", { theme: "dark" });
    const token = localStorage.getItem("@KenzieHub_Token");
    const techId = techInfo.id;
    const { status } = data;
    api
      .put(
        `users/techs/${techId}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast.update(message, {
          render: "Tecnologia atualizada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          theme: "dark",
        });
        setIsModalOpen(false);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        toast.update(message, {
          render: (
            <>
              <h4 className="toast__title">
                Não foi possível atualizar a tecnologia.
              </h4>
              <p className="toast__description">{errorMessage}</p>
            </>
          ),
          type: "error",
          isLoading: false,
          autoClose: 3000,
          theme: "dark",
        });
        console.log(err);
      });
  }

  return (
    <TechContext.Provider
      value={{
        addNewTech,
        userInfo,
        setUserInfo,
        userTechs,
        setUserTechs,
        deleteTech,
        isModalOpen,
        setIsModalOpen,
        modalType,
        setModalType,
        techInfo,
        setTechInfo,
        techUpdate,
        deletingTech,
        warnDeleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
