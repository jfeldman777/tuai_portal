function drawRadar(canvas, values){
  const ctx=canvas.getContext('2d'), W=canvas.width, H=canvas.height;
  ctx.clearRect(0,0,W,H);
  const cx=W/2, cy=H/2+20, R=Math.min(W,H)*0.35, N=8, steps=4, maxVal=Math.max(4,...values);
  ctx.strokeStyle='#223043';
  for(let s=1;s<=steps;s++){ const r=R*(s/steps); ctx.beginPath();
    for(let i=0;i<N;i++){ const a=(-Math.PI/2)+i*(2*Math.PI/N);
      const x=cx+r*Math.cos(a), y=cy+r*Math.sin(a);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    } ctx.closePath(); ctx.stroke();
  }
  ctx.font='14px system-ui, Segoe UI, Roboto'; ctx.fillStyle='#9fb0c3';
  for(let i=0;i<N;i++){ const a=(-Math.PI/2)+i*(2*Math.PI/N);
    const x=cx+(R+16)*Math.cos(a), y=cy+(R+16)*Math.sin(a); const label=`L${i+1}`;
    ctx.textAlign=Math.cos(a)>0.1?'left':(Math.cos(a)<-0.1?'right':'center');
    ctx.textBaseline=Math.sin(a)>0.1?'top':(Math.sin(a)<-0.1?'bottom':'middle');
    ctx.fillText(label,x,y);
  }
  ctx.beginPath();
  for(let i=0;i<N;i++){ const r=values[i]/maxVal; const a=(-Math.PI/2)+i*(2*Math.PI/N);
    const x=cx+(R*r)*Math.cos(a), y=cy+(R*r)*Math.sin(a);
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  } ctx.closePath();
  ctx.fillStyle='rgba(96,165,250,0.25)'; ctx.strokeStyle='rgba(96,165,250,0.9)'; ctx.lineWidth=2; ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,3,0,Math.PI*2); ctx.fillStyle='#60a5fa'; ctx.fill();
}