const express = require("express");
const app = express();

app.use(express.json());

app.post("/grant-access", (req, res) => {
    const { accessGranted } = req.body;

    if (accessGranted) {
        // Xử lý việc cấp quyền truy cập
        console.log("Người dùng đã cấp quyền truy cập");
        res.status(200).send("Quyền truy cập đã được cấp");
    } else {
        res.status(400).send("Quyền truy cập không được cấp");
    }
});

app.listen(3000, () => {
    console.log("Máy chủ đang chạy trên cổng 3000");
});
