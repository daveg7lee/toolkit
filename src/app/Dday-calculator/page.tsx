import Adsense from "@/components/Adsense";
import CalculateDday from "@/components/CalculateDday";
import Footer from "@/components/Footer";
import KakaoAdFit from "@/components/KakaoAdfit";
import KakaoAdFitSidebar from "@/components/KakaoAdfitSidebar";
import { Box, Center, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipage | D-day Calculator",
  description: "Effortlessly Find how many days left with Just One Click",
  applicationName: "Equipage",
  authors: { url: "https://kihyun.me", name: "Kihyun Lee" },
  keywords: ["D-day", "D-day calculator", "how many days left"],
  openGraph: {
    type: "website",
    url: "https://www.equipage.dev/Dday-calculator",
    title: "Equipage | D-day Calculator",
    description: "Effortlessly Find how many days left with Just One Click",
    images: "/og.png",
  },
  twitter: {
    card: "summary",
    creator: "@daveg7lee",
    title: "Equipage | D-day Calculator",
    description: "Effortlessly Find how many days left with Just One Click",
    images: "/og.png",
  },
};

export default function DdayCalculator() {
  return (
    <Center h="100vh" flexDir="column" maxW={["320px", "728px"]} mx="auto">
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        color="gray.600"
        mb="52px"
        as="h1"
      >
        🤖 D-day Calculator
      </Text>
      <CalculateDday />
      <Box position="absolute" top={0}>
        <KakaoAdFit
          unit_big="DAN-F0jtjKKAc7GHoZFb"
          unit_small="DAN-lIPbgKrP6TYCJthv"
        />
      </Box>
      <Box
        position="absolute"
        right={0}
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <KakaoAdFitSidebar unit="DAN-s1vjHUZPhw33gGKM" position="right" />
      </Box>
      <Box
        position="absolute"
        left={0}
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <KakaoAdFitSidebar unit="DAN-GnJRFffO9sVgQ8Ew" position="left" />
      </Box>
      {/* <Box position="absolute" top={0}>
        <Adsense />
      </Box> */}
      <Footer />
    </Center>
  );
}
