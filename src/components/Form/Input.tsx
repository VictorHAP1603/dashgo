import React from "react";
import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps,
} from "@chakra-ui/react";

type Props = InputProps & {
  name: string;
  label?: string;
};

export const Input = ({ name, label, ...rest }: Props) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};
