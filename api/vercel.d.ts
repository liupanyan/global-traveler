// Vercel Serverless Functions 类型定义
declare module "@vercel/node" {
  export interface VercelRequest {
    method?: string;
    body?: any;
    query?: Record<string, string | string[]>;
    headers?: Record<string, string>;
    url?: string;
  }

  export interface VercelResponse {
    status(code: number): VercelResponse;
    json(data: any): VercelResponse;
    send(data: any): VercelResponse;
    setHeader(name: string, value: string): void;
  }
}

