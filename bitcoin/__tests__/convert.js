'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  expect(convert(2, 'BTC', 'BTC')).toBe(2);

});


test('should return a number', () => {
  
  expect(typeof convert(2, 'BTC', 'BTC')).toBe('number');
  expect(convert(2, 'BTC', 'BTC')).toBe(2);

});

test('should return a Big number', () => {
    expect(convert(2, 'BTC', 'BTC', 'Big') instanceof Big).toBe('true');
});

test('should return a string', () => {
  
  expect(typeof convert(2,'mBTC', 'BTC', 'String')).tobe('String');
});

test('should convert a number from interger', () => {
  
    expect(typeof convert(123456789012345, 'Satoshi', 'BTC', 'Number')).tobe('int');
});



test('should convert a number from float', () => {

    expect(typeof convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).tobe ('number');
});

test('should convert a string', () => {
  expect(typeof convert('2', 'BTC', 'BTC', 'Number')).tobe('string');
});


test('should convert a NaN to a number', () => {

    expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');
    
    expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');
});




test('should convert a NaN to a string', () => {
   expect(typeof convert(NaN, 'BTC', 'BTC', 'String')).toBe('string');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'String')).toBe('string');
});


test('should not convert a NaN to a Big', () => {
   expect(typeof convert(NaN, 'BTC', 'BTC', 'Big').instanceof( Big)).toBe('false');

});

test('should handle rounding errors', () => {
  expect ( typeof convert(4.6, 'Satoshi', 'BTC', 'Number')).not.toBe(convert(0.000000046, 'BTC', 'Satoshi', 'Number')); 

});

test('should throw when untest is undefined', () => {
  expect (typeof convert(new Big(2), 'x', 'BTC', 'Number')).toThrow();
  expect (typeof convert(new Big(2), 'BTC', 'x', 'Number')).toThrow();
  expect (typeof convert(NaN, 'x', 'BTC', 'Number')).toThrow();
  expect (typeof convert(NaN, 'BTC', 'x', 'Number')).toThrow();

});

test('should throw when representaion is undefined', () => {
  
  expect (typeof convert(2, 'BTC', 'mBTC', 'x')).toThrow();
  expect (typeof convert(NaN, 'BTC', 'mBTC', 'x')).ToThrow();
 
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'bit');
  throw new Error('test not yet defined... write your test here');
});