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

# Make <=3.81 workaround (cannot get newer version on Travis' Trusty)
$(NODEDIR):
	cd $(EXAMPLEDIR) && npm install

.PHONY: examples
examples: $(BUILDDIR) $(EXAMPLES)

.PHONY: slides
slides: $(BUILDDIR) $(SLIDES)

$(BUILDDIR):
	mkdir -p $(BUILDDIR)

# Make <=3.81 workaround (cannot get newer version on Travis' Trusty)
$(EXAMPLES): $(EXAMPLES_DIST)
	mkdir -p $(patsubst $(EXAMPLEDIR)/%/dist,$(BUILDDIR)/%, $@) && \
	cp -r $(patsubst $(BUILDDIR)/%,$(EXAMPLEDIR)/%/dist/*, $@) $@

$(EXAMPLES_DIST): $(EXAMPLES_SRC)

# Make <=3.81 workaround (cannot get newer version on Travis' Trusty)
$(EXAMPLES_SRC): $(NODEDIR)
	cd $@ && npm run build


$(REVEALJS):
	git clone https://github.com/hakimel/reveal.js.git;

$(SLIDES): $(BUILDDIR) $(REVEALJS) slides.md
	pandoc -s \
		-f markdown+smart \
		-t revealjs \
		$(word 3, $^) \
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
	cp -rn $(REVEALJS) $(BUILDDIR)/

.PHONY: clean
clean:
	rm -rf $(BUILDDIR) $(NODEDIR) $(EXAMPLES) $(EXAMPLES_DIST) $(REVEALJS)
