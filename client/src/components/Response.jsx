import { Box } from "@chakra-ui/react";
import React from "react";

function Response({ recipes }) {
  return (
    <>
      <Box width="80%">
        <p>{recipes}</p>
      </Box>
    </>
  );
}

export default Response;
