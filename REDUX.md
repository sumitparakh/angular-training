## Normal Flow:-

Application => Dispatch Action => Update App State

## With Side-Effects:-

Application => Dispatch Action => Connect External Sources (API Call) => Update App State

1. NgRx => More Complex => More Boilerplates
2. NgXs => Less Complex => Less than NgRx
3. Akita (Relatively New Library - 2018) => Simpler => Very Straight Forward (Just like react-redux)

```javascript
reducer()
createStore()

UI => dispatch action
```

## Installation:-

```json
{
  "@ngrx/store": "^10.1.2",
  "@ngrx/store-devtools": "^10.1.2"
}
```

## Implementation Details

1. Define Actions

```typescript
import { createAction } from "@ngrx/store";

export const fetch = createAction("[Todo]::FETCH_DATA");
```

2. Define Reducer

```typescript
const fetchData = (state: IState) => {
  // Perform your logic here
  return state;
};

export function todoReducer(
  state: IState,
  action: Action
): ActionReducer<IState, Action> {
  // if(action.type === 'asfd') {
  //   state = {
  //     ...state
  //   }
  // }
  // return state;

  return createReducer(initialState, on(fetch, fetchData))(state, action);
}
```

3. Configure Store

```typescript
StoreModule.forRoot<ActionReducer<ActionReducer<IState, Action>, Action>>({
      todo: todoReducer,
}),
// Just like createStore(<reducer>)
```
