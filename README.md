# Ractive Async Component Test

This is an example repo to show how to send Ractive components over the wire asynchronously.

There are 2 steps: 

1. Serialize (stringify) the component [here](https://ractive.js.org/playground/#N4IgFiBcoE5QdgVwDbIDQgM5QNrgC74AOmkA9GQMYAm8AdAFabUCmyAlgG4x3wv5l4RALZkAAi06YAtJTAx2mMjACGlfFxZiAjHQAM+6cLUwA9tL16ATMrUbOLRtgxhCJclVpPWHbr35kAOZgVCwwLMKUEWQqmACe8JSypsJEpnzw+NL4LJj4YgZWAKxkHABGTiAubqQUNPRMPlw8fALBoeGR0bEJSZQpaRlZOXkFdMVUA+ksmZUAugC+GPhQIFVYq+zw7PgAFACUADrwFAAEciyUANan+GAs5+mYpsgsIAtAA)

2. Deserialize the component. [Here is an example.](https://ractive.js.org/playground/#N4IgFiBcoE5QdgVwDbIDQgM5QNrgC74AOmkA9GQMYAm8AdAFabUCmyAlgG4x3wv5l4RALZkAAi06YAtJTAx2mMjACGlfFxZiAjHQAM+6cLUwA9tL16ATMrUbOLRtgxhCJclVpPWHbr35kAOZgVCwwLMKUEWQqmACe8JSypsJEpnzw+NL4LJj4YgZWAKxkHABGTiAubqQUNPRMPlw8fALBoeGR0bEJSZQpaRlZOXkFdMVkxuwN2AC6AL4Y+FAgVVgrFAAEmCwsm67EtUHs+GCIFf2iUZ1Roj2JyanpLJnZufgAOvDTJwAUAJQAbi+IPgXxA8yAA)


# Problems 

This approach requires handling the dependency transfer manually. As a starting point: http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript
