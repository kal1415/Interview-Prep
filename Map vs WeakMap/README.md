--------------------------------------Map vs WeakMap-------------------------------------------------

## Map

-Keys: Accepts keys of any data type (strings, numbers, objects, etc.).

-Strong References: Holds onto keys, preventing garbage collection as long as the Map exists.

-Iterable: Can be inspected and iterated using methods like keys(), values(), and size.

-Properties: Maps have a `size` property to check the number of entries it holds.

**Example:**

```javascript
let myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "number value");
myMap.set(true, "boolean value");

console.log(myMap.get("name")); // Output: Alice
```

## WeakMap:

-Object-only keys: WeakMap keys must be objects. Primitive data types cannot be used as keys.

-Weak References: Doesn't prevent garbage collection of key objects. If an object key is no longer referenced elsewhere, its WeakMap entry may be automatically removed.

-Non-iterable: WeakMaps are not directly iterable. You can't use `for...of` or similar methods to loop through them.

-No size property: WeakMaps don't expose a `size` property. This is because entries can disappear due to garbage collection.

**Example:**

```javascript
let myWeakMap = new WeakMap();
let obj = { name: "Bob" };
myWeakMap.set(obj, "some data");

// If you remove the only reference to the object...
obj = null;

// ...the entry in the WeakMap will likely be garbage collected
```

## When to Use Which

-Map: Use when you need flexible key types and direct control over when entries are removed.

-WeakMap: Ideal for attaching additional data to objects without affecting garbage collection, like caching or emulating private object data.
