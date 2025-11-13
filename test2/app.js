(function(){
  let i=0; const sel=new Array(QUESTIONS.length).fill(null);
  const votes={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0};
  const quizEl=document.getElementById('quiz');
  const prevBtn=document.getElementById('prevBtn');
  const nextBtn=document.getElementById('nextBtn');
  const finishBtn=document.getElementById('finishBtn');
  const resultEl=document.getElementById('result');
  const legendEl=document.getElementById('legend');
  const adviceEl=document.getElementById('advice');
  const radarCanvas=document.getElementById('radar');
  const savePng=document.getElementById('savePng');

  function renderQuestion(idx){
    const q=QUESTIONS[idx]; quizEl.innerHTML="";
    const box=document.createElement('div'); box.className='q';
    const h=document.createElement('h3'); h.textContent=`Вопрос ${idx+1} из ${QUESTIONS.length}: ${q.t}`; box.appendChild(h);
    const opts=document.createElement('div'); opts.className='options';
    q.a.forEach((opt,k)=>{
      const div=document.createElement('label'); div.className='opt'+(sel[idx]===k?' selected':'');
      const input=document.createElement('input'); input.type='radio'; input.name=`q${idx}`; input.value=String(k);
      if(sel[idx]===k) input.checked=true;
      const p=document.createElement('div'); p.textContent=opt.t;
      div.appendChild(input); div.appendChild(p);
      div.addEventListener('click',()=>{
        sel[idx]=k; Array.from(opts.children).forEach(ch=>ch.classList.remove('selected'));
        div.classList.add('selected'); nextBtn.disabled=false;
      });
      opts.appendChild(div);
    });
    box.appendChild(opts); quizEl.appendChild(box);
    prevBtn.disabled=(idx===0); nextBtn.disabled=(sel[idx]===null);
    nextBtn.style.display=(idx<QUESTIONS.length-1)?'inline-block':'none';
    finishBtn.style.display=(idx===QUESTIONS.length-1)?'inline-block':'none';
  }

  function compute(){
    for(let k in votes) votes[k]=0;
    sel.forEach((choice,idx)=>{ const L=QUESTIONS[idx].a[choice].l; votes[L]++; });
    const arr=[votes[1],votes[2],votes[3],votes[4],votes[5],votes[6],votes[7],votes[8]];
    drawRadar(radarCanvas, arr);

    legendEl.innerHTML=''; const total=sel.length;
    for(let L=1; L<=8; L++){ const val=votes[L], pct=Math.round(val*100/total);
      const span=document.createElement('span'); span.className='badge'; span.textContent=`L${L}: ${val} (${pct}%)`; legendEl.appendChild(span);
    }

    const topL=Object.entries(votes).sort((a,b)=>b[1]-a[1]||parseInt(a[0])-parseInt(b[0]))[0][0]*1;
    const tip={1:"Интуиция сильна. Добавь план и простые правила.",2:"Ценишь «мы». Добавь темп и ритуал.",3:"Силен результат. Усиль порядок и управление риском.",4:"Система и правила сильны. Добавь выбор и свободу.",5:"Инициатива и риск. Усиль системность.",6:"Причинность и модели. Упражняй парадокс.",7:"Пересборка. Делай мосты к людям и процедурам.",8:"Синтез систем. Добавь выбор и действие."};
    adviceEl.textContent=`Доминирует L${topL}. ${tip[topL]||""}`;

    resultEl.style.display='block'; resultEl.scrollIntoView({behavior:'smooth',block:'start'});
  }

  prevBtn.addEventListener('click',()=>{ if(i>0){ i--; renderQuestion(i);} });
  nextBtn.addEventListener('click',()=>{ if(i<QUESTIONS.length-1){ i++; renderQuestion(i);} });
  finishBtn.addEventListener('click',compute);
  savePng.addEventListener('click',()=>{ const url=radarCanvas.toDataURL('image/png'); const a=document.createElement('a'); a.href=url; a.download='tuai_profile.png'; a.click(); });
  renderQuestion(i);
})();