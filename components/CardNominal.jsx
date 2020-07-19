import React, { useState } from 'react';
import { Card, Text, Input } from '@ui-kitten/components';
import { useRecoilState } from 'recoil';
import { nominalState } from '../data/atoms';
export default () => {
    const [value, setValue] = useRecoilState(nominalState)

    return (
        <Card style={{ flex: 1 }}>
            <Text>Total Potongan (Rp.)</Text>
            <Input
                placeholder='Place your Text'
                value={value}
                defaultValue="0"
                onChangeText={nextValue => setValue(nextValue)}
                keyboardType='numeric'
            />
        </Card>
    );

}