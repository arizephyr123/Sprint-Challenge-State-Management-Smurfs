1. What problem does the context API help solve?

Context API solves the problem of prop drilling. Instead, state can be stored in the context API and the components or component trees that will need/be using that state will be wrapped by a Provider, to 'provide' that state when it is needed.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store is the body/element that holds all the state for the app. It is seperate from the app and can be hooked up (connect()) to deliver the state where needed.

Actions are plain JS objs that always have a type. they are payloads of information that tell the store's reducer how to change state and any info needed to accomplish this. They only say what happened, not how the state will change.

A reducer is a function that takes in a current state and some actions (sent to the store) and returns a modified state based on those actions. It describes what happened, but not how

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global or needed/used through out the app like if a user's info.

Component state is only needed/used locally with in that component. For example if a target value for an input

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk and other middlewares allow our action creator to perform asynchronous actions. By default action creators are synchronous

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API because it is the simplest to understand. lol
