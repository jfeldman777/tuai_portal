(function(){
  const openers=document.querySelectorAll('[data-open-copyright]');
  const backdrop=document.getElementById('copyright-backdrop');
  const closeBtn=document.getElementById('copyright-close');
  if(!backdrop) return;
  openers.forEach(el=>el.addEventListener('click',()=>{backdrop.style.display='flex';}));
  if(closeBtn) closeBtn.addEventListener('click',()=>{backdrop.style.display='none';});
  backdrop.addEventListener('click',(e)=>{if(e.target===backdrop) backdrop.style.display='none';});
})();