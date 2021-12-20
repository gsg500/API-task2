const express = require("express");
const Candidates = require("./data/candidates");
const PORT = 4000;
const app = express();

app.post("/", (req, res) => {
    Candidates.push({ id: Candidates.length + 1, ...req.body });
   return res.status(201).json({ ...Candidates[Candidates.length - 1] });
  });

app.get("/search/skills/:skills", async (req, res) => {  
  try {const result = Candidates.filter((CurrCandidate) => {    
   return (CurrCandidate.skills.length >= 4 &&
    CurrCandidate.skills.includes(req.params.skills));
   }); res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

app.listen(PORT, () => { console.log(`Server rodando na porta ${PORT}`); });

//API POST inclui candidato
//API GET retorna candidato que contem a skill
//desejada e que possui apenas mais de 4 skills