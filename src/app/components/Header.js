// This was following a tutorial: https://www.youtube.com/watch?v=He1_AH6kC8Y&t=59s
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

let clamp = (number, min, max) => Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.onChange((current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
      <div className=" z-50 flex-1 overflow-y-scroll">
        <motion.header
          style={{
            height: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [80, 50]
            ),
            backgroundColor: useMotionTemplate`rgb(255 255 255 / ${useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [1, 0.1]
            )})`,
          }}
          className="fixed inset-x-0 flex h-20 shadow backdrop-blur-md"
        >
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">
            <motion.p
              style={{
                scale: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0.9]
                ),
              }}
              className="flex origin-left items-center text-xl font-semibold uppercase"
            >
              <Link href="/">
                <span className="-ml-1 text-2xl tracking-[-.075em]">
                  World Cup Legacies
                </span>
              </Link>
            </motion.p>
            <motion.nav
              style={{
                opacity: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0]
                ),
              }}
              className="flex space-x-4 text-xl font-medium text-slate-400"
            >
              <motion.a
                whileHover={{ scale: 1.05, color: "black" }}
                // transition={{ duration: 0.05 }}
                href="/Brazil"
              >
                Brazil
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "black" }}
                href="/Russia"
              >
                Russia
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "black" }}
                href="/Qatar"
              >
                Qatar
              </motion.a>
            </motion.nav>
          </div>
        </motion.header>
      </div>
    </div>
  );
}
