import { Box, Flex, Heading, Divider, Stack, SimpleGrid, Button } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Siderbar";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700 " />

                    <Stack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" />
                        </SimpleGrid>
                    </Stack>

                    <Flex mt="8" justify="flex-end">
                        <Stack spacing="4" direction="row">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </Stack>
                    </Flex>

                </Box>
            </Flex >


        </Box >
    )
}