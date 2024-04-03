-----------------------------------Event Capturing and Event Bubbling------------------------------------

Event propagation :

-Event propagation is a mechanism that defines how an event propagates or travels through the DOM tree to arrive at its target and what happens to it afterward.

-There are two possible ways in which an event can be propagated — bubbling and capturing.

Event capturing :

-The procedure of event propagation from the farthest element to the closest element is called event capturing.

-During this phase, the event travels from the top of the DOM hierarchy down to the target element.

Event Bubbling:

-The procedure of event propagation from the closest element to the farthest element is called event bubbling.

-During this phase, the event travels from the target element up to the topmost ancestor.

-So, it is the event starts from the deepest element or target element to its parents, then all its ancestors which are on the way from bottom to top. 

-At present, all the modern browsers have event bubbling as the default way of event flow.

Stop Event Bubbling :
If you want to stop the event bubbling, this can be achieved by the use of the event.stopPropagation() method. If you want to stop the event flow from event target to top element in DOM, event.stopPropagation() method stops the event to travel to the bottom to top.

-By default events in JS follow event bubbling mechanism, however if we want to use event capturing, we have to declare another parameter in the eventListener 
i.e: {capture : true }  (or) addEventListener("click",()=>{},true)