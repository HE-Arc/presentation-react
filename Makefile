BUILDDIR   = build
EXAMPLEDIR = examples
EXCLUDES   = $(EXAMPLEDIR)/package.json $(EXAMPLEDIR)/node_modules
EXAMPLES   = $(filter-out $(EXCLUDES), $(wildcard $(EXAMPLEDIR)/*))

.PHONY: all
all: examples slides.html

.PHONY: examples
.ONESHELL:
examples:
	cd $(EXAMPLEDIR)
	npm install
	for dir in $(EXAMPLES:examples/%=%); do \
		cd $$dir; \
		npm run build; \
		mkdir -p ../../$(BUILDDIR)/$$dir; \
		cp -r dist/* ../../$(BUILDDIR)/$$dir; \
	done

slides.html: slides.md
	if [ ! -d "reveal.js" ]; then \
		git clone https://github.com/hakimel/reveal.js.git; \
	fi
	mkdir -p build
	pandoc -s \
		-f markdown+smart \
		-t revealjs \
		$< \
		-o $(BUILDDIR)/$@ \
		--filter pandoc-include-code \
		--css https://fonts.googleapis.com/icon?family=Material+Icons \
		-H theme.html \
		-M date="`date "+%B%e, %Y"`" \
		--self-contained \
		--variable theme="beige" \
		--variable transition="convex" \
		--variable slideNumber="true" \
		--variable showSlideNumber="true"

.PHONY: clean
clean:
	rm -r $(BUILDDIR)
