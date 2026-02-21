export const validatePassword = (password) => {
  const trimmed = password.trim();

  if (!trimmed) {
    return "パスワードを入力してください。";
  }

  if (trimmed.length < 8) {
    return "パスワードは8文字以上で入力してください。";
  }

  if (!/[0-9]/.test(trimmed)) return "数字を含めてください。";

  return null; // 問題なし
};
