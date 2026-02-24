1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   answer: getElementById returns a single element and it is fast.
   getElementsByClassName returns multiple elements like HTMLCollection.
   querySelector returns first matching elements and uses CSS selector syntax.
   querySelectorAll returns Nodelist and uses CSS selector syntax.

2. How do you create and insert a new element into the DOM?
   answer: To create an element just write document.createElement(). you can create any tag just write the tag name inside the parenthesis. Like document.createElement("p"), document.createElement("div") etc.
   Insert a new element we can use appendChild(), append(), prepend() – add at the beginning.

3. What is Event Bubbling? And how does it work?
   answer:a DOM event propagation mechanism where an event triggered on a child element travels upward through its ancestors, firing event handlers on each parent, div, body, and document in order;

4. What is Event Delegation in JavaScript? Why is it useful?
   answer: when an event occurs on achild element it bubbles up to its dom tree. the parent listeners catches this bubbling event. then it uses event object's event.target property to identify exatly which child element the event occurs from and respond accordingly.
5. Improve performance
6. cleaner and more efficient
7. it can adds element dynamically.

8. What is the difference between preventDefault() and stopPropagation() methods?
   answer: preventDefault() stops the browser default behavior
