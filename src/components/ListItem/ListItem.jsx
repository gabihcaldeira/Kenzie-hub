import { TagLi } from "./ListItem.style";
import { IoTrashSharp } from "react-icons/io5";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

const ListItem = ({ id, status, title }) => {
  const { setTechInfo, warnDeleteTech, setIsModalOpen, setModalType } =
    useContext(TechContext);

  function openWarnDelete(id, title, status) {
    setTechInfo({ id, title, status });
    warnDeleteTech();
  }

  function openModalUpdate(event) {
    setTechInfo({ id, title, status });
    if (event.target.tagName != "svg" && event.target.tagName != "path") {
      setModalType("update");
      setIsModalOpen(true);
    }
  }

  return (
    <TagLi onClick={openModalUpdate}>
      <h4>{title}</h4>
      <div>
        <p>{status}</p>

        <IoTrashSharp
          className="trash__icon"
          onClick={() => openWarnDelete(id, title, status)}
        />
      </div>
    </TagLi>
  );
};

export default ListItem;
