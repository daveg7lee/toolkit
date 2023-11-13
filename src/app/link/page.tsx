"use client";

import KakaoAdFit from "@/components/KakaoAdfit";
import { copyToclipboard } from "@/utils";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useState } from "react";

export default function ShortenURL() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [final, setFinal] = useState("");

  const onClickButton = async () => {
    if (!value || value === "") return;

    try {
      setLoading(true);

      const regex =
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

      if (!regex.test(value)) {
        alert("Please write a valid URL");
        setLoading(false);
        return;
      }

      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://www.equipage.dev"
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
            : "https://www.equipage.dev"
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
      <NextSeo
        title="Shorten your link!"
        description="Effortlessly Shorten Your link with Just One Click"
        openGraph={{
          type: "website",
          url: "https://www.equipage.dev/my-ip",
          title: "Shorten your link!",
          description: "Effortlessly Shorten Your link with Just One Click",
        }}
      />
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
      <Box position="absolute" bottom={0}>
        <KakaoAdFit
          unit_big="DAN-tUahvotQFhWZyh41"
          unit_small="DAN-ONaUt6yWfIY6Q9aY"
        />
      </Box>
    </Center>
  );
}
