import React from 'react';
import { Text, Link, Box } from "@chakra-ui/react";

interface Props {
  text: string;
}

const ColorfulHashtagsWithNewLines: React.FC<Props> = ({ text }) => {
  // Split the text into lines based on newline characters
  const lines = text.split('\n');

  return (
    <Box>
      {lines.map((line, index) => {
        // Split the line into words
        const words = line.split(/\s+/);

        return (
          <Text mt={index > 0 ? 4 : 0} key={index}>
            {words.map((word, wordIndex) => {
              if (word.startsWith('#')) {
                const url = `https://twitter.com/hashtag/${word.slice(1)}`;

                return (
                  <Link href={url} isExternal color="blue.500" key={wordIndex}>
                    {word + ' '}
                  </Link>
                );
              }

              // Add a space after each word to maintain the original spacing
              return word + ' ';
            })}
          </Text>
        );
      })}
    </Box>
  );
};

export default ColorfulHashtagsWithNewLines;
