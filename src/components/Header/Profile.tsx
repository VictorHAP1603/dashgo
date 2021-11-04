import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

type Props = {
    showProfileData?: boolean
}

export function Profile({ showProfileData }: Props) {
    return (
        <Flex align="center">
            {showProfileData &&
                <Box mr="4" textAlign="right">
                    <Text>Victor Hugo</Text>
                    <Text color="gray.300" fontSize="small" >valvesperricci@yahoo.com.br</Text>
                </Box>
            }

            <Avatar size="md" name="Victor Hugo" src="https://github.com/VictorHAP1603.png" />
        </Flex>
    )
}