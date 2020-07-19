import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Layout, Button, Icon } from '@ui-kitten/components';
import { List, ListItem } from '@ui-kitten/components';
import ItemBuy from './ItemBuy';
import { useRecoilState } from 'recoil';
import { listItemState, nominalState } from '../data/atoms';

export default () => {
    const [data, setData] = useRecoilState(listItemState)
    const [nominal, setNominal] = useRecoilState(nominalState)

    const createNew = () => {
        const newData = {
            id: data[data.length - 1].id + 1,
            value: '0',
            afterDisc: '0',
            title: 'item'
        }
        setData([...data, newData]);
    }
    const calcDisc = () => {
        const total = [...data].reduce((prev, cur) => parseInt(prev) + parseInt(cur.value), 0);
        const disc = nominal / total;
        setData([...data.map(item => {
            const newItem = { ...item };
            newItem.afterDisc = ((1 - disc) * newItem.value).toFixed(2).toString();
            return newItem
        })])
    }
    return (
        <>
            <Layout style={styles.actionButton}>
                <Button style={styles.button} status='success' accessoryRight={Add} onPress={createNew}> Tambah Item </Button>
                <Button style={styles.button} accessoryRight={Add} onPress={calcDisc}> Hitung </Button>
            </Layout>
            <List
                style={styles.containerList}
                data={data}
                renderItem={props => ItemBuy({ ...props, setData, data })}
            />
        </>

    );

}

const Add = (props) => (
    <Icon {...props} name='plus-outline' />
);


const styles = StyleSheet.create({
    actionButton: {
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 10,
        flex: 1
    },
    containerList: {
        flex: 1,
        width: Dimensions.get('window').width,
        paddingHorizontal: 10
    },
})