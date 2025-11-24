import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post("/send", async (req, res) => {
  const { name, surname, description } = req.body;

  const text = `
📝 Yangi Free Trial ariza:

👤 Name: ${name}
👥 Surname: ${surname}
💬 Description: ${description}
`;

  try {
    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }
    );

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, error });
  }
});

app.listen(4000, () => console.log("Server running on Port 4000"));
