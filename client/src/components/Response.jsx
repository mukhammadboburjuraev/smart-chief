import { Box } from "@chakra-ui/react";
import React from "react";

function Response({ recipes }) {
  return (
    <>
      <Box width="80%">{recipes ? <p>{recipes}</p> : <p>Welcome</p>}</Box>
    </>
  );
}

export default Response;
