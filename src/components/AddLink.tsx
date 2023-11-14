"use client";

import { copyToclipboard } from "@/utils";
import {
  HStack,
  Input,
  Button,
  CircularProgress,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddLink() {
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
            : "https://equipage.dev"
        }/${json.id}`
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
    </>
  );
}
