all: html dist/index.js

html: src/index.html
	cp src/*.html dist/

dist/index.js: src/index.ts
	tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

watch:
	# To keep nodemon running even after a code 2, add this to the end of your
	# command: || exit 1
	# https://github.com/remy/nodemon/blob/fdf7e/faq.md#error-process-failed-unhandled-exit-code-2
	make serve & npx nodemon --ext "js,mjs,cjs.json,html,ts" --exec "make all || exit 1" --watch src

serve: html dist/index.js
	npx http-server -o / dist

ci:
	npm ci
	node_modules/.bin/eslint **/*.ts

.PHONY: watch serve ci
