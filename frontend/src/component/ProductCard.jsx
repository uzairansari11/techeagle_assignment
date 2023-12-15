import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Badge,
  Spacer,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
const ProductCard = ({
  _id,
  image,
  name,
  price,
  stock,
  description,
  weight,
  handler,
  quantity,
  buttonText,
  colorScheme,
  tooltipLabel,
  showQuantityButton,
  handleProductQuantity,
}) => {
  const addToCart = () => {
    const payload = {
      image,
      name,
      price,
      description,
      weight,
      _id,
      quantity: 1,
    };
    handler(payload);
  };
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
            {stock && stock
              ? "In Stock"
              : "Out Stock" || quantity
              ? "Quantity"
              : "None"}
          </Badge>
          <Spacer />
          <Text fontSize="sm">Total Quantity: {stock || quantity}</Text>
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
          <Text mt="2" color="gray.600" fontSize="sm" isTruncated>
            {description}
          </Text>
        </Box>

        <Flex justifyContent="space-between" mt="4">
          <Box>
            <Text fontWeight="bold">${price}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.600">
              Weight: {`${weight}  kg`}
            </Text>
          </Box>
        </Flex>

        <Flex
          justifyContent="space-between"
          mt="4"
          alignItems={"center"}
          columnGap={2}
        >
          {showQuantityButton ? (
            <Flex justifyContent="space-between" alignItems={"center"} gap={1}>
              <IconButton
                aria-label="Add to Cart"
                icon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                onClick={() =>
                  handleProductQuantity({ _id, quantity: quantity + 1 })
                }
              />
              <span style={{ fontWeight: "bold", margin: "0px 3px" }}>
                {quantity ? quantity : 0}
              </span>
              <IconButton
                aria-label="Add to Cart"
                icon={<MinusIcon />}
                colorScheme="teal"
                variant="solid"
                isDisabled={quantity === 1}
                onClick={() =>
                  handleProductQuantity({ _id, quantity: quantity - 1 })
                }
              />
            </Flex>
          ) : null}

          <Tooltip label={tooltipLabel || "Nothing"} hasArrow>
            <Button
              colorScheme={colorScheme || "teal"}
              variant="outline"
              w={"full"}
              onClick={addToCart}
            >
              {buttonText}
            </Button>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default React.memo(ProductCard);
