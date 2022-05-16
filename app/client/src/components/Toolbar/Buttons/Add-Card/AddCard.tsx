import React from "react";
import { BsPlusLg } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import add_button__styles from "./add-card.module.css";
import { openModal } from "@redux/widget/modals/modals";

const openCustomizeCardPanel = () => {
  openModal("customize-card");
};

const Add = () => {
  return (
    <IconButton
      className={add_button__styles.icon}
      size='large'
      onClick={openCustomizeCardPanel}>
      <BsPlusLg />
    </IconButton>
  );
};

export default Add;
