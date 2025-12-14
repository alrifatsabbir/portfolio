"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';


const chat = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.7,
      duration: 0.5,
    },
  }),
};

function ThinkingDots() {
  return (
    <div className="flex gap-1 px-4 py-2">
      <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
      <span className="w-1.5 h-1.5 bg-gray-100 rounded-full animate-bounce [animation-delay:0.15s]" />
      <span className="w-1.5 h-1.5 bg-gray-200 rounded-full animate-bounce [animation-delay:0.3s]" />
    </div>
  );
}

function AIBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 max-w-[90%]">
      {/* Avatar */}
      <div className="min-w-8 min-h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
        AI
      </div>

      {/* Bubble */}
<div className="bg-gradient-to-br from-purple-400 to-purple-500
 shadow-lg shadow-purple-500/30
 rounded-2xl px-4 py-2 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}


export default function FinanceBuddyChat() {

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  const id = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(id);
}, []);


  if (!mounted) return null; 


  return (
    <section className="py-28 flex justify-center">
      {/* Phone */}
      <div className="w-[300px] h-[620px] rounded-[42px] bg-black p-2.5 shadow-2xl">
        <div className="w-full h-full bg-gradient-to-b from-slate-50 to-indigo-200  rounded-4xl px-4 py-6 space-y-4 overflow-hidden">

          {/* Message 1 */}
          <motion.div
            custom={0}
            variants={chat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AIBubble>Finance Buddy</AIBubble>
          </motion.div>

          {/* Thinking */}
          <motion.div
            custom={1}
            variants={chat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          </motion.div>

          {/* Message 2 */}
          <motion.div
            custom={2}
            variants={chat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AIBubble>Meet Your Finance Buddy</AIBubble>
          </motion.div>

          {/* Message 3 */}
          <motion.div
            custom={3}
            variants={chat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AIBubble>
              Ask anything about your money or investments. Your Finance Buddy
              explains it in simple language and helps you make informed
              decisions.
            </AIBubble>
<motion.div
  custom={1}
  variants={chat}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
    <br />
  <AIBubble>
    <ThinkingDots />
  </AIBubble>
</motion.div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
