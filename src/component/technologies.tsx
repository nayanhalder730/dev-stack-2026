import { use } from "react";
import type { ITechnology } from "../type/type";

export interface TechnologiesProps {
  technologies: Promise<ITechnology[]>;
}

export default function Technologies({
  technologies,
}: TechnologiesProps) {
  const tec = use(technologies);

  return (
    <div>
      <h2>Total Technologies: {tec.length}</h2>
    </div>
  );
}