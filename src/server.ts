import app from "./app";
import dbConnection from "./lib/db"

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  dbConnection();
});
