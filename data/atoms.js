import { atom } from 'recoil';

export const nominalState = atom({
    key: 'nominalState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const listItemState = atom({
    key: 'listItemState', // unique ID (with respect to other atoms/selectors)
    default: [{
        id: 1,
        title: 'Item',
        value: '0',
        afterDisc: '0'
    }], // default value (aka initial value)
})
