import React, { useEffect, useRef } from 'react';

const Typewriter = ({ texts = [], period = 2000 }) => {
  const elRef = useRef(null);
  const loopNum = useRef(0);
  const txt = useRef('');
  const isDeleting = useRef(false);
  const timeoutId = useRef(null); // 🧠 Store timeout ID

  useEffect(() => {
    const tick = () => {
      const i = loopNum.current % texts.length;
      const fullTxt = texts[i];

      if (isDeleting.current) {
        txt.current = fullTxt.substring(0, txt.current.length - 1);
      } else {
        txt.current = fullTxt.substring(0, txt.current.length + 1);
      }

      if (elRef.current) {
        elRef.current.textContent = txt.current;
      }

      let delta = 120 + Math.random() * 100;
      if (isDeleting.current) delta /= 1.5;

      if (!isDeleting.current && txt.current === fullTxt) {
        delta = period;
        isDeleting.current = true;
      } else if (isDeleting.current && txt.current === '') {
        isDeleting.current = false;
        loopNum.current++;
        delta = 900;
      }

      // 🚫 Clear previous timeout
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(tick, delta);
    };

    tick();

    // Cursor CSS
    const style = document.createElement('style');
    style.innerHTML = `
      .typewrite > .wrap {
        border-right: 0.08em solid #fff;
        animation: fadeIn 0.4s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0.5; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(timeoutId.current); // 🧼 clear timer
      document.head.removeChild(style);
    };
  }, [texts, period]);

  return (
    <h3 className="typewrite text-white text-2xl md:text-4xl font-bold text-left ">
      <span
        ref={elRef}
        className="inline-block border-r-5 border-slate-800 text-[#4ED7F1] animate-blink pr-1"
      ></span>
    </h3>
  );
};

export default Typewriter;
