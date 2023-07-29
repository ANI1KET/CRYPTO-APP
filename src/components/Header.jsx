import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack display={"Flex"} justifyContent={"space-between"} p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <HStack >
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/">Home</Link>
        </Button>
      </HStack>
      <HStack>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
