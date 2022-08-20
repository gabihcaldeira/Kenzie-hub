import { Modal } from "./ModalForm.style";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { techSchema } from "../../validators/formValidators";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useState } from "react";

const ModalForm = () => {
  const {
    addNewTech,
    modalType,
    setIsModalOpen,
    techInfo,
    techUpdate,
    warnDeleteTech,
  } = useContext(TechContext);

  const [statusInput, setStatusInput] = useState(
    modalType === "add" ? "" : techInfo.status
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(techSchema) });

  function closeModal() {
    setIsModalOpen(false);
  }

  window.addEventListener("click", (event) => {
    const modal = document.querySelector(".modal");
    if (event.target === modal) {
      setIsModalOpen(false);
    }
  });

  return (
    <Modal className="modal" errors={errors}>
      <div className="modal__content">
        <div className="modal__header">
          <h2>
            {modalType === "add"
              ? "Cadastrar Tecnologia"
              : "Atualizar Tecnologia"}
          </h2>
          <IoCloseCircleOutline className="modal__close" onClick={closeModal} />
        </div>
        <form
          className="modal__form"
          onSubmit={
            modalType === "add"
              ? handleSubmit(addNewTech)
              : handleSubmit(techUpdate)
          }
        >
          {modalType === "add" ? (
            <>
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                {...register("title")}
                placeholder="Javascript"
              />
              <p className="errorMsg errorMsg-title">{errors.title?.message}</p>
            </>
          ) : (
            <>
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                {...register("title")}
                className="update__tech-title"
                defaultValue={techInfo.title}
                readOnly
              />
              <p className="errorMsg errorMsg-fixed-title">
                Não é possível atualizar o nome.
              </p>
            </>
          )}

          <label htmlFor="status">Selecionar status</label>
          <select
            {...register("status")}
            value={statusInput}
            onChange={(e) => setStatusInput(e.target.value)}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          {modalType === "add" ? (
            <div className="buttons">
              <button className="buttons button__add" type="submit">
                Cadastrar Tecnologia
              </button>
            </div>
          ) : (
            <div className="buttons">
              <button className="buttons button__save" type="submit">
                Salvar Alterações
              </button>
              <button
                type="button"
                onClick={warnDeleteTech}
                className="buttons button__delete"
              >
                Excluir
              </button>
            </div>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default ModalForm;
