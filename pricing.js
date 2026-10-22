// SINGLE SOURCE OF TRUTH for prices.
const PRICING={labor:4.99,standardGrip:7.99,premiumGrip:12.99,putterGripFrom:15,
 byoFee:10, // per order
 travel:{ // miles measured from Weston, FL
  zone1:{maxMi:15,fee:0,minClubs:5},
  zone2:{maxMi:20,fee:15,waiveAtClubs:13},
  zone3:{maxMi:30,fee:25,waiveAtClubs:20},
  zone4:{minOrder:150}}};
(function(){const f=v=>'$'+(Number.isInteger(v)?v:v.toFixed(2)),T=PRICING.travel;
const d={labor:PRICING.labor,standardGrip:PRICING.standardGrip,premiumGrip:PRICING.premiumGrip,putterGripFrom:PRICING.putterGripFrom,
standardInstalled:Math.round((PRICING.standardGrip+PRICING.labor)*100)/100,premiumInstalled:Math.round((PRICING.premiumGrip+PRICING.labor)*100)/100,
byoFee:PRICING.byoFee,zone2Fee:T.zone2.fee,zone3Fee:T.zone3.fee,zone4MinOrder:T.zone4.minOrder};
const n={zone1Max:T.zone1.maxMi,zone2Max:T.zone2.maxMi,zone3Max:T.zone3.maxMi,zone1MinClubs:T.zone1.minClubs,zone2Waive:T.zone2.waiveAtClubs,zone3Waive:T.zone3.waiveAtClubs};
document.querySelectorAll('[data-price]').forEach(e=>{const k=e.dataset.price;if(k in d)e.textContent=f(d[k]);});
document.querySelectorAll('[data-num]').forEach(e=>{const k=e.dataset.num;if(k in n)e.textContent=n[k];});})();
