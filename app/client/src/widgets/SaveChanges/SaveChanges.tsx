import save_changes__style from "./save-changes.module.css";
import { HiOutlineExclamation } from "react-icons/hi";
import { closeModal } from "@redux/widget/modals/modals";
import useUploadMap from "@hooks/map/useUploadMap";
import useAnimate from "@hooks/animation/useAnimate";
import { FC } from "react";
const SaveChanges: FC<{ id: string }> = ({ id }) => {
  const uploadMap = useUploadMap();
  const animateOut = useAnimate(id);
  return (
    <div className={save_changes__style.container}>
      <div className={save_changes__style.warning__container}>
        <div className={save_changes__style.title}>
          <HiOutlineExclamation className={save_changes__style.icon} />
          <div className={save_changes__style.message}>
            Schimbarile tale nu vor fi salvate daca pleci acum
          </div>
        </div>
        <div className={save_changes__style.dialog__container}>
          <div className={save_changes__style.question}>
            Doresti sa salvezi schimbarile
          </div>
          <div className={save_changes__style.options}>
            <button
              onClick={() => {
                closeModal("save-changes");
                uploadMap();
                animateOut();
              }}
              className={save_changes__style.button}>
              DA
            </button>
            <button
              onClick={() => {
                animateOut();
                closeModal("save-changes");
              }}
              className={save_changes__style.button}>
              NU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveChanges;
