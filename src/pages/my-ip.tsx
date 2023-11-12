import { Center, Heading, Text } from "@chakra-ui/react";
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
        description="Discover Your IP Address Instantly with a Single Click – Fast, Easy, and Accurate!"
        openGraph={{
          type: "website",
          url: "https://equipage.vercel.app/my-ip",
          title: "What is my IP?",
          description:
            "Discover Your IP Address Instantly with a Single Click – Fast, Easy, and Accurate!",
          images: [
            {
              url: "/share.png",
              width: 1200,
              height: 630,
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
    </Center>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  return { props: { ip } }; // This will pass the IP to the page as a prop
}
