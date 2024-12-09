import firestore from "../firestore/config";
import csvParser from "csv-parser";
import fs from "fs";

const uploadQuotes = async () => {
  const quotesCollection = firestore.collection("quotes");

  fs.createReadStream("/home/hildankutomo/Documents/q-feature/src/helpers/quotes_dataset.csv")
    .pipe(csvParser())
    .on("data", async (row) => {
      await quotesCollection.add({
        Number: row.Number,
        Quote: row.Quote,
        Author: row.Author,
      });
    })
    .on("end", () => {
      console.log("Quotes uploaded successfully!");
    });
};

uploadQuotes();
