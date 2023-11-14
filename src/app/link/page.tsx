import AddLink from "@/components/AddLink";
import Footer from "@/components/Footer";
import KakaoAdFit from "@/components/KakaoAdfit";
import { Box, Center, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shorten your link!",
  description: "Effortlessly Shorten Your link with Just One Click",
  openGraph: {
    type: "website",
    url: "https://www.equipage.dev/my-ip",
    title: "Shorten your link!",
    description: "Effortlessly Shorten Your link with Just One Click",
  },
};

export default function ShortenURL() {
  return (
    <Center
      h="100vh"
      flexDir="column"
      maxW={["320px", "728px"]}
      mx="auto"
      gap="22px"
    >
      <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
        🔗 Shorten your link!
      </Text>
      <AddLink />
      <Box position="absolute" top={0}>
        <KakaoAdFit
          unit_big="DAN-tUahvotQFhWZyh41"
          unit_small="DAN-ONaUt6yWfIY6Q9aY"
        />
      </Box>
      <Footer />
    </Center>
  );
}
