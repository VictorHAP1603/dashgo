import Icon from "@chakra-ui/icon";
import { Box, Stack, Text, Link } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { LinkMenu } from "./LinkMenu";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small" textTransform="uppercase" >Geral</Text>

                    <Stack spacing="4" mt="8" align="stretch">
                        <LinkMenu icon={RiDashboardLine} text="Dashboard" />

                        <LinkMenu icon={RiContactsLine} text="Usuários" />
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small" textTransform="uppercase" >Automação</Text>

                    <Stack spacing="4" mt="8" align="stretch">
                        <LinkMenu icon={RiInputMethodLine} text="Formulários" />
                        <LinkMenu icon={RiGitMergeLine} text="Automação" />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}