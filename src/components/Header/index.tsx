import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" align="center" px="6" >
            {!isWideVersion && (
                <IconButton
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    aria-label="Open navigation"
                    mr="2"
                />
            )}
            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}