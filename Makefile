all: dist/index.js

dist/index.js: index.ts
	tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

watch:
	node esbuild.config.mjs

ci:
	npm ci
	node_modules/.bin/eslint *.ts

.PHONY: watch ci
