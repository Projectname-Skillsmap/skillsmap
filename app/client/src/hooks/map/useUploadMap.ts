import { useReactFlow } from "react-flow-renderer";
import { useAppDispatch, useAppSelector } from "@redux/redux-hooks";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import useChanges from "@hooks/changes/useChanges";
import { CardPayload } from "@utils/card-helpers";
import { Edge, UserNode } from "@skillsmap/server";
import { deleteChangeHistory } from "@changes/changes";

const useUploadMap = () => {
  const router = useRouter();
  const ReactFlowInstance = useReactFlow<CardPayload>();
  const card = useAppSelector(({ card }) => card);
  const dispatch = useAppDispatch();
  const changes = useChanges();
  const level = useRouter().query.level;
  const [createEdge] = useMutation(gql`
    mutation Mutation($edge: Edge!) {
      createEdge(edge: $edge)
    }
  `);

  const [createNode] = useMutation(gql`
    mutation Mutation($node: UserNode!) {
      createNode(node: $node) {
        id
        title
        description
        level
        progress
        uploadDate
      }
    }
  `);

  const [deleteNode] = useMutation(gql`
    mutation DeleteNode($nodeId: String!) {
      deleteNode(nodeID: $nodeId)
    }
  `);
  return async () => {
    console.log({ changes });
    for await (const change of changes) {
      if (change.entity === "node" && change.type === "ADD") {
        try {
          const card = ReactFlowInstance.getNode(change.id);
          console.log({ card });
          const response = await createNode({
            variables: {
              node: {
                description: card?.data.description,
                id: change.id,
                level,
                title: card?.data.title,
                progress: 0,
              } as UserNode,
            },
          });
          console.log({ response });
        } catch (err: any) {
          console.error(err);
        }
      }
      if (change.entity === "edge" && change.type === "ADD") {
        const edge = ReactFlowInstance.getEdge(change.id);
        try {
          const response = await createEdge({
            variables: {
              edge: {
                from: edge?.source,
                to: edge?.target,
              } as Edge,
            },
          });
          console.log({ response });
        } catch (err) {
          console.error(err);
        }
      }

      if (change.entity === "node" && change.type === "DELETE") {
        try {
          const response = await deleteNode({
            variables: {
              nodeId: change.id,
            },
          });
          console.log({ response });
        } catch (err) {
          console.error(err);
        }
      }
    }

    try {
      await fetch(
        `/api/${(router.query.level as string) || "web-development"}`,
        {
          method: "POST",
          body: JSON.stringify({
            nodes: JSON.stringify(ReactFlowInstance.getNodes()),
            edges: JSON.stringify(ReactFlowInstance.getEdges()),
            handlers: JSON.stringify(card.handlers),
          }),
        }
      );
    } catch (err) {
      console.error(err);
    }
    console.log("DELETING HISTORY");
    dispatch(deleteChangeHistory());
  };
};

export default useUploadMap;
