import React, { useState } from 'react';
import { Card, Text, Input, Icon, Layout, Button } from '@ui-kitten/components';

export default ({ item, index, setData, data }) => {
    const deleteItem = () => {
        if (data.length > 1) {
            setData([...data.filter(d => d.id !== item.id)]);
        }
    }
    const changeData = (text) => {
        setData(data.map(d => {
            if (d.id === item.id) {
                let newD = { ...d }
                newD.value = text;
                return newD;
            }
            return d
        }));
    }
    return (
        <Card style={{ flex: 1 }}>
            <Layout style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: 10 }}>
                <Text>Item {index + 1} </Text>
                <Button status='danger' style={{ width: 20, height: 20 }} accessoryLeft={Delete} onPress={deleteItem} />
            </Layout>
            <Layout style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                <Input
                    style={{ flex: 1 }}
                    value={item.value}
                    placeholder='14500'
                    onChangeText={changeData}
                    label='Nominal Item (Rp)'
                    keyboardType='numeric'
                />
                <Layout style={{ flex: 1, alignItems: 'center', marginLeft: 10 }}>
                    <Text style={{ flex: 1, fontSize: 12 }}>Setelah Diskon</Text>
                    <Text style={{ flex: 1, fontSize: 12 }}>Rp. {item.afterDisc}</Text>
                </Layout>
            </Layout>

        </Card>
    );

}

const Delete = (props) => (
    <Icon {...props} name='trash-2-outline' />
);