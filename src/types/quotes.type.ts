export interface QuoteResponse {
  status: string,
  message: string,
  data: {
    quote: Quote
  }
}

export interface Quote {
  id: string,
  author: string,
  quote: string,
  // category: []
}
