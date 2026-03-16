"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import type { ActivityPointDTO } from "@/types/dto";

export function ActivityChart({ data }: { data: ActivityPointDTO[] }) {
  return (
    <Card className="p-5">
      <h3 className="font-display text-3xl">Audience activity</h3>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="rgba(31,27,24,0.08)" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#224f47" radius={[8, 8, 0, 0]} />
            <Bar dataKey="saves" fill="#9b6a46" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
