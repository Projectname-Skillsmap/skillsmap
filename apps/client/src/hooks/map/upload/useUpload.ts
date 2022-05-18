import useUploadMap from "./map/useMapUpload";
import useGraphUpload from "./graph/useGraphUpload";

const useUpload = () => {
  const uploadMap = useUploadMap();
  const uploadGraph = useGraphUpload();

  return async () => {
    await uploadMap();
    await uploadGraph();
  };
};

export default useUpload;
