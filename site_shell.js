(()=>{
  const filename=location.pathname.split('/').pop().toLowerCase();
  const mode=document.getElementById('plant-nav')?.dataset.pageMode || (filename==='stage4_pea.html'?'pea':filename==='stage4_quiz.html'?'quiz':filename==='stage4_gene.html'?'gene':'peach');
  document.querySelector(`.plant-mode[data-mode="${mode}"]`)?.setAttribute('aria-current','page');
  if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
      window.addEventListener('load',()=>setTimeout(()=>navigator.serviceWorker.register('./sw.js').catch(e=>console.warn('離線快取目前不可用',e)),1200));
  }
})();
