export interface Gesture {
  name: string;
  type: "default" | "custom";
  points: Point[];
}

export interface Point {
  x: number;
  y: number;
}
