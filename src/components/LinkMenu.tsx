import { Link, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    text: string;
}

export function LinkMenu({ icon: IconLink, text }: Props) {

    return (
        <Link display="flex" align="center" >
            <Icon as={IconLink} fontSize="20" />
            <Text ml="4" fontWeight="medium">{text}</Text>
        </Link>
    )
}