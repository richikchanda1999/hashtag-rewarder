'use client';

import { FC } from "react";
import { Text, TextProps } from "@chakra-ui/react";

const ResponsiveText: FC<TextProps> = ({ children, ...props }: TextProps) => {
    return (
        <Text
            fontSize={{ base: "xl", sm: "3xl", lg: "6xl" }}
            color="brand.400"
            {...props}
        >
            {children}
        </Text>
    );
};

export default ResponsiveText;