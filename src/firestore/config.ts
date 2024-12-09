import { Firestore } from "@google-cloud/firestore";
import path from "path";

const firestore = new Firestore({
  keyFilename: path.join("svac.json"),
  projectId: "gws-backend",
});

export default firestore;

