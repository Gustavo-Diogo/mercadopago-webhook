const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/webhook", async (req, res) => {
  const axios = require("axios");
  console.log(req.body);
  try {
    await axios.post(
      "https://discord.com/api/webhooks/1033882503976583218/BeEGZuJ91jx4V8v7ROPOucF-Jv1eJc_1Soa-TyXNG7SoYRSChJ-Eekfv77aZvqsiMo-T",
      {
        avatar_url: "",
        username: "TeasyBotao",
        content: JSON.stringify(req.body),
        embeds: [],
      }
    );
    return res.status(200).json({
      message: "ok",
    });
  } catch {
    return res.status(400).json({
      message: "not ok :(",
    });
  }
});

app.listen(3030, () => {
  console.log("server on 3030");
});
