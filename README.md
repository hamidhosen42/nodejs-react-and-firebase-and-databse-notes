### react-notes

### React 18 1st error handle
```
index.html file push =(import ReactDOMClient from "react-dom/client";)
const root = ReactDOMClient.createRoot(document.getElementById("root"));

full code: 

import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Netlify react live commend ->then build file push netlify= npm run build

যদি github থেকে প্রজেক্ট run করতে চাই তাহলে git clone করার পর npm install ইউস করতে হবে।কারণ  react file কিছ ডাটা মিছিং থাকে যেমন node-module

[Install React Bootstrap in your react application](https://react-bootstrap.github.io/getting-started/introduction)

[Setup tailwind css with Create React App](https://tailwindcss.com/docs/guides/create-react-app)

[React-Route](https://reactrouter.com/docs/en/v6/getting-started/installation)

## react router netlify 404  npm run build -> public folder -> _redirects file create -> /* /index.html   200

## Api থেকে  data load করার জন্য
```
১. প্রথমে state ডিক্লেয়ার করবো।

২. useEffect ডিক্লেয়ার করবো

৩.  fetch ব্যবহার করে ডাটা লোড করতে হবে

৪. State ব্যবহারের মাধ্যে ডাটাগুরো সেট করতে হবে

৫. Dynamically  ডাটা গুলো দেখাতে হবে
```


## React Install:
```
npx create-react-app my-app
cd my-app
npm start
44-0 Milestone overview
```

MODERN FRONT-END CORE CONCEPTS
```
1.	Web component
2.	Dynamic create HTML elements
3.	Single Page Application(SPA)
4.	Routing, Route parameter
5.	Destructuring and props
6.	Website state
7.	Folder structure
```
React Core Concept:
```
1.	Core concepts Discussion
2.	Working with JSX, Dynamic content, Dynamic Style
3.	Pass Dynamic data to components, props
4.	Create multiple components
5.	State, component state hook and set state
6.	Load dynamic data , API call useEffect integrate state
```
HOW REACT WORKS
```
1.	What is JSX, React Component, babel transpiler
2.	Components and how props works
3.	Unidirectional data flow
4.	How states works, asynchronous
5.	How React Hook works
6.	Props vs state
7.	Properties vs attributes
8.	What Is React, when to use it
9.	Render, virtual dom, diff algorithm
10.	React component lifecycle
```

YOU WILL ALSO LEARN
```
1.	ES6 Modules
2.	Import, Expart, Default
3.	Relative Path
4.	Create and Load Fake data
5.	Array reduce
6.	Local storage functionality
7.	Good UI vs bad UI
8.	Themeforestm, freepik, flaticon, unsplash
9.	Add or remove key to an object
10.	Wrap event handler with arrow function
11.	Local stortage with more functionalites
```

USESTATE()

- USESTATE হলো একটি DYNAMIC STORAGE বা DATABASE . যেগুলো আমাদের COMPONENTS এর ভিতর DATA STORE করে রাখার জন্য থাকতে পারে।

USEEFFECT()

-যখন কোন COMPONENTS CREATE , UPDATE অথবা REMOVE হয় তখন এ ফাংশনগুলো কল হয়। এ সকল কিছু USEEFFECT নামক হুক দিয়ে ম্যানেজ করা হয়। এ USEEFFECT হুক এর ভিতরে প্রথম ARGUMENTS টা RUN হয় যখন আপনার PAGE এ প্রথম COMPONENTS টা CREATE হয়। এরপর আর কখন কখন RUN হবে তা নির্ভর করবে ২য় ARGUMENTS এর উপর। ২য় ARGUMENTS কে আমরা বলে দিব যে, STATE এর কোন জিনিসটি CHANGE হলে এই UESEFFECT ফাংশনটি আবার RUN করবে। এটাকে TRIGGER ও বলা হয়। এবং FINALLY এই COMPONENTS থেকে আমরা চাইলে আর একটা ফাংশন রিটার্ন করিয়ে দিতে পারি যখন আমাদের COMPONENTS টা PAGE থেকে UNMOUNT আর DELETE হবে, তখন এই ফাংশনটা RUN করেবে।
-এটা REACT এর SIDE EFFECT হিসাবে কাজ করে।

### What is NPX in react?

NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

### What is npm in react?

NPM is short for node package manager, an online directory that contains the various already registered open-source packages. NPM modules consume the various functions as a third-party package when installed into an app using the NPM command npm install .

### What is create react app?

Create React App (CRA) is a tool to create single-page React applications that is officially supported by the React team. The script generates the required files and folders to start the React application and run it on the browser.

### What is JSX?

1. javascript XML
2. JSX এর সাহায্যে  html code গুলো javascript এন মধ্যে সহজে লিখা যায়। আবার,html code এর মধ্যেও javascript এর expression গুলো ব্যবহার করা যায় {} এর সাহায্যে।
3. Markup language & logic কে আলাদা file এ না রেখে একই সাথে প্রয়োজনমত একই file এ রাখা যায়, এর জন্য React component ব্যবহার করা হয়।

### What is Babel?

Babel হল free & Open-source javascript Transpiller(TRANState ComPILER) যা ECMAScript এর newer versiom কে pervious version এ convert করে কাজের সুবিধার্থে।

[JSX In Depth](https://bn.reactjs.org/docs/jsx-in-depth.html)

### What is Component?

কম্পোনেন্ট আপনার UIকে স্বতন্ত্র, পুনরায় ব্যবহারযোগ্য অংশে ভাগ করে, যাতে করে আপনি প্রতিটি অংশ নিয়ে পৃথকভাবে চিন্তা করতে পারেন। এই পেইজটি কম্পোনেন্টের ধারণা নিয়ে একটি ভূমিকা দেয়। মোটামুটিভাবে, কম্পোনেন্ট অনেকটা জাভাস্ক্রিপ্ট ফাংশনের মত। তারা আরবিটারি ইনপুট গ্রহণ করে (যাকে “props” বলা হয়) React elements রিটার্ন করে যা স্ক্রিনে কি দেখানো হবে তা বর্ণনা করে।সহজ উপায়ে কম্পোনেন্টের সংজ্ঞা হচ্ছে একটি জাভাস্ক্রিপ্ট ফাংশন লিখা.

### Two Type Component:

```
Functional Component:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Class Component:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

                 Props vs State:
### Props	State
```
Props are read-only	
Props can not be modified	
```

### State
```
State changes can be asynchronous
State can be modified using this.setState
```

### What is react?

React is a declarative, efficient, and flexible JavaScript library for
building user interfaces or UI components. It lets you compose complex UIs
from small and isolated pieces of code called “components”.

It is used by large, established companies and newly-minted startups 
alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). 
React brings many advantages to the table, making it a better choice 
than other frameworks like Angular.js.

### What is React and how is works?

What is React? React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.

### What is diff algorithm in React?

Diffing is a heuristic algorithm based on two assumptions: Two elements of different types will produce different trees. The developer can hint at what elements will remain stable across renders with a key prop. (This is why React is always warning us to include keys in our props).

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.


### ভার্চুয়াল DOM কি?

ভার্চুয়াল DOM হলো একটা প্রোগ্রামিং ধারণা যেখানে UI এর একটা আদর্শ অথবা “ভার্চুয়াল” প্রতিনিধি মেমোরিতে রাখা হয় এবং তা প্রকৃত DOM এর সাথে মিলিয়ে রাখা হয় ReactDOM এর মতো লাইব্রেরির মাধ্যমে

### Shadow DOM আর Virtual DOM কি একই?

না, এগুলো আলাদা। Shadow DOM একটা ব্রাউজার টেকনোলজি যা প্রাথমিকভাবে তৈরি করা হয়েছিল ওয়েব কম্পোনেন্টে ভারিয়াবল এবং CSS স্কোপ করার জন্য। ভার্চুয়াল DOM হল একটা ধারণা যা লাইব্রেরির মাধ্যমে জাভাস্ক্রিপ্টে তৈরি করা হয়েছে ব্রাউজার API এর উপরে।

### React Fiber” কি?

ফাইবার হলো React 16 এর নতুন reconciliation ইঞ্জিন। এর মূল লক্ষ্য হলো ভার্চুয়াল DOM এর ক্রমবর্ধমান render করা।


### React এ প্রতিটা  component ৩ টি stage অতিক্রম করে-
1.	Mounting
2.	Update
3.	Unmounting

### Mounting-	

Initial stage. যখন কোনো component DOM এ প্রবেশ করে তখন এই stage শুরু হই।এই stage এ ৪ টি method প্রর্যায়ক্রমে ঘটেঃ

1.	Constructor()
2.	getDerivedStateFromProps()
3.	render()
4.	componentDidMount()


### Update-

যখন কোন props বা state এর কোন পরিবর্তন component এর কোন পরিবর্তন ঘটায়,তখন component টি এই এই  stage এ প্রবেশ করে।এই stage এ ৫ টি method প্রর্যায়ক্রমে ঘটেঃ

1.	getDerivedStateFromProps()
2.	souldComponentUpdate()
3.	render()
4.	getSnapshotBeforeUpdate()
5.	componentDidUpdate()

### UnMounting-

যখন Dom থেকে কোন component কে সরানো প্রয়োজন হই,তখন component টি এই stage এ প্রবেশ করে। এই stage এ ১টি method সম্পন্ন হইঃ
1.	componentWillMount()

                                           React Router and States
                     
### REACT BOOTSTAP, TAILWIND CSS, AXIOS, RECHART
-	REACT BOOTSTRAP
-	TAILWIND CSS WITH REACT
-	RESPONSIVE CART WITH REACT & TAILWIND
-	USE OF RECHART
-	AXIOS, HERO ICONS
-	REACT SPRING ANIMATION
### SIMPLE REACT ROUTER EXAMPLE
-	INSTALLATION & SETUP OF REACT ROUTER
-	ACTIVE ROUTE, DYNAMIC ROUTE, NESTED ROUTE
-	PRACTISING REACT ROUTER WITH JSONPLACEHOLDER APPI
-	PRACTISING REACT ROUTER WITH RESTCOUNTRIES API
-	PRACTISING REACT ROUTER WITH THEMEALDB API
### ROUTER DEPLOY, SIMPLE CONTEXT API, DEVTOOL
-	USE CHILDREN PROPS FOR DYNAMIC CONTENT
-	DEPLOY REACT ROUTER
-	REACT DEV TOOL
-	CONDITIONAL RENERING
-	GRANDFATHER CONTEX
-	PROP DRILLING
-	CONTEXT API TO AVOID PROP DRILLING
SOMETHIG MORE WITH REACT ROUTE
-	CONDITION FORMATTING
-	MULTIPLE COMPONENTS IN ONE ROUTE
-	WHEN AND HOW WE SHOULD STORE DATA TO ANY STORAGE
-	OVERVIEW OF DATA STORAGE AFTHER SOME OPERATIONS
-	DIFFERENCE BETWEEN USESTATE USEEFFECT, CUSTOM HOOK AND OTHERS

## [React Axios](https://www.npmjs.com/package/axios)

```const [phones, setPhones] = useState([]);

    useEffect(()=>{
        axios.get(
          "https://openapi.programming-hero.com/api/phones?search=iphone"
        ).then((data)=>{
            const loadedData=data.data.data;
            const phoneData=loadedData.map((phone)=>{
                const parts=phone.slug.split('-');
                const ph = {
                  name: parts[0],
                  value: parseInt(parts[1]),
                };
                return ph;
            })
            setPhones(phoneData);
        })
    },[]);
    return (
      <div>
        <BarChart width={800} height={400} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <Tooltip />
          <YAxis></YAxis>
        </BarChart>
      </div>
    );
  ```

## React spring animation install : npm install react-spring

## tailwind css with Create React App Note: 
1.	className="text-6xl"
2.	className="flex items-center"
3.	className="w-4 h-4 text-green-500 mr-2"
4.	className="mr-16"
5.	className="bg-indigo-400"
6.	className="w-6 h-6 md:hidden"
7.	dynamic : className={`md:flex justify-center absolute md:static bg-indigo-300 w-full duration-500 ease-in ${open ? "top-6" : "top-[-120px]"}`}
8.	className="bg-indigo-300 p-4 mt-8 rounded-lg"
9.	className="text-6xl font-mono text-white"
10.	className="grid md:grid-cols-3 gap-3 mt-8"
11.	className="bg-white p-4 rounded-lg"
12.	className="bg-indigo-300 py-2 rounded text-xl font-bold"
13.	className="text-5xl font-bold"
14.	className="text-xl font-bold text-gray-500"
15.	className="text-xl text-left"
16.	className="bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold"
17.	className="w-6 h-6 ml-2"
        

## React Route Important part: 

এই রিএক্ট রাউটারের মেইন জিনিস কিন্তু বেশি না। জাস্ট ছয়টা জিনিস। 

```
১. রিএক্ট রাউটার ইন্স্টল্ করো।  

২. প্রথমেই তোমাকে BrowserRouter ইউজ করতে হবে index.js এ। 

৩. তারপর আমরা App.js এ গিয়ে Routes সেট করবো। 

৪. তার ভিতরে থাকবে এক একটা Route  

৫. সেইসব Route এর মধ্যে থাকবে path 

৬. আর Route এর মধ্যে element নামে আরেকটা prop সেট করে দিবো। তাহলেই কাজ শেষ।  
```

এর পাশাপাশি ছয়টা খুচরা জিনিস আছে। যেমন 
```
১. ৪০৪ রাউট সেট করা 

২. ডাইনামিক রাউট সেট করা 

৩. রাউট প্যারামিটার পড়া 

৪. ডাইনামিক রাউট অনুসারে ডাটা লোড করতে পারা 

৫. Link ইউজ করতে পারা 

৬. useNavigate দিয়ে ক্লিক করতে পারা 
```
আর দুটো এডভান্সড জিনিস আছে। 

```
১. Active Link 

২. Nested রাউট 
```

## রাউটার সেটাপ করার জাস্ট পাঁচটা স্টেপ-

১. প্রথমেই তোমাকে BrowserRouter ইউজ করতে হবে index.js এ। 

২. তারপর আমরা App.js এ গিয়ে Routes সেট করবো। 

৩. তার ভিতরে থাকবে এক একটা Route  

৪. সেইসব Route এর মধ্যে থাকবে path 

৫. আর Route এর মধ্যে element নামে আরেকটা prop সেট করে দিবো তাহলেই কাজ শেষ।  
