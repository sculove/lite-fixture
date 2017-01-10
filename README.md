# lite-fixture
Lite test fixture.

## Install
```bash
npm install lite-fixture
```

## How to use
The `sandbox` creates an element for testing.  
you must call `cleanup` after test is completed

```js
sandbox(); // create element (id : sandbox)
sandbox({
    id: "test",
    style: "display:none"
}); // create element (id : test)

//...

cleanup();
```
