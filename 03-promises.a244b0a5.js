function e(e,t){const o=Math.random()>.3,n={position:e,delay:t};new Promise(((e,l)=>{setTimeout((()=>{o?e(n):l(n)}),t)})).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t} ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t} ms`)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:o,step:n,amount:l}}=t.currentTarget;let s=1,i=o.valueAsNumber,u=i+n.valueAsNumber;e(s,i);for(let t=2;t<=l.value;t+=1)s+=1,e(s,u),u+=n.valueAsNumber}));
//# sourceMappingURL=03-promises.a244b0a5.js.map
