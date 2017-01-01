rollme
======
~~~
var rollme = require('./rollme');  
var roll = rollme.roll('2d4', 3, true);
~~~

The first parameter is the quantity and type of dice to roll, the second is an optional modifier. The third is if you'll allow negative modified results (this defaults to false).

The result array you get back looks like this...

~~~
roll[0] // modified result  
roll[1] // unmodified result (if you omitted the modifier this is the same as roll[0])  
roll[2] // an array containing all the individual die rolls  
~~~

_There's also a simple integer generator included at rollme.getRandInt()._

Tabletop forever or a reasonable facsimile thereof!

-JAZ