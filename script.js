// --- Typing effect (progressively reveal) ---
(function(){
  const el = document.querySelector('.typing');
  const full = el.dataset.text || el.textContent;
  el.textContent = "";
  let i = 0;
  const tick = () => {
    if(i <= full.length){
      el.textContent = full.slice(0, i++);
      requestAnimationFrame(tick);
    }
  };
  tick();
})();

// --- Balloons generator ---
(function(){
  const wrap = document.getElementById('balloons');
  const colors = ['#ff77c1', '#8ec5ff', '#ffd166', '#a7f3d0', '#fca5a5', '#c4b5fd'];
  const count = 18;
  for(let i=0;i<count;i++){
    const b = document.createElement('div');
    b.className = 'balloon';
    const x = Math.random()*100;
    const delay = Math.random()*6;
    const dur = 10 + Math.random()*8;
    const color = colors[i % colors.length];
    b.style.left = x+'%';
    b.style.setProperty('--balloon-color', color);
    b.animate([
      { transform:`translate(-50%, 0)` },
      { transform:`translate(-50%, -110vh)` }
    ], { duration: dur*1000, delay: delay*1000, iterations: Infinity, easing:'linear' });
    wrap.appendChild(b);
  }
})();

// --- Confetti generator ---
const confettiWrap = document.getElementById('confetti');
function burstConfetti(n=120){
  const colors = ['#ff77c1','#5aa9ff','#ffd166','#34d399','#f97316','#a78bfa'];
  for(let i=0;i<n;i++){
    const c = document.createElement('div');
    c.className = 'confetto';
    const x = Math.random()*100;
    const y = -10 - Math.random()*20;
    const tx = (Math.random()*200-100)+'vw';
    const color = colors[i % colors.length];
    c.style.left = x+'vw';
    c.style.top = y+'vh';
    c.style.background = color;
    c.style.setProperty('--tx', tx);
    const dur = 3000 + Math.random()*2500;
    c.style.animationDuration = dur+'ms';
    confettiWrap.appendChild(c);
    setTimeout(()=> c.remove(), dur+200);
  }
}
document.getElementById('toggleConfetti').addEventListener('click', ()=>burstConfetti());

// --- Background color picker ---
document.getElementById('bgPicker').addEventListener('input', (e)=>{
  document.documentElement.style.setProperty('--bg1', e.target.value);
});

// 🎉 Overlay Start Celebration
document.getElementById('startBtn').addEventListener('click', ()=>{
  document.getElementById('overlay').style.display = 'none';
  burstConfetti(120);
});

// --- Save card as image (simple print dialog hint) ---
document.getElementById('downloadShot').addEventListener('click', ()=>{
  alert('Quick tip: Use your device screenshot or print-to-PDF for saving the card.');
});
