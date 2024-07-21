import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

interface ScheduleFormProps {
  onSubmit: (day: string, time: string, task: string) => void;
  defaultDay?: string;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({
  onSubmit,
  defaultDay = "Monday",
}) => {
  const [day, setDay] = useState(defaultDay);
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    onSubmit(day, time, task);
    setTime("");
    setTask("");
  };

  return (
    <Box p={4} bg="secondary" borderRadius="md" boxShadow="md">
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel htmlFor="day">Day</FormLabel>
          <Select id="day" value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="time">Time</FormLabel>
          <Input
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="task">Task</FormLabel>
          <Input
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>
          Add Task
        </Button>
      </VStack>
    </Box>
  );
};

export default ScheduleForm;
