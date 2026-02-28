<!-- Answer to the question Number 1 -->
getElementById() দিয়ে নির্দিষ্ট একটি id ব্যবহার করে element সিলেক্ট করা হয়। এটি কোডে বেশি ব্যবহার করি আমরা। 

getElementsByClassName() দিয়ে নির্দিষ্ট অনেক গুলো class নামের সব element সিলেক্ট করা হয়। এটি  একটি HTMLCollection দেয়। এই collection “live” হয় তাই DOM-এ কোনো পরিবর্তন হলে collection-এ তা সরাসরি দেখায়।

querySelector() CSS selector ব্যবহার করে element সিলেক্ট করি। এটি প্রথম যে element selector এর সাথে মিলে যায়, শুধুমাত্র সেটিই রিটার্ন করে। এখানে id, class, tag, attribute সব ধরনের CSS selector ব্যবহার করা যায়।

querySelectorAll() একইভাবে CSS selector ব্যবহার করে, তবে এটি সব মিল থাকা element নির্বাচন করে এবং একটি NodeList রিটার্ন করে। এটি “live” নয়, অর্থাৎ পরে DOM পরিবর্তন হলেও আগের NodeList তা সরাসরি দেখায় না।


<!-- Answer to the question Number 2 -->
DOM-এ নতুন কোনো element যোগ করার জন্য তিনটি ধাপে করা হয়:
(১) element তৈরি করা,
(২) তার মধ্যে প্রয়োজনীয় content বা attribute যোগ করা,
(৩) সেটিকে DOM-এ নির্দিষ্ট স্থানে যুক্ত করা।

প্রথমে, document.createElement() ব্যবহার করে নতুন element তৈরি করে নিতে হবে। যেমন, যদি একটি নতুন div তৈরি করতে চাই, তাহলে—

const newDiv = document.createElement("div");

এভাবে একটি খালি div তৈরি হবে।

দ্বিতীয় ধাপে, ওই element এ লেখা, class, id বা অন্য attribute যোগ করতে হবে। যেমন

newDiv.innerText = "Hello Programming Hero";
newDiv.className = "box";

এতে div-এর ভেতরে Hello Programming Hero লেখা যুক্ত হবে এবং একটি class সেট হবে box নামে।

এরপর element-টিকে DOM-এ যুক্ত করতে হবে।  appendChild() ব্যবহার করতে হবে। 
const container = document.getElementById("container");
container.appendChild(newDiv);

এতে নতুন div টি container এর শেষে যুক্ত হবে।

<!-- Answer to the question Number 3 -->
Event Bubbling হলো JavaScript এর একটি স্বাভাবিক formula, যেখানে কোনো ইভেন্ট (যেমন click) প্রথমে যে element এ ঘটে, সেখান থেকে ধীরে ধীরে তার উপরের parent element গুলোর দিকে ছড়িয়ে যায়।

mone kori, একটি button একটি div-এর ভিতরে আছে, আর div আবার body-এর ভিতরে। এখন যদি button-এ ক্লিক করা হয়, তাহলে ইভেন্টটি শুধু button-এই সীমাবদ্ধ থাকবে না। প্রথমে button-এর event handler চলবে, তারপর div-এর, তারপর body-এর—এভাবে উপরের দিকে উঠতে থাকবে। এই নিচ থেকে উপরে ওঠার প্রক্রিয়াকেই বলা হয় “bubbling”।

<!-- Answer to the question Number 4 -->
Event Delegation হলো JavaScript-এ এমন একটি পদ্ধতি যেখানে প্রতিটি child element-এ আলাদা করে event listener না দিয়ে, তাদের parent element-এ একটি মাত্র listener বসানো হয়। এরপর event bubbling-এর সুবিধা নিয়ে বোঝা হয় কোন child element থেকে event এসেছে।

ধরো, একটি তালিকার মধ্যে অনেকগুলো button আছে। যদি প্রতিটি button-এ আলাদা করে click listener যোগ করা হয়, তাহলে কোড বড় হবে এবং performance-ও কিছুটা প্রভাবিত হতে পারে। কিন্তু যদি পুরো list container-এ একটিমাত্র listener বসানো হয়, তাহলে child button-এ ক্লিক করলেও event bubble হয়ে parent-এ পৌঁছাবে। তখন event.target ব্যবহার করে বোঝা যায় কোন button-এ ক্লিক হয়েছে।

<!-- Answer to the question Number 5 -->
JavaScript-এ যখন কোনো ইভেন্ট ঘটানো হয়, তখন সেই ইভেন্টের দুইটা ভিন্ন দিক থাকে: default behavior এবং event bubbling। preventDefault() আর stopPropagation() এই দুইটার নিয়ন্ত্রণের জন্য ব্যবহৃত হয়।