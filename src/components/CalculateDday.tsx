"use client";

import { Input, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

export default function CalculateDday() {
  const [dDay, setDday] = useState<string>();
  const [result, setResult] = useState<string>();
  const [days, setDays] = useState<number>();

  useEffect(() => {
    if (!dDay) return;

    const today = dayjs();

    const eventDate = dayjs(dDay);

    const diff = dayjs.duration(eventDate.diff(today));

    setDays(eventDate.diff(today, "days") + 1);

    setResult(
      `${diff.years()} year${
        diff.years() > 1 ? "s" : ""
      } ${diff.months()} month${diff.months() > 1 ? "s" : ""} ${
        diff.days() + 1
      } day${diff.days() + 1 > 1 ? "s" : ""} left`
    );
  }, [dDay]);

  return (
    <VStack>
      <Input
        type="date"
        value={dDay}
        onChange={(e) => setDday(e.target.value)}
        mb="14px"
      />
      {days && (
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          {days} days left
        </Text>
      )}
      {result && (
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          {result}
        </Text>
      )}
    </VStack>
  );
}
