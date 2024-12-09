import type { Request, Response } from "express";
import firestore from "../firestore/config";
import type { QuoteResponse, Quote } from "../types/quotes.type";

export const getRandomQuote = async (req: Request, res: Response) => {
  try {
    const quotesCollection = firestore.collection("quotes");
    const snapshot = await quotesCollection.get();

    if (snapshot.empty) {
      const response: QuoteResponse = {
        status: "error",
        message: "No quotes found",
        data: { quote: null as any }, // null digunakan saat tidak ada data
      };
      return res.status(404).json(response);
    }

    const quotes: Quote[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      author: doc.data().Author,
      quote: doc.data().Quote,
      // category: doc.data().Category || [],
    }));

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const response: QuoteResponse = {
      status: "success",
      message: "Random quote fetched successfully",
      data: { quote: randomQuote },
    };

    res.json(response);
  } catch (err) {
    console.error("Failed to fetch random quote", err);

    const response: QuoteResponse = {
      status: "error",
      message: "Failed to fetch random quote",
      data: { quote: null as any },
    };

    res.status(500).json(response);
  }
};
