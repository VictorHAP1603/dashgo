import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

type Props = LinkProps & {
    icon: ElementType;
    text: string;
}

export function NavLink({ icon: IconLink, text, ...rest }: Props) {

    return (
        <Link display="flex" align="center" {...rest} >
            <Icon as={IconLink} fontSize="20" />
            <Text ml="4" fontWeight="medium">{text}</Text>
        </Link>
    )
}