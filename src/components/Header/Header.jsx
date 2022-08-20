import { HeaderMain } from "./Header.style";

const Header = ({ userInfo }) => {
  const { name, course_module } = userInfo;
  return (
    <HeaderMain>
      <div>
        <h1>Olá, {name}</h1>
        <p>{course_module}</p>
      </div>
    </HeaderMain>
  );
};

export default Header;
