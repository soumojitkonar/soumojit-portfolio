"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Color system (max 5):
// Primary Blue #2563eb, Accent Purple #7c3aed, Neutrals: White #ffffff, Slate #475569, Gray #9ca3af
const COLORS = ["#2563eb", "#7c3aed", "#475569", "#9ca3af"]

type Datum = { name: string; value: number }

export function SkillsPie({ data }: { data: Datum[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={2}>
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
