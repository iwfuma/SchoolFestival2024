export const validateEmailOrPhone = (input) => {
    const trimmed = input.trim();

    if (!trimmed) {
        return "Eメールまたは携帯電話番号を入力してください。";
    }

    const isEmail = /^[\w.-]+@[\w.-]+\.\w+$/.test(trimmed);
    const isPhone = /^\d{10,11}$/.test(trimmed);

    if (!isEmail && !isPhone) {
        return "有効なEメールまたは携帯電話番号を入力してください。";
    }

    return null; // 問題なし
};
