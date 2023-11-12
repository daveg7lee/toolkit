import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";

interface IMyIPProps {
  ip: string;
}

export default function MyIP({ ip }: IMyIPProps) {
  const copyIPAddress = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      alert("Your IP address has been copied!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Center h="100vh" flexDir="column">
      <NextSeo
        title="What is my IP?"
        description="Effortlessly Find Your IP Address with Just One Click"
        openGraph={{
          type: "website",
          url: "https://equipage.vercel.app/my-ip",
          title: "What is my IP?",
          description: "Effortlessly Find Your IP Address with Just One Click",
          images: [
            {
              url: "/share.png",
              width: 1200,
              height: 630,
            },
            {
              url: "/600x315.png",
              width: 600,
              height: 315,
            },
          ],
        }}
      />
      <Text fontSize="lg" fontWeight="semibold" color="gray.600">
        Your IP Address is...
      </Text>
      <Heading
        fontSize="8xl"
        onClick={copyIPAddress}
        wordBreak="break-all"
        textAlign="center"
      >
        {ip}
      </Heading>
      <Box
        maxW={["90%", "80%", "60%"]}
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
    </Center>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  return { props: { ip } }; // This will pass the IP to the page as a prop
}
