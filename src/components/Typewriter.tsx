"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  lines,
  speed = 45,
  lineDelay = 400,
  startDelay = 300,
  className,
}: {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  startDelay?: number;
  className?: string;
}) {
  const [resolvedLines, setResolvedLines] = useState<string[]>(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function typeLine(lineIndex: number, charIndex: number) {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }

      const target = lines[lineIndex];
      if (charIndex <= target.length) {
        setResolvedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = target.slice(0, charIndex);
          return next;
        });
        const t = setTimeout(() => typeLine(lineIndex, charIndex + 1), speed);
        timeouts.push(t);
      } else {
        setActiveLine(lineIndex + 1);
        const t = setTimeout(() => typeLine(lineIndex + 1, 0), lineDelay);
        timeouts.push(t);
      }
    }

    const initial = setTimeout(() => typeLine(0, 0), startDelay);
    timeouts.push(initial);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className}>
      {resolvedLines.map((line, i) => (
        <span key={i} className="block">
          {line}
          {activeLine === i && !done && (
            <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-pulse bg-glow-cyan align-middle" />
          )}
        </span>
      ))}
    </span>
  );
}
