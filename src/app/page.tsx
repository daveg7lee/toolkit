import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipage",
  description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  openGraph: {
    type: "website",
    url: "https://equipage.dev",
    title: "Equipage",
    description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  },
};

export default function Home() {
  return (
    <Center flexDir="column" h="100vh">
      <Heading mb="16" fontSize="5xl">
        Equipage
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} gap="12px">
        <Link href="/my-ip">
          <Box
            py="6"
            px="12"
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.300"
            fontSize="lg"
            fontWeight="semibold"
          >
            What is my IP?
          </Box>
        </Link>
        <Link href="/link">
          <Box
            py="6"
            px="12"
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.300"
            fontSize="lg"
            fontWeight="semibold"
          >
            Shorten your link!
          </Box>
        </Link>
      </SimpleGrid>
    </Center>
  );
}
