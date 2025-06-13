import { FlatCompat } from '@eslint/eslintrc'


const compat = new FlatCompat()

export default [
    ...compat.extends('@call-ui/eslint-config')
]