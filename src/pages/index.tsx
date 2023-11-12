import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Center flexDir="column" h="100vh">
      <Heading mb="16" fontSize="5xl">
        Magic Toolkits
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
