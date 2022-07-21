import { ContainerDashboard } from "./style";
import { useState, useEffect } from "react";
import DashHeader from "../../components/DashHeader";
import InfoComponent from "../../components/UserInfo";
import StacksComponents from "../../components/stacks";
import CardList from "../../components/cardsList";
import api from "../../Service/api";

export default function Dashboard() {
  const [displayModal, setDisplayModal] = useState("none");
  const user = JSON.parse(localStorage.getItem("@user"));
  const [stackList, setStackList] = useState(user.techs)
  const [newList, setNewList] = useState([])
  useEffect(()=> {
    getTechs()
  }, [stackList])

  function showModal() {
    setDisplayModal("flex");
  }

  function hideModal() {
    setDisplayModal("none");
  }

  const token = JSON.parse(localStorage.getItem("@token"));


  function getTechs(){
    let id = JSON.parse(localStorage.getItem('@user'))
    console.log(id)
    api
    .get(`/users/${id}`)
    .then((respo) => setStackList(respo.data.techs))
    .catch((respo) => console.log(respo))
  }

  function remove(title) {
    let stackToRemove = stackList.find((tech) => tech.title === title).id
  console.log(stackToRemove)
    api
    .delete (`/users/techs/${stackToRemove}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      console.log(stackList);
      setStackList(user.techs)
    })
    .catch((err) => console.log(err));
    };


  return (
    <ContainerDashboard>
      <DashHeader />

      <InfoComponent user={user} />

      <StacksComponents
        displayModal={displayModal}
        setStackList={setStackList}
        stackList={stackList}
        hideModal={hideModal}
        showModal={showModal}
      />

      <CardList  stackList={stackList} remove={remove} />
    </ContainerDashboard>
  );
}
