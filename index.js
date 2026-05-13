const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./shared');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [...compat.extends('airbnb-base', 'airbnb-typescript/base'), ...shared];
