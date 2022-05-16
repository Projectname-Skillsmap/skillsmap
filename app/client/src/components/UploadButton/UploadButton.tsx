import { Fab } from "@mui/material";
import { AiOutlineUpload } from "react-icons/ai";
import useUpload from "@hooks/map/upload/useUpload";

const UploadButton = () => {
  const upload = useUpload();
  return (
    <Fab
      aria-label='add'
      sx={{
        position: "absolute",
        right: "2rem",
        top: "2rem",
        fontSize: "1.7rem",
        backgroundColor: "rgb(35, 36, 43)",
        color: "white",
        "&:hover": {
          backgroundColor: "rgb(35, 36, 43)",
        },
      }}
      onClick={upload}>
      <AiOutlineUpload />
    </Fab>
  );
};

export default UploadButton;
