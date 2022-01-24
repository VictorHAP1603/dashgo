import { useQuery, UseQueryOptions, UseQueryResult } from "react-query"
import { formatDate } from "../helpers/formatDate"
import { api } from "../services/api"

type User = {
    id: string;
    name: string;
    email: string
    created_at: string
}

export type GetUsersResponse = {
    totalCount: number;
    users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
    const { data, headers } = await api.get('/users', {
        params: {
            page
        }
    })

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map(user => {
        return {
            ...user,
            created_at: formatDate(user.createdAt)
        }
    })

    return { users, totalCount }
}

export function useUsers(page: number, options: UseQueryOptions) {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 60 * 10,
        ...options
    }) as UseQueryResult<GetUsersResponse, unknown>
}