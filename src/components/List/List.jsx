import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import ListItem from "../ListItem/ListItem";
import { Section, TagUl } from "./List.style";

const List = ({ userTechs }) => {
  const { setIsModalOpen, setModalType } = useContext(TechContext);

  function openAddModal() {
    setIsModalOpen(true);
    setModalType("add");
  }

  return (
    <Section>
      <div className="section__header">
        <h3>Tecnologias</h3>
        <button onClick={openAddModal}>+</button>
      </div>
      <TagUl>
        {userTechs.map(({ id, status, title }, index) => (
          <ListItem key={index} id={id} status={status} title={title} />
        ))}
      </TagUl>
    </Section>
  );
};

export default List;
