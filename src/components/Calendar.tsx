import React, { useState, useEffect } from "react";
import { Box, Grid, Heading, Text, Button, VStack } from "@chakra-ui/react";
import ScheduleForm from "./ScheduleForm";
import ScheduleItem from "./ScheduleItem";
import WeekNavigator from "./WeekNavigator";
import YearNavigator from "./YearNavigator";

interface Task {
  time: string;
  task: string;
}

const getWeekDates = (startDate: Date) => {
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    weekDates.push(date);
  }
  return weekDates;
};

const Calendar: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState<Record<string, Task[]>>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  // added
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  // end
  const weekDates = getWeekDates(date);
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    // Load schedule from localStorage
    const savedSchedule = localStorage.getItem("schedule");
    if (savedSchedule) {
      setSchedule(JSON.parse(savedSchedule));
    }
  }, []);

  useEffect(() => {
    // Save schedule to localStorage
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const handleAddTask = (day: string, time: string, task: string) => {
    if (day && time && task) {
      setSchedule((prevSchedule) => {
        const updatedSchedule = {
          ...prevSchedule,
          [day]: [...prevSchedule[day], { time, task }],
        };
        localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
        return updatedSchedule;
      });
    }
  };

  const weekStartDate = new Date(date);
  weekStartDate.setDate(date.getDate() - date.getDay() + 1);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <WeekNavigator date={date} setDate={setDate} />
        <YearNavigator date={date} setDate={setDate} />
        <Heading mb={4}>
          Week of{" "}
          {weekStartDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Heading>
        <Grid templateColumns="repeat(7, 1fr)" gap={4}>
          {dayNames.map((day, index) => (
            <Box key={day} p={4} bg="blue.500" borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                {weekDates[index].toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </Heading>
              {schedule[day].map((item, index) => (
                <ScheduleItem key={index} time={item.time} task={item.task} />
              ))}
            </Box>
          ))}
        </Grid>
        <Box mt={6}>
          <ScheduleForm onSubmit={handleAddTask} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Calendar;
