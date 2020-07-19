import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Card, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { RecoilRoot } from 'recoil';


import { default as theme } from './theme.json'; // <-- Import app theme
import { StyleSheet, View } from 'react-native';
import AppHeader from './components/AppHeader';
import CardNominal from './components/CardNominal';
import ListItem from './components/ListItem';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <RecoilRoot>
        <AppHeader />
        <Layout style={{ flex: 1, alignItems: 'center' }}>
          <Layout style={styles.topContainer} level='1'>
            <CardNominal />
          </Layout>
          <ListItem />
        </Layout>
      </RecoilRoot>
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});