import { Point } from "@/types/gesture";

export interface Mapping {
  site: string;
  gesture: string;
  action: string;
}

export type MappingWithPoints = Mapping & {
  points: Point[];
  createdAt: string;
};
