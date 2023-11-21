import Adsense from "@/components/Adsense";
import Footer from "@/components/Footer";
import KakaoAdFit from "@/components/KakaoAdfit";
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipage",
  description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  applicationName: "Equipage",
  authors: { url: "https://kihyun.me", name: "Kihyun Lee" },
  keywords: ["tools", "online tools", "equipages", "toolbox", "toolkit"],
  openGraph: {
    type: "website",
    url: "https://equipage.dev",
    title: "Equipage",
    description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  },
  twitter: {
    card: "summary",
    creator: "@daveg7lee",
    title: "Equipage",
    description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  },
};

export default function Home() {
  return (
    <Center flexDir="column" h="100vh">
      <Box position="absolute" top={0}>
        <KakaoAdFit
          unit_big="DAN-vFORmb6ajtcxYFnA"
          unit_small="DAN-sRcvNURVe0WRiLZP"
        />
      </Box>
      {/* <Box position="absolute" top={0}>
        <Adsense />
      </Box> */}
      <Heading mb="10" fontSize="5xl" as="h1">
        🧰 Equipage
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} gap="12px">
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
            🌎 What is my IP?
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
            🔗 Shorten my link!
          </Box>
        </Link>
        <Link href="/Dday-calculator">
          <Box
            py="6"
            px="12"
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.300"
            fontSize="lg"
            fontWeight="semibold"
          >
            🤖 D-day Calculator
          </Box>
        </Link>
      </SimpleGrid>
      <Footer />
    </Center>
  );
}
