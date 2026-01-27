
export interface Assignment {
  id: string;
  title: string;
  shortDescription: string;
  videoUrl?: string;
  inference: string;
  date: string;
}

export interface Tool {
  name: string;
  category: string;
}
