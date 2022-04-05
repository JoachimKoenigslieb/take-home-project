module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx',],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: './tsconfig.json',
			},
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
			],
			plugins: ['@typescript-eslint',],
			rules: {
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': ['error',],
				'import/extensions': 'off',
				'indent': 'off',
				'@typescript-eslint/indent': ['error' , 'tab',],
				'@typescript-eslint/no-explicit-any': ['warn',], 
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": "error",
			},
		},
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'better-styled-components',],

	rules: {
		'no-restricted-imports': [
			'error',
			{
			  'patterns': ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*',],
			},
		],
		'no-console': 2,
		'no-plusplus': 'off',
		'no-await-in-loop': 'off',
		'jsx-a11y/anchor-is-valid': 0,
		'no-nested-ternary': 'off',
		'react/no-access-state-in-setstate': [0,],
		'react/jsx-props-no-spreading': [0,],
		'keyword-spacing': ['error', { 'before': true, 'after': true, },],
		'object-curly-spacing': ['error', 'always',],
		'space-in-parens': ['error', 'never',],
		'better-styled-components/sort-declarations-alphabetically': 0,
		'react/destructuring-assignment': [0, { 'ignoreClassFields': true, },],
		'react/require-default-props': [0, { 'forbidDefaultForRequired': true, },],
		'react/prefer-stateless-function': [0, { 'ignorePureComponents': true, },],
		'react/jsx-filename-extension': [0, { 'extensions': ['.js', '.jsx', ], },],
		'indent': ['error', 'tab', {
			'ignoredNodes': ['TemplateLiteral',],
		},],
		'react/jsx-no-bind': 0,
		'react/jsx-indent': ['error', 'tab', { 'indentLogicalExpressions': true, }, ],
		'react/jsx-first-prop-new-line': 2,
		'react/jsx-closing-bracket-location': 2,
		'quotes': ['error', 'single',],
		'semi': ['error', 'never',],
		'no-alert': 2,
		'radix': ['error', 'as-needed',],
		'comma-dangle': ['error', {
			'arrays': 'always',
			'objects': 'always',
			'imports': 'never',
			'exports': 'never',
			'functions': 'never',
		},],
		'max-len': ['error', {
			'code': 120,
			'tabWidth': 2,
		},],
		'jsx-quotes': [
			'error',
			'prefer-double',
		],
	},
}