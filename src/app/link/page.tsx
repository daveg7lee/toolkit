"use client";

import { copyToclipboard } from "@/utils";
import {
  Button,
  Center,
  CircularProgress,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function ShortenURL() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [final, setFinal] = useState("");

  const onClickButton = async () => {
    if (!value || value === "") return;

    const regex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (!regex.test(value)) {
      alert("Please write a valid URL");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://equipage.dev/"
        }/link/api`,
        {
          method: "POST",
          body: JSON.stringify({ value }),
        }
      );

      const json = await res.json();

      setFinal(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://equipage.dev/"
        }/${json.id}`
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center
      h="100vh"
      flexDir="column"
      maxW={["320px", "728px"]}
      mx="auto"
      gap="22px"
    >
      <Head>
        <title>Shorten your link!</title>
        <meta
          name="description"
          content="Effortlessly Shorten Your link with Just One Click"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.equipage.dev/link" />
        <meta property="og:title" content="Shorten your link!" />
        <meta
          property="og:description"
          content="Effortlessly Shorten Your link with Just One Click"
        />
        <meta property="og:site_name" content="Equipage" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
        Shorten your link!
      </Text>
      <HStack>
        <Input
          placeholder="Paste your link here."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
        />
        <Button onClick={onClickButton} size="lg">
          {loading ? (
            <CircularProgress isIndeterminate color="gray.300" size="24px" />
          ) : (
            "Shorten"
          )}
        </Button>
      </HStack>
      {final && final !== "" && (
        <HStack>
          <Text>
            Done! Here is your URL: <Link color="blue.400">{final}</Link>
          </Text>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyToclipboard(final)}
          >
            Copy
          </Button>
        </HStack>
      )}
    </Center>
  );
}
