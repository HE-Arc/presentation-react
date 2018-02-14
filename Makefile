BUILDDIR      = build
EXAMPLEDIR    = examples
NODEDIR       = $(EXAMPLEDIR)/node_modules
EXCLUDES      = $(EXAMPLEDIR)/package.json $(NODEDIR)
EXAMPLES_SRC  = $(filter-out $(EXCLUDES), $(wildcard $(EXAMPLEDIR)/*))

EXAMPLES_DIST = $(patsubst $(EXAMPLEDIR)/%, $(EXAMPLEDIR)/%/dist, $(EXAMPLES_SRC))
EXAMPLES      = $(patsubst $(EXAMPLEDIR)/%, $(BUILDDIR)/%, $(EXAMPLES_SRC))
REVEALJS      = reveal.js
SLIDES        = $(BUILDDIR)/slides.html

.PHONY: all
all: examples slides

.ONESHELL:
$(NODEDIR):
	cd $(EXAMPLEDIR)
	npm install

.PHONY: examples
examples: $(EXAMPLES)

.PHONY: slides
slides: $(SLIDES)

$(EXAMPLES): $(EXAMPLES_DIST)
	mkdir -p $@
	cp -r $</* $@

$(EXAMPLES_DIST): $(EXAMPLES_SRC)

$(EXAMPLES_SRC): $(NODEDIR)
	cd $@
	npm run build

$(REVEALJS):
	git clone https://github.com/hakimel/reveal.js.git;

$(SLIDES): $(REVEALJS) slides.md
	mkdir -p $(BUILDDIR)
	pandoc -s \
		-f markdown+smart \
		-t revealjs \
		$(word 2, $^) \
		-o $@ \
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
	rm -rf $(BUILDDIR) $(NODEDIR) $(EXAMPLES) $(EXAMPLES_DIST) $(REVEALJS)
