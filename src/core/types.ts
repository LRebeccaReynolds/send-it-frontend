interface Climb {
  attempts: Attempt[];
  format: string;
  grade: string;
  gym: string;
  name?: string;
  notes: string;
  sent: boolean;
  tags?: string[];
}

interface Attempt {
  date: string;
  // eventually add some links or photo capabilities?
}

export type { Climb, Attempt };
