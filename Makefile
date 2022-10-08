all: dist/index.js

dist/index.js: index.ts
	tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

watch:
	node esbuild.config.mjs

serve:
	node_modules/.bin/http-server

ci:
	npm ci
	node_modules/.bin/eslint *.ts

.PHONY: watch serve ci
