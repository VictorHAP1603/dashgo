import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarContextProviderProps = {
    children: ReactNode;
}
type SidebarContextContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarContextContextData);

export const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => {
    const context = useContext(SidebarDrawerContext);
    return context
}