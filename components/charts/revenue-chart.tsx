"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import type { RevenuePointDTO } from "@/types/dto";

export function RevenueChart({ data }: { data: RevenuePointDTO[] }) {
  return (
    <Card className="p-5">
      <h3 className="font-display text-3xl">Revenue</h3>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#224f47" stopOpacity={0.65} />
                <stop offset="100%" stopColor="#224f47" stopOpacity={0.08} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(31,27,24,0.08)" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#224f47"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
