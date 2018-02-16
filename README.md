# presentation-react

[![Build Status](https://travis-ci.org/HE-Arc/presentation-react.svg?branch=master)](https://travis-ci.org/HE-Arc/presentation-react)

Slides presenting [React](https://facebook.github.io/react/) with some code examples (fr).

## Dependencies

- Make or [MinGW](http://www.mingw.org/) for Windows
- [pandoc](https://github.com/jgm/pandoc)
- [pandoc-include-code](https://github.com/owickstrom/pandoc-include-code)
- [Node.js and npm](https://nodejs.org/en/)

__`pandoc-include-code` is only available on Linux and OSX so configure and use
[Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
if you are on Windows and want to edit/generate the slides.__

For Windows users, do not forget to add MinGW and pandoc to your `PATH`.
Also use `mingw32-make` instead of `make` when you work with the `Makfile`.
Or simply use WSL and install dependencies on your Linux machine.

## Test the examples

To test the examples, open a terminal in the `examples` folder and
run `npm install` to install the dependencies. You have to do this only once.

Then move into an example's folder and run `npm run start` to start the example.
This latter will be accessible at <http://localhost:8080>.

You can play with the examples and modifiy them.
Modifications will automatically trigger browser page reloading to allow you to
see changes directly.

If you want to build all the examples in one command, open a terminal
in the project's root and run `make examples`.
You can then open the examples' `index.html` to test them.
They are located in `examples/<example-name>/dist/` or
`build/<example-name>/`.

## Slides

You can generate the slides with `make slides` or generate everything
(slides and examples) by running `make`.
