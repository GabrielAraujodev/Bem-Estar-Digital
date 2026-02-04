import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Activity, Brain, Zap, Target } from "lucide-react";

const data = [
    { name: "06:00", value: 40, stress: 20 },
    { name: "09:00", value: 65, stress: 45 },
    { name: "12:00", value: 55, stress: 30 },
    { name: "15:00", value: 85, stress: 60 },
    { name: "18:00", value: 75, stress: 25 },
    { name: "21:00", value: 95, stress: 15 },
    { name: "00:00", value: 80, stress: 10 },
];

export const InteractiveDashboardPreview = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container relative z-10 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
                        >
                            <Target className="h-4 w-4 text-emerald-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Biohacking Brasileiro</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8"
                        >
                            DADOS QUE <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">LIBERTAM.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                        {/* Control Panel */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-4">
                            {[
                                { label: "Performance Cognitiva", value: "98.2", sub: "+12% esta semana", icon: <Brain className="h-5 w-5 text-emerald-400" /> },
                                { label: "Resiliência ao Estresse", value: "74.5", sub: "Estado: Excelente", icon: <Activity className="h-5 w-5 text-violet-400" /> },
                                { label: "Qualidade do Foco", value: "89.0", sub: "Pico: 15:45", icon: <Zap className="h-5 w-5 text-amber-400" /> },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 group hover:border-emerald-500/30 transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="h-12 w-12 rounded-2xl bg-black flex items-center justify-center border border-white/5">
                                            {stat.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-black text-white">{stat.value}</div>
                                            <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">{stat.sub}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-zinc-600 font-bold uppercase tracking-widest leading-none">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Visualizer */}
                        <div className="flex-1 min-h-[500px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="h-full rounded-[3rem] bg-zinc-900 border border-white/10 p-10 flex flex-col relative overflow-hidden group shadow-2xl"
                            >
                                {/* Grid Decoration */}
                                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                                <div className="flex items-center justify-between mb-16 relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-black text-white tracking-tight">Análise de Fluxo</h3>
                                        <p className="text-sm text-zinc-500 font-medium">Frequência Cardiovascular vs. Foco</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-4 py-2 rounded-xl bg-black border border-white/5 text-[10px] font-black uppercase tracking-widest text-emerald-400">Tempo Real</div>
                                    </div>
                                </div>

                                <div className="flex-1 w-full relative z-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="proEmerald" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                                            <XAxis
                                                dataKey="name"
                                                stroke="#3f3f46"
                                                fontSize={10}
                                                tickLine={false}
                                                axisLine={false}
                                                tick={{ fill: '#71717a', fontWeight: 'bold' }}
                                                dy={10}
                                            />
                                            <YAxis hide />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: "#000", border: "1px solid #ffffff10", borderRadius: "16px", padding: '16px' }}
                                                itemStyle={{ color: "#10b981", fontWeight: '900', fontSize: '12px', textTransform: 'uppercase' }}
                                                cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '5 5' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#10b981"
                                                strokeWidth={4}
                                                fillOpacity={1}
                                                fill="url(#proEmerald)"
                                                animationDuration={2500}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-10 relative z-10">
                                    <div className="flex gap-12">
                                        <div>
                                            <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1">Duração Média</div>
                                            <div className="text-xl font-black text-white">42.5m</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1">Sessões Totais</div>
                                            <div className="text-xl font-black text-white">128</div>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 rounded-full border border-emerald-500/20 flex items-center justify-center">
                                        <Activity className="h-5 w-5 text-emerald-500 animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
