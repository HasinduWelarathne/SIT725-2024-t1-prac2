var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.json());

app.get("/addTwoNumbers", (req, res) => {
    
    const num1 = req.query.num1.trim();
    const num2 = req.query.num2.trim();

    
    if (!num1 || !num2) {
        return res.status(400).json({ error: "Please provide both numbers" });
    }

    const num1Int = parseInt(num1);
    const num2Int = parseInt(num2);

    if (isNaN(num1Int) || isNaN(num2Int)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    const sum = num1Int + num2Int;

    res.json({ sum });
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});
