"use client";

import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function IP() {
  const [data, setData] = useState<{ ip_address: string }>();

  const getIPData = async () => {
    const res = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://www.equipage.dev"
      }/my-ip/api`
    );

    setData(res.data);
  };

  useEffect(() => {
    getIPData();
  }, []);

  return (
    <Heading fontSize="8xl" wordBreak="break-all" textAlign="center">
      {data?.ip_address}
    </Heading>
  );
}
