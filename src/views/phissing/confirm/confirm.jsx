import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("savedText") || "";
    const storedPassword = localStorage.getItem("savedPassword") || "";
    setEmail(storedEmail);
    setPassword(storedPassword);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h6" gutterBottom>
          入力内容の確認
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          メールアドレスまたは電話番号：
        </Typography>
        <Typography>{email || "未入力"}</Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          パスワード：
        </Typography>
        <Typography>{password ||  "未入力"}</Typography>

        <Button
          variant="contained"
          sx={{ mt: 4 }}
          fullWidth
          onClick={() => navigate("/home")}
        >
          戻る
        </Button>
      </Box>
    </Container>
  );
};

export default Confirm;
