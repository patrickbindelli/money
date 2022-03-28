import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {StatsGridIcons} from "../components/StatsGridIcons";
import { Paper, Title, Divider } from "@mantine/core";
import { BalanceCard } from "../components/BalanceCard";

const Home: NextPage = () => {
  const data = [
    {
      "title": "Despesas",
      "value": "R$13.456,00",
      "diff": 34
    },
    {
      "title": "Receitas",
      "value": "R$4.145,00",
      "diff": -13
    },
    {
      "title": "Cartão de Crédito",
      "value": "R$745,00",
      "diff": 18
    }
  ]

  return (
    <>
    <BalanceCard/>
    <Divider my="xl"/>
    <Paper shadow="sm" p="sm" withBorder style={{marginTop: 25}}>
      <Title order={3}>Resumo</Title>
      <StatsGridIcons data={data}/>
    </Paper>
    </>
  );
};

export default Home;
