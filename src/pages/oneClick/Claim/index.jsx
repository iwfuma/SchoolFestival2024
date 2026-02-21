import React, { useEffect, useState } from "react";
import { getRandomAccountNumber } from "@/utils/oneClick/accountnum";
import { getRandomInt } from "@/utils/oneClick/random";
import { getCurrentFormattedDate } from "@/utils/oneClick/registrationDate";
import { getRandomPaymentAmount } from "@/utils/oneClick/randomPayment";
import { convertSecondsToHMS } from "@/utils/oneClick/countdown";

import styles from "@/styles/components/Claim.module.css";

const Claim = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(21600); // 6時間

  useEffect(() => {
    setAccountNumber(getRandomAccountNumber());
    setCustomerNumber(getRandomInt(10000000, 99999999).toString());
    setRegistrationDate(getCurrentFormattedDate());
    setPaymentAmount(getRandomPaymentAmount());
  }, []);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timerId = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [secondsLeft]);

  useEffect(() => {
    document.body.classList.add("claim-background");
    return () => {
      document.body.classList.remove("claim-background");
    };
  }, []);

  const { hours, minutes, seconds } = convertSecondsToHMS(secondsLeft);

  return (
    <div
      className={styles.container}
      style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>
        会員登録が完了しました
      </h1>
      <p style={{ fontSize: "1.2em", textAlign: "center" }}>
        期限内に{" "}
        <span style={{ fontWeight: "bold" }}>
          {paymentAmount.toLocaleString()}
        </span>{" "}
        円お支払いください。
      </p>

      {/* カウントダウン表示 */}
      <div
        id="sec"
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        {hours}時間 {minutes}分 {seconds}秒
      </div>

      <h2>会員情報</h2>
      <table style={{ width: "100%", marginBottom: 30 }}>
        <tbody>
          <tr>
            <td>お客様番号</td>
            <td>{customerNumber}</td>
          </tr>
          <tr>
            <td>登録日時</td>
            <td>{registrationDate}</td>
          </tr>
        </tbody>
      </table>

      <h2>振込先口座</h2>
      <table style={{ width: "100%", marginBottom: 30 }}>
        <tbody>
          <tr>
            <td>銀行名（銀行コード）</td>
            <td>ゆんちょ銀行 (7E3)</td>
          </tr>
          <tr>
            <td>支店名（支店コード）</td>
            <td>サレド支店 （AF6）</td>
          </tr>
          <tr>
            <td>種別</td>
            <td>普通預金</td>
          </tr>
          <tr>
            <td>口座番号</td>
            <td>{accountNumber}</td>
          </tr>
        </tbody>
      </table>

      <h2>お問い合わせ</h2>
      <table style={{ width: "100%", marginBottom: 30 }}>
        <tbody>
          <tr>
            <td>電話番号</td>
            <td>0800-1234-5678</td>
          </tr>
          <tr>
            <td>メールアドレス</td>
            <td>1234@5678.nine.jp</td>
          </tr>
        </tbody>
      </table>

      <p style={{ color: "red", textAlign: "center" }}>
        ※お支払いが確認できなかった場合は法的措置を取らせていただきます。
      </p>
    </div>
  );
};

export default Claim;
