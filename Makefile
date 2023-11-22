all: html dist/index.js

html: src/index.html
	cp src/*.html dist/

dist/index.js: src/index.ts
	tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

watch:
	make serve & npx nodemon --ext "js,mjs,cjs.json,html,ts" --exec "make all" --watch src

serve: html dist/index.js
	npx http-server -o / dist

ci:
	npm ci
	node_modules/.bin/eslint **/*.ts

.PHONY: watch serve ci
