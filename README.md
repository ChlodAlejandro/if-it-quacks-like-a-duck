# if-it-quacks-like-a-duck

Checks if the given string returns `duck`. Also checks functions.

Please do not install unless you've lost your mind.

## Usage
```javascript
const doesItQuackLikeADuck = require("if-it-quacks-like-a-duck");

doesItQuackLikeADuck("duck"); // true
doesItQuackLikeADuck(() => "duck"); // true
doesItQuackLikeADuck("meow"); // false
doesItQuackLikeADuck("quack"); // false (might not be a duck's quack)
doesItQuackLikeADuck("duck quack"); // true

// You can also supply your own duck.
doesItQuackLikeADuck("quack", "Duck"); // false
doesItQuackLikeADuck("duck", "duck"); // true
doesItQuackLikeADuck("Duck", "duck"); // false

class Duck {}

doesItQuackLikeADuck(new Duck(), Duck); // true
doesItQuackLikeADuck({}, Duck); // true
```

## Locale Support
Hell no.

## License
Go crazy.