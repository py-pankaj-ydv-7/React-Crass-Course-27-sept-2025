facebook ko ek propblem najar aai ki real time mein wo notifiaction and reactions ko show nahi kar paa rahe hai , unhe reactions, notifications and other data deliver karne mein page reload karna pad raha hai , and wo isliye kyoki they were using sometimes called php, ab is problem se niptane ke liye 2013 mein ek facebook ke engineer ne ek library banaai ye library khaas thi kyoki ye data ko raal time mein dikha pa rhi thi, par is library ke kaam karne ka tareeka different tha. ye main Dom tree ko update nahi karti hai directly , matlab ki agar page mein kuch bhi change hua to directly main DOM tree update nahi hoga, is library ka khud ka ek Dom tree hai uska naam hai virtual Dom ye dom tree exact copy hai real DOM tree ka , bas ek different hai , wo hai ki jab bhi virtual DOM mein kuch change hoga to sirf use change kiya jayegaa jo ki change hua hai naa ki poore tree ko refresh kiya jaayega.
=>
that's why react become so famous and usefull for big application.
react featuers :=>
1.very very very less page reload, 2. extream use of reusable compnents, 3. very very efficient and bahut bahut opportunities hai . 


2. components=> component ek function hai jo ki return karega jsx , (jsx html ki trah dikhne waala syntax but uske pass kuchh supperpowers hai jo html k pass nahi hai) 

3. react ka name react isliye hai kyoki wo react karta hai jab bhi state change hoti hai , aur yahi main model hai poore react ka , yahi uska heart hai yahi uske kaam karne ka tarika hai 

{ browsers ka nature hota hai jab bhi page me kuch bhi change hota hai to poora Dom tree refresh karoo, jiske wajah se poora page re render hoga jo ki kaafi inefficient hai , matlab ki socho agar ek change par Dom ek baar refresh ho raha hai to 1lakh change 1lakh baar refresh hoga , to browser crash ho jaayega ya sakta hai .}