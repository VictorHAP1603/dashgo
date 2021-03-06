import { Stack } from "@chakra-ui/layout";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} text="Dashboard" href="/dashboard" />
        <NavLink icon={RiContactsLine} text="Usuários" href="/users" />
      </NavSection>

      <NavSection title="Automação">
        <NavLink icon={RiInputMethodLine} text="Formulários" href="/forms" />
        <NavLink icon={RiGitMergeLine} text="Automação" href="/automation" />
      </NavSection>
    </Stack>
  );
}
