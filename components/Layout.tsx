import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Text, useMantineTheme, Code, Grid, createStyles, Group} from '@mantine/core';
import { NavbarSimple } from "../components/NavbarSimple";
import {Cash} from "tabler-icons-react"

type Props = {
    children?: JSX.Element | JSX.Element[];
};

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },
    logoIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },
  };
});

export function Layout({children} : Props){
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const { classes, cx } = useStyles();

    return(
        <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <NavbarSimple hidden={!opened}/>
        }
        header={
          <Header height={70} p="xl" className={classes.navbar}>
          <Grid justify="space-between" align="center">
              <Grid.Col span={3}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  <MediaQuery smallerThan="sm" styles={{ display: 'none' }}> 
                    <Group>
                      <Cash size={25} className={classes.logoIcon}/>
                      <Text weight={700}>Money</Text>
                    </Group>
                  </MediaQuery>
              </Grid.Col>
              <Grid.Col span={3}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}> 
                  <Group>
                    <Cash size={25} className={classes.logoIcon}/>
                    <Text weight={700}>Money</Text>
                  </Group>
                </MediaQuery>
              </Grid.Col>
              <Grid.Col span={3}>
                <Grid justify="flex-end" >
                  <Code sx={{ fontWeight: 700, margin: 10}}>v0.1 Alpha</Code>
                </Grid>
              </Grid.Col>
            </Grid>
          </Header>
        }
      >
        {children}
      </AppShell>
    )
}