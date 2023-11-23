import AddLink from "@/components/AddLink";
import Adsense from "@/components/Adsense";
import Footer from "@/components/Footer";
import KakaoAdFit from "@/components/KakaoAdfit";
import KakaoAdFitSidebar from "@/components/KakaoAdfitSidebar";
import { Box, Center, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipage | Shorten my link!",
  description: "Effortlessly Shorten Your link with Just One Click",
  applicationName: "Equipage",
  authors: { url: "https://kihyun.me", name: "Kihyun Lee" },
  keywords: [
    "url shorten",
    "link shorten",
    "Shorten Long URLs",
    "Link Shortening Tool",
    "Easy URL Shortener",
  ],
  openGraph: {
    type: "website",
    url: "https://www.equipage.dev/my-ip",
    title: "Equipage | Shorten my link!",
    description: "Effortlessly Shorten Your link with Just One Click",
    images: "/og.png",
  },
  twitter: {
    card: "summary",
    creator: "@daveg7lee",
    title: "Equipage | Shorten my link!",
    description: "Effortlessly Shorten Your link with Just One Click",
    images: "/og.png",
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
      <Text fontSize="2xl" fontWeight="semibold" color="gray.600" as="h1">
        🔗 Shorten my link!
      </Text>
      <AddLink />
      <Box position="absolute" top={0}>
        <KakaoAdFit
          unit_big="DAN-tUahvotQFhWZyh41"
          unit_small="DAN-ONaUt6yWfIY6Q9aY"
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
