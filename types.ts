
export interface Assignment {
  id: string;
  title: string;
  shortDescription: string;
  videoUrl?: string;
  pdfUrl?: string;
  inference: string;
  date: string;
}

export interface Tool {
  name: string;
  category: string;
}
