import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

type Props = LinkProps & {
  icon: ElementType;
  text: string;
  href: string;
};

export function NavLink({ icon: IconLink, text, href, ...rest }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={IconLink} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
