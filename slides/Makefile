SOURCES = slides.md
SLIDES = slides.html

.PHONY: all
all: html

.PHONY: html
html: $(SLIDES)

.PHONY: install
install:
	git clone https://github.com/hakimel/reveal.js.git

$(SLIDES): %.html: %.md
	pandoc -s -f markdown+smart -t revealjs slides.md -o slides.html \
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
	rm -f $(PDFS) $(SLIDES)
