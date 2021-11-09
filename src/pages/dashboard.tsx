import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

// Componentes
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar"

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },

    grid: {
        show: false
    },

    dataLabels: {
        enabled: false
    },

    tooltip: {
        enabled: false,

    },

    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },

        axisTicks: {
            color: theme.colors.gray[600]
        },

        categories: [
            '2021-03-18T',
            '2021-03-19T',
            '2021-03-22T',
            '2021-03-25T',
            '2021-03-28T',
            '2021-03-29T',
        ],


    },

    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

const series = [
    { name: 'series1', data: [31, 120, 10, 56, 18, 109] }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart type="area" height={160} options={options} series={series} />
                    </Box>

                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4"> Taxa de Abertura </Text>
                        <Chart type="area" height={160} options={options} series={series} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    )
}