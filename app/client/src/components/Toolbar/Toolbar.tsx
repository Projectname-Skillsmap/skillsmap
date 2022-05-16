import { Stack } from "@mui/material";
import AddCard from "./Buttons/Add-Card/AddCard";
import AddEdge from "./Buttons/Add-Edge/AddEdge";
import toolbar__styles from "./toolbar.module.css";
const Toolbar = () => {
  return (
    <Stack className={toolbar__styles.toolbar} spacing='2rem'>
      <AddCard></AddCard>
      <AddEdge></AddEdge>
    </Stack>
  );
};

export default Toolbar;
