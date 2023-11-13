import Footer from "@/components/Footer";
import IP from "@/components/IP";
import KakaoAdFit from "@/components/KakaoAdfit";
import { Box, Center, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipage | What is my IP?",
  description: "Effortlessly Find Your IP Address with Just One Click",
  openGraph: {
    type: "website",
    url: "https://www.equipage.dev/my-ip",
    title: "Equipage | What is my IP?",
    description: "Effortlessly Find Your IP Address with Just One Click",
  },
};

export default function MyIP() {
  // const copyIPAddress = async () => {
  //   try {
  //     await navigator.clipboard.writeText(data.ip_address);
  //     alert("Your IP address has been copied!");
  //   } catch (err) {
  //     console.error("Failed to copy text: ", err);
  //   }
  // };

  return (
    <Center h="100vh" flexDir="column" px="6">
      <Text fontSize="lg" fontWeight="semibold" color="gray.600">
        🌎 Your IP Address is...
      </Text>
      <IP />
      <Box
        maxW={["320px", "728px"]}
        mt="8"
        borderTop="1px solid"
        borderColor="gray.300"
        pt="8"
      >
        <Text fontWeight="semibold" mb="2">
          What is IP?
        </Text>
        <Text fontSize="sm">
          An IP address is like your home address, but for your computer or
          phone when they talk to each other over the internet. Just like the
          mailman needs your home address to deliver your mail, computers use IP
          addresses to send information to the right place. There are two kinds:
          one is short and has numbers and dots (IPv4), and the other is long
          with numbers and letters and uses colons (IPv6) because we have so
          many devices now that we need more addresses. Sometimes your device
          keeps the same IP address, like your home doesn't move, but sometimes
          it changes, like if you go on a vacation. It's a special code that
          helps make sure the information on the internet goes to the right
          computer.
        </Text>
      </Box>
      <Box position="absolute" top={0}>
        <KakaoAdFit
          unit_big="DAN-YCV4ENi87zDLZf0T"
          unit_small="DAN-Qdw5xOlsJkt2UMXm"
        />
      </Box>
      <Footer />
    </Center>
  );
}
