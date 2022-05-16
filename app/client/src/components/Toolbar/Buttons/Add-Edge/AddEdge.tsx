import { IconButton } from "@mui/material";
import add__edge__style from "./add-edge.module.css";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BehaviorSubject, Subject } from "rxjs";
import { useEffect, useState } from "react";

export const editingEdge$ = new BehaviorSubject<boolean>(false);
const AddEdge = () => {
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    editingEdge$.subscribe(setIsEditing);
  }, []);
  return (
    <IconButton
      className={add__edge__style.icon}
      style={{
        backgroundColor: isEditing
          ? "rgba(211, 225, 255, 0.208)"
          : "transparent",
      }}
      size='large'
      onClick={() => {
        editingEdge$.next(!isEditing);
        setIsEditing(!isEditing);
      }}>
      <IoAnalyticsOutline />
    </IconButton>
  );
};

export default AddEdge;
