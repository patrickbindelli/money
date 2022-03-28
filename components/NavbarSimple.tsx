import React, { useState } from "react";
import { createStyles, Navbar, useMantineColorScheme } from "@mantine/core";
import {
  LayoutDashboard,
  CreditCard,
  BuildingBank,
  Wallet,
  ReportMoney,
  Settings,
  Logout,
  Paint,
} from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    navbar: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 7
          ],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

const data = [
  { link: "", label: "Visão Geral", icon: LayoutDashboard },
  { link: "", label: "Carteira", icon: Wallet },
  { link: "", label: "Contas Bancárias", icon: BuildingBank },
  { link: "", label: "Cartões", icon: CreditCard },
  { link: "", label: "Despesas", icon: ReportMoney },
];

type Props = {
  hidden?: boolean;
};

export function NavbarSimple({ hidden }: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar
      width={{ sm: 300, lg: 300 }}
      hidden={hidden}
      className={classes.navbar}
    >
      <Navbar.Section grow style={{ marginTop: 10 }}>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={() => toggleColorScheme()}
        >
          <Paint className={classes.linkIcon} />
          <span>Alternar Tema</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Settings className={classes.linkIcon} />
          <span>Configurações</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Logout className={classes.linkIcon} />
          <span>Sair</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
