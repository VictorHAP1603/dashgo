import {
  Box,
  Flex,
  Heading,
  Divider,
  Stack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'


import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/SideBar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryCliente";
import { useRouter } from "next/router";

type CreateUserFormDate = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
  name: yup.string().required("Nome Obrigatório"),
  password: yup.string().required("Senha Obrigatória").min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([
    yup.ref("password")
  ], "As senhas precisam ser iguais")

})

export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(async (user: CreateUserFormDate) => {
    const response = await api.post('/users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleSubmitCreateUser: SubmitHandler<CreateUserFormDate> = async (values, event) => {
    await createUser.mutateAsync(values)

    router.push('/users')

  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700 " />

          <Box w="100%" onSubmit={handleSubmit(handleSubmitCreateUser)} as="form">
            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  name="name"
                  label="Nome Completo"
                  error={errors.name}
                  {...register('name')}
                />
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={errors.email}
                  {...register('email')}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  {...register('password')}
                />
                <Input

                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                />
              </SimpleGrid>
            </Stack>

            <Flex mt="8" justify="flex-end">
              <Stack spacing="4" direction="row">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting} >Salvar</Button>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
