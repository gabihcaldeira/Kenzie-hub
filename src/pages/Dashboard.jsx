import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { TechContext } from "../contexts/TechContext";
import api from "../services/api";

const Dashboard = () => {
  const { userInfo, userTechs, setUserInfo, setUserTechs } =
    useContext(TechContext);
  const { logOut, navigate } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub_Token");
    if (token) {
      api
        .get(`profile`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const { name, course_module, techs } = response.data;
          const user = {
            name,
            course_module,
          };
          setUserInfo(user);
          techs.sort((a, b) => {
            const timeA = new Date(a.updated_at);
            const timeB = new Date(b.updated_at);

            return timeA.getMilliseconds() - timeB.getMilliseconds();
          });
          setUserTechs(techs);
        });
    } else {
      navigate("/", { replace: true });
    }
  }, [userTechs, setUserInfo, setUserTechs]);

  return (
    <>
      <Nav>
        <button onClick={logOut}>Sair</button>
      </Nav>
      {userInfo && <Header userInfo={userInfo} />}
      {userTechs && <List userTechs={userTechs} />}
    </>
  );
};

export default Dashboard;
