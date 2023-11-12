import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Home() {
  return (
    <Center flexDir="column" h="100vh">
      <NextSeo
        title="Equipage"
        description="Discover Your Ultimate Real-Life Toolkit - All in One Place!"
        openGraph={{
          type: "website",
          url: "https://equipage.vercel.app",
          title: "Equipage",
          description:
            "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
        }}
      />
      <Heading mb="16" fontSize="5xl">
        Equipage
      </Heading>
      <SimpleGrid>
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
      </SimpleGrid>
    </Center>
  );
}
