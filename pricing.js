// SINGLE SOURCE OF TRUTH for prices. Pricing pending owner confirmation.
const PRICING={labor:4.99,standardGrip:7.99,premiumGrip:12.99,putterGripFrom:15};
(function(){const f=v=>'$'+(Number.isInteger(v)?v:v.toFixed(2));
const d={labor:PRICING.labor,standardGrip:PRICING.standardGrip,premiumGrip:PRICING.premiumGrip,putterGripFrom:PRICING.putterGripFrom,
standardInstalled:Math.round((PRICING.standardGrip+PRICING.labor)*100)/100,premiumInstalled:Math.round((PRICING.premiumGrip+PRICING.labor)*100)/100};
document.querySelectorAll('[data-price]').forEach(e=>{const k=e.dataset.price;if(k in d)e.textContent=f(d[k]);});})();
