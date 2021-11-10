import React, { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChackraInput,
  InputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

type Props = InputProps & {
  name: string;
  label?: string;
  error?: FieldError
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({
  name,
  label,
  error = null,
  ...rest },
  ref) => {

  return (
    <FormControl isInvalid={!!error} >
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
        ref={ref}
        {...rest}
      />
      {!!error &&
        <FormErrorMessage>{error.message}</FormErrorMessage>
      }

    </FormControl>
  );
};

export const Input = forwardRef(InputBase)
