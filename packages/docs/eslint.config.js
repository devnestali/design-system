import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [...compat.extends('@devnestali-call-ui/eslint-config')]
