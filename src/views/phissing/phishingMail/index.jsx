import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../../../component/Button/button";
import styles from "./PhishingMail.module.css";
import iPhon16image from "../../../assets/phishing/iPhone16.jpg"
import { useNavigate } from "react-router-dom";
const PhishingMail = () => {

  const Navigate = useNavigate();

  const handleAccept = () => {
    Navigate("/phishing/")
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {/* ヘッダー部分 */}
        <div className={styles.header}>
          <img src="/amezon_logo.png" alt="Amazon ロゴ" />
        </div>

        {/* キャンペーンバナー */}
        <div className={styles.banner}>
          <img src={iPhon16image}
            alt="iPhone 16"
          />
        </div>

        {/* 本文の内容部分 */}
        <div className={styles.content}>
          <h2>🎉おめでとうございます！🎉</h2>
          <p>
            Amazonをご利用いただき、ありがとうございます。お客様は{" "}
            <strong>「iPhone 16」が当たるキャンペーン</strong> の当選者です。
          </p>
          <p>
            この素晴らしい景品を受け取るには、以下のボタンをクリックし、必要な情報を入力してください。
          </p>

          {/* ボタン */}
            <Button onClick={handleAccept}>景品を受け取る</Button>


          {/* キャンペーン情報ボックス */}
          <div className={styles.infoBox}>
            <p>
              <strong>キャンペーン詳細:</strong>
            </p>
            <p>・当選品: iPhone 16</p>
            <p>・受け取り手続きは簡単！ 3分以内に完了します。</p>
            <p>・受け取り手続きの有効期限: 2024年10月31日</p>
          </div>

          <p>
            ご不明な点がございましたら、
            <a href="#">カスタマーサポート</a>までお問い合わせください。
          </p>
        </div>

        {/* フッター部分 */}
        <div className={styles.footer}>
          <p>
            <a href="#">利用規約</a> | <a href="#">プライバシー規約</a> |{" "}
            <a href="#">ヘルプ</a>
          </p>
          <p>&copy; 1996-2024 Amezon.com, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PhishingMail;
