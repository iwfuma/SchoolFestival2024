import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import amezonlogo from "../../../../assets/phishing/amezonlogo.png";

import { validateEmailOrPhone } from "@/utils/validation/mailValidation";

const LoginMail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    const trimmedEmail = email.trim();
    const errorMessage = validateEmailOrPhone(email);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError(null);
    localStorage.setItem("savedText", email.trim());
    navigate("/phishing/login/pass");
  };

  const goToSignup = () => {
    navigate("/phishing/signup");
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        maxWidth: 350,
        mx: "auto",
        mt: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        p: 3,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ロゴ */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Box
          component="img"
          src={amezonlogo}
          alt="Amezon ロゴ"
          sx={{ width: 150, height: 60 }}
        />
        <Typography ml={1} fontSize={16}>
          .co.jp
        </Typography>
      </Box>

      {/* タイトル */}
      <Typography variant="h4" fontWeight={200} mb={2} align="center">
        ログイン
      </Typography>

      {/* メールアドレス入力 */}
      <Box mb={2}>
        <Typography mb={0.5}>Eメールまたは携帯電話番号</Typography>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error || " "}
        />
      </Box>

      {/* 次に進む */}
      <Button
        variant="contained"
        fullWidth
        onClick={onSubmit}
        sx={{
          bgcolor: "#ffd500",
          color: "black",
          borderRadius: 2,
          fontSize: 12,
          height: 40,
          "&:hover": {
            bgcolor: "#ffc400f4",
          },
          textTransform: "none",
          mb: 2,
        }}
      >
        次に進む
      </Button>

      {/* 利用規約 */}
      <Typography variant="body2" mb={1} sx={{ fontWeight: 200 }}>
        Amazonの
        <Link
          href="https://www.amazon.co.jp/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=643006"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          利用規約
        </Link>
        と
        <Link
          href="https://www.amazon.co.jp/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=643000"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 0.5 }}
        >
          プライバシー規約
        </Link>
        に同意いただける場合はログインしてください。
      </Typography>

      <Typography variant="body2" sx={{ fontWeight: 200, mb: 3 }}>
        パスワードを忘れた場合
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        mb={1}
      >
        初めてAmezonをご利用ですか？
      </Typography>

      {/* アカウント作成 */}
      <Button
        variant="outlined"
        fullWidth
        onClick={goToSignup}
        sx={{
          borderRadius: 1,
          textTransform: "none",
          fontSize: 13,
          mb: 5,
        }}
      >
        Amezonアカウントを作成する
      </Button>

      {/* フッター */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#f3f3f3",
          fontSize: 12,
          color: "#888",
          textAlign: "center",
          py: 3,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 1, display: "flex", gap: 2, justifyContent: "center" }}>
          <Link
            href="https://www.amazon.co.jp/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&amp;nodeId=643006"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#0066c0",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            利用規約
          </Link>
          <Link
            href="https://www.amazon.co.jp/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&amp;nodeId=643000"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#0066c0",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            プライバシー規約
          </Link>
          <Link
            href="https://www.amazon.co.jp/help"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#0066c0",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            ヘルプ
          </Link>
        </Box>
        <Typography variant="caption" sx={{ color: "#888" }}>
          &copy; 1996-2024, Amezon.com, Inc. またはその関連会社
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginMail;
