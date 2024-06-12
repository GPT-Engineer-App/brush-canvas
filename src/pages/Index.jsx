import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";

const Index = () => {
  const [color, setColor] = useState("#FF0000");
  const [brushSize, setBrushSize] = useState(5);

  return (
    <Flex>
      <Sidebar setColor={setColor} setBrushSize={setBrushSize} />
      <Box flex="1">
        <Canvas color={color} brushSize={brushSize} />
      </Box>
    </Flex>
  );
};

export default Index;