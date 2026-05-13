const { FlatCompat } = require('@eslint/eslintrc');
const react = require('./react');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [...compat.extends('next/core-web-vitals'), ...react];
