import express from 'express';
const router = express.Router();

router.post('/submit-bet', async (req, res) => {
  try {
    const betTime = new Date(req.body.betTime);
    const unixTimestamp = betTime.getTime() / 1000;

    // Placeholder for blockchain inscription logic
    console.log(`Bet time (Unix timestamp): ${unixTimestamp}, Bet Amount: ${req.body.betAmount}`);

    // Simulated inscription ID
    const inscriptionId = 'simulated_inscription_id';
    res.status(200).send({ inscriptionId });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;