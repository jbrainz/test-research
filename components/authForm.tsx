import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

type modeType = "signup" | "signin";

const AuthForm: FC<{ mode: modeType }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex justify="center" align="center" color="white" height="100px">
        hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh- 100px)">
        <Box padding="50px" bg="gray.700" borderRadius="6px">
          <form action="">
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => e.target.value}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => e.target.value}
            />
            <Button type="submit" bg="green.500" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
export default AuthForm;
