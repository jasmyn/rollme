rollme
======

A simple polyhedral dice roller for Node.
-----------------------------------------
~~~
var rollme = require('./rollme');  
var roll = random.rollMe("2d4", 2);
~~~

The first parameter is the quantity and type of dice to roll, the second is an optional modifier.

The result object you get back looks like this...  
  roll[0] // modified result  
  roll[1] // unmodified result (if you omitted the modifier this is the same as   roll[0])  
  roll[2] // an array containing all the individual die rolls  

_There's also a simple integer generator included at rollme.getRandInt()._

Tabletop forever or a reasonable facsimile thereof!

-JAZ