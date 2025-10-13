import { Box, Input, Button } from "@chakra-ui/react";

function PromtInput({ ingredients, setIngredients, handleSubmit }) {
  return (
    <>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="end"
        paddingBottom="50px"
      >
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Type your prompt here..."
            width="100%"
            size="lg"
          />
          <Button onClick={handleSubmit}>Send</Button>
        </form>
      </Box>
    </>
  );
}

export default PromtInput;
