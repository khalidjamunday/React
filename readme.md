# Notes
1. useState() hook:-
    rp-3 counter.jsx m hai 
    
2. 1. using children content as prop
   2. pass function as prop
   rp-4 app.jsx button.jsx card.jsx 

3. StateLifting
   rp-5 refer notes and app.jsx card.jsx

4. Conditional Rendering-> cond. ke basis pe kuch render krna  
to do : can later create out setLogged in 
-->(In React, component names should always start with an uppercase letter, otherwise, React treats them as regular HTML tags rather than components.)
   rp-6

5. Event handling -> which was kinda tedious task js here simple (event.target tells kis el. pe event trigger hua h)
   rp-7 ek do line in notes app.jsx
   IMPORTANT -> immediate invokation (preffered fucntion refrence), event.stopPropogation, e.prevent.default
   Can see last part of video babbar showed react documentation 
--> In main.jsx m cheeze strictMode(it's devlopment mode) isme app ko 2 baar render kara jaata 

6. useEffect() hook :- 
   rp - 8

7.  usecontext() hook :-
   rp - 9
   --> In React, context is a feature that allows you to share data (or state) between components without having to pass props down manually at every level of the component tree. It provides a way to manage global or shared state, making it easier to access data across deeply nested components.
   --> Key conpts of react context : provider, consumer, createcontext()

8. react routing -> from npm install react router dom ( npm i react-router-dom)
   cd rp-10 -> npm i -> npm react-router-dom -> npm run dev
   ADVANTAGE of using Link tag over anchor tag
   learn about list-style: none; css prop and ./ 
   navlink vs link tag  
   --->  className={({ isActive }) => ... }
         The className prop is a function that React Router calls for you.
         It receives an object as an argument (destructured here as { isActive }), where:
         isActive is a boolean that tells whether the current link matches the URL in the browser.
         Depending on the value of isActive:
         If isActive is true: The className is set to "active-link".
         If isActive is false: The className is set to an empty string ("").
         4. "active-link"
         This is a CSS class that you can define in your stylesheet (e.g., App.css) to style the currently active link.
   routeparms ka bhi use dekha
   usenavigate() hook also seen -> move frm one pg to another w/o reloading entire pg
   nested routing /dashb/mocktest or /dashb/courses

9. React Hook Form() :- o/w js se form create krne m ev listeners lagao and much tedious work
using react hook form we can create very eff. and powerful form in very less lines of codes 
   => there r many comments in code refer imp.
   => SEE DOC. FROM REACT HOOK FORM WEBSITE
   => await new Promise((resolve)=>{setTimeout(resolve, 5000)});  //When resolve is called, it marks the promise as fulfilled (completed) and allows any code awaiting the promise to proceed.
   => what we learnt :-
   1. creating form
   2. kaise fields ko register kre
   3. onSubmit kaise sambhalye onsubmit wali utiliy aati h
   4. validation aur uske liye error handling
   5. styling errors
   6. how to prevent multiple submission varna agar 5 sec m submit horha aur button baar baar dabao toh baar baar submit hojayega isliye disable it during time of submission
To use install -> npm i react-hook-form in same folder
open doc.(npm one) of react-hook-form we copied boilerplate from their only

10. useRef() hook :-
    2 use Cases
    1. used as a variable which persist it's value across re renders
    2. to directly acc dom el's
    rp-12

V.V. IMP...
When using React state(is an var. that stores dynamic data for a component) inside asynchronous functions like setInterval, you can run into an issue called the STALE STATE PROBLEM due to JavaScript closures(A closure is when a function "remembers" variables from its outer scope even after that outer function has finished executing.).
ex of closure:-
function outer() {
  let count = 0; // Variable in the outer scope

  return function inner() {
    count++; // Inner function "remembers" `count`
    console.log(count);
  };
}

easy padh ke summarize kr dena chatgpt content:-

function startTimer() {
  timerRef.current = setInterval(() => {
    setTime(time + 1); // Using `time` directly
  }, 1000);
}
State Closure: When setInterval is created, it captures the current value of time (from when the interval was first set). This means that even if time updates later, the setInterval callback will always refer to the original value of time that was captured when the interval was created.

Why It Fails: Inside the setInterval callback, time + 1 always uses the same "stale" time value. As a result, the counter doesn’t update properly.

How to Fix It?
To fix the issue, you need to use the functional update form of setState:

setTime((prevTime) => prevTime + 1);

Why This Works: The functional form gives you access to the latest state (prevTime) regardless of when the callback was created. It avoids the stale state issue because it doesn't rely on the time variable captured at the time of setInterval creation.

callback is an fucntion that is passed as an argument to another function

11. AGAR KHI POSSIBILITY DIKHE USE KRNE KI TOH KRE ZYADA KHUD SE KHI DAALNE KI KOSISH MAT KARNA 
useMemo hook():- used to prevent unnecessary expensive operation memo-> memoization agar koi prob. aayi not solved solve it and store it(i.e. memoize it) and if later that prob. asked no need to solve it just return answer which u memoized

-> e.target.value:
   The current value of the input field (the text or selected value entered by the user).

->   let doubleValue = useMemo(() => expensiveTask(input), [input])
  // v .v. imp...
  // bs last i/p value ke liye hi answer memoize rahta h jaise 2->3->4->4(in no time)->3(would calculate again as last state ki hi value memoize h i.e. 4)

  rp-13

12. useCallback() rp-14 -> memoize function referece
    useMemo() -> memoize value/result
    2 uses :-
    1. to stop unnecessary rerender of child comp., when it's value React.memo suff. if function also comes to play use useCallback()
    2. to handle expensive op.(jisme time ya space zyada lag rhi ho) using useCallback()
    


















# Revision
react - ui lib with adv(dynamic up as virtual dom created, could use props, react hook , comp based system etc)
<App/> - app comp. render hoga
img assets m daal ke import , for using js {} must be used , only 1 parent tag inside comp. , in components folder our written comp. is present
passing data from parent to child - props <usercard name = {"prop h yeh name"} /> - to acc. -> {props.name}
comp. tags ke andar jo bhi is children - to acc. -> {props.children}
event handling in react - tedious task via old method dom selection event handling , in reach attribute m seedhe {onclick, onchange} like this



