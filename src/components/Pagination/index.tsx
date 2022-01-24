import { Stack, Button, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

type Props = {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, i) => from + i + 1)
        .filter(page => page > 0)
}

export default function Pagination({
    onPageChange,
    totalCountOfRegisters,
    currentPage = 1,
    registersPerPage = 10
}: Props) {
    const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

    const previousPage = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
        : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
        : []


    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">

                {currentPage > (1 + siblingCount) && (
                    <>
                        <PaginationItem number={1} onPageChange={onPageChange} />
                        {currentPage > (2 + siblingCount) && (
                            <Text color="gray.300" width="8" textAlign="center">...</Text>
                        )}
                    </>
                )}

                {previousPage.length > 0 && previousPage.map((page, i) => (
                    <PaginationItem key={i} number={page} onPageChange={onPageChange} />
                ))}

                <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />

                {nextPages.length > 0 && nextPages.map((page, i) => (
                    <PaginationItem key={i} number={page} onPageChange={onPageChange} />
                ))}

                {(currentPage + siblingCount) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingCount) < lastPage && (
                            <Text color="gray.300" width="8" textAlign="center">...</Text>
                        )}
                        <PaginationItem number={lastPage} onPageChange={onPageChange} />
                    </>
                )}

            </Stack>
        </Stack>
    )
}