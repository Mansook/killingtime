import React from "react";
import Header from "./Header";
import Template from "../Template";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectMod } from "../modules/slices/booklist";
import OutofModal from "./OutofModal";
import Modal from "./Modal";

const MainPage = () => {
  const selectModal = useSelector(selectMod);
  return (
    <div>
      <>
        <Header text="헤더" />
        <Template />
        <Footer text="푸터" />
        {selectModal ? (
          <>
            <OutofModal />
            <Modal />
          </>
        ) : (
          <div />
        )}
      </>
    </div>
  );
};

export default MainPage;
