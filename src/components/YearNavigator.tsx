import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface YearNavigatorProps {
  date: Date;
  setDate: (date: Date) => void;
}

const YearNavigator: React.FC<YearNavigatorProps> = ({ date, setDate }) => {
  const goToPreviousYear = () => {
    setDate(new Date(date.setDate(date.getDate() - 364)));
  };

  const goToNextYear = () => {
    setDate(new Date(date.setDate(date.getDate() + 364)));
  };

  return (
    <HStack spacing={4} mb={4}>
      <Button onClick={goToPreviousYear}>Previous Year</Button>
      <Button onClick={goToNextYear}>Next Year</Button>
    </HStack>
  );
};

export default YearNavigator;
