import React from "react";
import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  Title,
} from "@mantine/core";
import { Swimming, Calendar } from "tabler-icons-react";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: 50,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export function BalanceCard() {
  const { classes } = useStyles();

  return (
    <Paper radius="md" withBorder className={classes.card}>
      <Group position="center" spacing="xl" grow>
        <Title order={4} align="center" className={classes.title}>
          Inicial
        </Title>
        <Title order={3} align="center" className={classes.title}>
          Saldo Atual
        </Title>
        <Title order={4} align="center" className={classes.title}>
          Previsto
        </Title>
      </Group>
      <Group position="center" spacing="xl" grow style={{ marginTop: 10 }}>
        <Text color="green" align="center" size="sm">
          R$4.000,00
        </Text>
        <Text color="green" align="center" size="sm">
          R$1.200,00
        </Text>
        <Text color="red" align="center" size="sm">
          - R$1.200,00
        </Text>
      </Group>
    </Paper>
  );
}
