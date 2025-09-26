// HTTP service with proper error handling and type safety
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export class HttpService {
  private defaultHeaders = { "Content-Type": "application/json" };

  constructor() {}

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    try {
      const data = await response.json();
      
      if (!response.ok) {
        return {
          error: data.message || `HTTP error! status: ${response.status}`,
          status: response.status,
        };
      }
      
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Failed to parse response",
        status: response.status,
      };
    }
  }

  public async get<T>(url: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    const options: RequestInit = { 
      method: "GET", 
      headers: new Headers({ ...this.defaultHeaders }) 
    };

    try {
      const queryString = params ? `?${new URLSearchParams(params)}` : "";
      const response = await fetch(url + queryString, options);
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Network error",
        status: 0,
      };
    }
  }

  public async post<T>(url: string, payload?: any): Promise<ApiResponse<T>> {
    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: new Headers({ ...this.defaultHeaders }),
    };

    try {
      const response = await fetch(url, options);
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Network error",
        status: 0,
      };
    }
  }

  public async patch<T>(url: string, payload?: any): Promise<ApiResponse<T>> {
    const options: RequestInit = {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: new Headers({ ...this.defaultHeaders }),
    };

    try {
      const response = await fetch(url, options);
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Network error",
        status: 0,
      };
    }
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    const options: RequestInit = {
      method: "DELETE",
      headers: new Headers({ ...this.defaultHeaders }),
    };

    try {
      const response = await fetch(url, options);
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Network error",
        status: 0,
      };
    }
  }
}

export const httpService = new HttpService();
