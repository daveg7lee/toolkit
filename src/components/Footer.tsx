import { HStack, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack
      position="absolute"
      bottom={0}
      justifyContent="center"
      alignItems="center"
      py="8"
      bgColor="white"
      w="full"
    >
      <Text>
        Made by ✨{" "}
        <Link href="https://kihyun.me" target="_blank">
          Ki hyun Lee
        </Link>
      </Text>
    </HStack>
  );
}
