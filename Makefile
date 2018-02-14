BUILDDIR  = build

.PHONY: all
all: slides.html

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
