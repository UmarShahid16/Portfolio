"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center lg:min-h-[480px]">
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-violet-600/10 blur-3xl" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-surface/80 p-6 shadow-2xl backdrop-blur-xl"
      >
        {/* Window controls */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted">BackendService.java</span>
        </div>

        {/* Code block */}
        <div className="space-y-2 font-mono text-xs leading-relaxed md:text-sm">
          <CodeLine indent={0}>
            <span className="text-violet-400">@RestController</span>
          </CodeLine>
          <CodeLine indent={0}>
            <span className="text-violet-400">@RequestMapping</span>
            <span className="text-muted">(</span>
            <span className="text-emerald-400">&quot;/api/v1&quot;</span>
            <span className="text-muted">)</span>
          </CodeLine>
          <CodeLine indent={0}>
            <span className="text-blue-400">public class </span>
            <span className="text-amber-300">ApiController</span>
            <span className="text-muted"> {"{"}</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-violet-400">@Autowired</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-blue-400">private </span>
            <span className="text-amber-300">UserService</span>
            <span className="text-muted"> service;</span>
          </CodeLine>
          <CodeLine indent={0}>&nbsp;</CodeLine>
          <CodeLine indent={1}>
            <span className="text-violet-400">@GetMapping</span>
            <span className="text-muted">(</span>
            <span className="text-emerald-400">&quot;/users&quot;</span>
            <span className="text-muted">)</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-blue-400">public </span>
            <span className="text-amber-300">ResponseEntity</span>
            <span className="text-muted">&lt;</span>
            <span className="text-amber-300">List</span>
            <span className="text-muted">&gt; </span>
            <span className="text-sky-400">getUsers</span>
            <span className="text-muted">() {"{"}</span>
          </CodeLine>
          <CodeLine indent={2}>
            <span className="text-blue-400">return </span>
            <span className="text-amber-300">ResponseEntity</span>
            <span className="text-muted">.ok(service.findAll());</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-muted">{"}"}</span>
          </CodeLine>
          <CodeLine indent={0}>
            <span className="text-muted">{"}"}</span>
          </CodeLine>
        </div>

        {/* Floating badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-3 top-12 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-sm"
        >
          REST API
        </motion.div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-3 bottom-16 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-sm"
        >
          Spring Boot
        </motion.div>
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-2 right-8 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400 backdrop-blur-sm"
        >
          Microservices
        </motion.div>
      </motion.div>

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function CodeLine({
  children,
  indent,
}: {
  children: React.ReactNode;
  indent: number;
}) {
  return (
    <div style={{ paddingLeft: `${indent * 1.25}rem` }} className="text-foreground/90">
      {children}
    </div>
  );
}
