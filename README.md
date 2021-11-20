# An Arithmetic Calculating Machine

This is an implementation of a basic arithmetic calculator using HTML/CSS/Javascript. The machine accepts _arbitrary arithmetic floating point expressions_ with parenthesis, using the operations of sum, division, multiplication and subtraction.  
The parser for the calculator is written by hand from a corresponding context free grammar. The regular subset of the arithmetic expressions, namely floating point numbers, operators and brackets, are recognized with regular expressions. Tests are written with the _Jest/Puppeteer_ framework.
