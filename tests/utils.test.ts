import {verifyDate, verifyCardNumber, formatCardDate, formatCardNumber, verifyCard} from '../src/core/utils/formUtils'


describe('Card date verification', () => {
    test('Accepts valid date from card-block', () => {
        expect(verifyDate('1112')).toBeTruthy();
        expect(verifyDate('0112')).toBeTruthy();
        expect(verifyDate('0111')).toBeTruthy();
    });

    test('Doesn\'t accept invalid date from card-block', () => {
        expect(verifyDate('13')).toBeFalsy();
        expect(verifyDate('21')).toBeFalsy();
        expect(verifyDate('51')).toBeFalsy();
    });
});

describe('Card number verification', () => {
    test('Accepts valid card number while input from card-block', () => {
        expect(verifyCardNumber('111745742')).toBeTruthy();
        expect(verifyCardNumber('01175772')).toBeTruthy();
        expect(verifyCardNumber('01157571000')).toBeTruthy();
    });

    test('Doesn\'t accept invalid date from card-block', () => {
        expect(verifyCardNumber('-452525255')).toBeFalsy();
        expect(verifyCardNumber('11111111111111111')).toBeFalsy();
        expect(verifyCardNumber('858758e5885852')).toBeFalsy();
    });
});

describe('Card date formatting', () => {
    test('Formats date by adding delimiter', () => {
        expect(formatCardDate('1112')).toBe('11/12')
        expect(formatCardDate('12')).toBe('12');
        expect(formatCardDate('1212')).toBe('12/12');
    });
});

describe('Card number formatting', () => {
    test('Formats card number by adding delimiter', () => {
        expect(formatCardNumber('1111')).toBe('1111')
        expect(formatCardNumber('11112')).toBe('1111 2')
        expect(formatCardNumber('11112345')).toBe('1111 2345')
        expect(formatCardNumber('1111222233334444')).toBe('1111 2222 3333 4444')
    })
})

describe('Card full verifying', () => {
    test('Doesn\'t approve invalid cards', () => {
        expect(verifyCard('1111', '123', '1111')).toBeFalsy()
        expect(verifyCard('1422', '123', '1111222233334444')).toBeFalsy()
        expect(verifyCard('1111', 'aaa', '1111222233334444')).toBeFalsy()
        expect(verifyCard('1111', '123', '11112e22233334444')).toBeFalsy()
    })

    test('Approves valid cards', () => {
        expect(verifyCard('1111', '123', '1111222233334444')).toBeTruthy()
    })
})
