(function(){
  let i=0; const sel=new Array(QUESTIONS.length).fill(null);
  const votes={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0};
  const quizEl=document.getElementById('quiz');
  const prevBtn=document.getElementById('prevBtn');
  const nextBtn=document.getElementById('nextBtn');
  const finishBtn=document.getElementById('finishBtn');
  const resultEl=document.getElementById('result');
  const summary=document.getElementById('summary');

  function renderQuestion(idx){
    const q=QUESTIONS[idx];
    quizEl.innerHTML="";
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
    const entries=Object.entries(votes).map(([L,v])=>({L:parseInt(L),v})).sort((a,b)=>b.v-a.v||a.L-b.L);
    const top=entries[0];
    const tips={
      1:"Интуиция сильна. Следующий шаг — добавить план и простые правила.",
      2:"Ценишь «мы» и справедливость. Добавь темп и ритуал.",
      3:"Силен в действии и сроках. Усиль порядок и управление риском.",
      4:"Держишь порядок и роли. Учись брать выбор и свободу.",
      5:"Берёшь ответственность и риск. Усиль системность.",
      6:"Видишь причинность и строишь модели. Упражняй парадокс.",
      7:"Пересобираешь рамки. Делай мосты к людям и процедурам.",
      8:"Сводишь разные системы. Добавь выбор и действие."
    };
    summary.innerHTML=`<p><b>Доминирующий стиль:</b> L${top.L}</p><p>${tips[top.L]||""}</p>`;
    resultEl.style.display='block'; resultEl.scrollIntoView({behavior:'smooth',block:'start'});
  }

  prevBtn.addEventListener('click',()=>{ if(i>0){ i--; renderQuestion(i);} });
  nextBtn.addEventListener('click',()=>{ if(i<QUESTIONS.length-1){ i++; renderQuestion(i);} });
  finishBtn.addEventListener('click',compute);
  renderQuestion(i);
})();