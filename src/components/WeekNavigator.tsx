import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface WeekNavigatorProps {
  date: Date;
  setDate: (date: Date) => void;
}

const WeekNavigator: React.FC<WeekNavigatorProps> = ({ date, setDate }) => {
  const goToPreviousWeek = () => {
    setDate(new Date(date.setDate(date.getDate() - 7)));
  };

  const goToNextWeek = () => {
    setDate(new Date(date.setDate(date.getDate() + 7)));
  };

  return (
    <HStack spacing={4} mb={4}>
      <Button onClick={goToPreviousWeek}>Previous Week</Button>
      <Button onClick={goToNextWeek}>Next Week</Button>
    </HStack>
  );
};

export default WeekNavigator;
