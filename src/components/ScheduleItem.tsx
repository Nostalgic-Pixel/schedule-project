import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface ScheduleItemProps {
  time: string;
  task: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, task }) => {
  return (
    <Box p={2} bg="white" borderRadius="md" boxShadow="sm" mb={2}>
      <Text fontWeight="bold">{time}</Text>
      <Text>{task}</Text>
    </Box>
  );
};

export default ScheduleItem;
