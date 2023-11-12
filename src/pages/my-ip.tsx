import { Center, Heading, Text } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

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
      <Text fontSize="lg" fontWeight="semibold" color="gray.600">
        Your IP Address is...
      </Text>
      <Heading fontSize="9xl" onClick={copyIPAddress}>
        {ip}
      </Heading>
    </Center>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  return { props: { ip } }; // This will pass the IP to the page as a prop
}
