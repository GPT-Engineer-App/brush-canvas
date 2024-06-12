import { Box, VStack, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { useState } from "react";

const colors = ["#FF0000", "#FFFF00", "#0000FF", "#FFFFFF", "#000000"];

const Sidebar = ({ setColor, setBrushSize }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentBrushSize, setCurrentBrushSize] = useState(5);

  const handleColorChange = (color) => {
    setCurrentColor(color);
    setColor(color);
  };

  const handleBrushSizeChange = (size) => {
    setCurrentBrushSize(size);
    setBrushSize(size);
  };

  return (
    <Box p={4} bg="gray.100" width="200px" height="100vh" boxShadow="md">
      <VStack spacing={4}>
        <Text fontSize="xl">Colors</Text>
        {colors.map((color) => (
          <Button
            key={color}
            bg={color}
            width="100%"
            height="40px"
            onClick={() => handleColorChange(color)}
            border={currentColor === color ? "2px solid black" : "none"}
          />
        ))}
        <Text fontSize="xl" mt={8}>Brush Size</Text>
        <Slider
          aria-label="brush-size-slider"
          defaultValue={currentBrushSize}
          min={1}
          max={20}
          step={1}
          onChange={handleBrushSizeChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>
    </Box>
  );
};

export default Sidebar;