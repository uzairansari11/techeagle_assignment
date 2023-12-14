import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Badge,
  Spacer,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ProductCard = ({ image, name, price, stock, description, weight }) => {
  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      m={4}
    >
      <Image
        src={image || "https://via.placeholder.com/300"}
        alt={name || "product image"}
        margin={"auto"}
        padding={2}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {stock ? "In Stock" : "Out Stock"}
          </Badge>
          <Spacer />
          <Text fontSize="sm">Total Quantity: {stock}</Text>
        </Box>

        <Box
          mt="4"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name || "N/A"}
        </Box>

        <Box>
          <Text mt="2" color="gray.600" fontSize="sm">
            {/* {description.subString(0, 30)}... */}
          </Text>
        </Box>

        <Flex justifyContent="space-between" mt="4">
          <Box>
            <Text fontWeight="bold">${price}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.600">
              Weight: { `${weight}  kg`}
            </Text>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" mt="4" alignItems={"center"}>
          {/* <Flex justifyContent="space-between" alignItems={"center"} gap={1}>
            <IconButton
              aria-label="Add to Cart"
              icon={<AddIcon />}
              colorScheme="teal"
              variant="solid"
            />
            <span style={{ fontWeight: "bold", margin: "0px 3px" }}>1</span>
            <IconButton
              aria-label="Add to Cart"
              icon={<MinusIcon />}
              colorScheme="teal"
              variant="solid"
            />
          </Flex> */}
          <Tooltip label="Add to Cart" hasArrow>
            <Button colorScheme="teal" variant="outline" w={"full"}>
              Add
            </Button>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default React.memo(ProductCard);
