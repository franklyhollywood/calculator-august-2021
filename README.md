## Making a plan

1. Make a drawing of your app. Simple "wireframes"
2. Once you have a drawing, name the HTML elements you'll need to realize your vision
3. For each HTML element ask: Why do I need this?
4. Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5. Is there some state we need to initialize?
6. Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7. Think about how to validate each of your steps
8. Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9. Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

2 - HTML elements: Inputs, button, span for answer - \* 4 - Need different id's on all inputs and spans, and buttons.
3 - inputs: for user to enters numbers / Button for getting answer / span to show answer.
4 - ? (I think I already did this step)
5 - ignore
6 - User clicks button for answer. user input numbers are grabbed functions are ran, and answer is displayed in span.
7 - console.log to see if we got the input fields / button clicks / span fields / qunit tests are done on each function, 3 times (0, negative number, and string).
