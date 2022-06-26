import { ContainerDashboard } from "./style";
import { useState, useEffect } from "react";
import DashHeader from "../../components/DashHeader";
import InfoComponent from "../../components/UserInfo";
import StacksComponents from "../../components/stacks";
import CardList from "../../components/cardsList";

export default function Dashboard() {
  const [displayModal, setDisplayModal] = useState("none");
  const user = JSON.parse(localStorage.getItem("@user"));
  const [stackList, setStackList] = useState(user.techs)

  useEffect(()=> {
    setStackList(user.techs)
  }, [])

  function showModal() {
    setDisplayModal("flex");
  }

  function hideModal() {
    setDisplayModal("none");
  }

  function remove(id) {
    stackList.findIndex((stack) => stack.title === id)
    setStackList(stackList.splice(id, 1))

  }


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
