import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/pages/oneClickHome.css";
import advertisingImage from "../../../assets/oneClick/advertising.png";

const OneClickHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ad = document.getElementById("adContainer");
    if (ad) {
      ad.style.display = "flex";
    }
  }, []);

  const closeAd = (event) => {
    event.stopPropagation();
    const ad = document.getElementById("adContainer");
    if (ad) {
      ad.style.display = "none";
    }
  };

  const OnClickAdve = () => {
    navigate("/oneclick/claim");
  };

  return (
    <div className="page-wrapper">
      <div className="ad-container" id="adContainer">
        <div className="ad-box" onClick={OnClickAdve}>
          <button className="close-btn" onClick={closeAd}>
            ×
          </button>
          <img src={advertisingImage} alt="広告画像" className="ad-image" />
        </div>
      </div>

      {/* メニュー */}
      <nav>
        <ul>
          <li>
            <a href="#home">ホーム</a>
          </li>
          <li>
            <a href="#info">トップ情報</a>
          </li>
          <li>
            <a href="#news">ニュース</a>
          </li>
        </ul>
      </nav>

      {/* パンくずリスト */}
      <div className="breadcrumb">
        <a href="#">ホーム</a> &raquo; <a href="#">記事</a> &raquo;{" "}
        <a href="#">伝統文化</a> &raquo; 学科紹介
      </div>

      {/* メインコンテンツ */}
      <div className="content">
        <header id="home">
          <h1>学科紹介</h1>
        </header>

        <article id="info">
          <section className="it-engineer-description">
            <h2 className="course-title">1. ITエンジニア学科</h2>
            <p className="course-description">
              ITエンジニア学科では、コンピュータやインターネットを使った仕事に必要な技術を、
              基礎からしっかり学べます。Webサイトの作り方、プログラミング、データベース、ネットワークなど、
              実際の仕事で使えるスキルを身につけることができます。
              授業では、理論を学ぶだけでなく、実際に手を動かして学ぶので、すぐに役立つ技術が習得できます。
              さらに、オンラインで学べる「Gather」を使えば、学校や自宅など、どこからでも勉強ができます。
            </p>
            <h3 className="gather-title">Gatherとは？</h3>
            <p className="gather-description">
              Gatherは、インターネットを使ったオンライン学習のためのツールです。
              ビデオ通話やチャットを使って、先生やほかの生徒と一緒に勉強できます。
              どこにいても、インターネットがあれば参加でき、
              自分のペースで学ぶことができるのでとても便利です。
            </p>
            <div className="centerer-image">
              <img src="gather.png" alt="gather画面" />
            </div>
          </section>

          {/* カリキュラム */}
          <h2>2. カリキュラム</h2>
          <section>
            <h3 className="section-title" id="section1">
              2.1 基本情報技術者試験
            </h3>
            <p>
              IT分野の基礎を学んで、資格を取得するための勉強をします。プログラミングやネットワーク、データベースの基礎を学ぶことで、実際の仕事で使える技術を身につけます。
            </p>
          </section>
          <section>
            <h3 className="section-title" id="section2">
              2.2 Web制作演習
            </h3>
            <p>
              HTML、CSS、JavaScriptでWebサイト制作を学びます。JavaScriptで動きを付けて、ポートフォリオとして活用します。
            </p>
          </section>
          <section>
            <h3 className="section-title" id="section3">
              2.3 プログラミング演習
            </h3>
            <p>
              PythonやJavaScriptを使ってコーディング練習を行い、基礎から実用的なスキルを身につけます。
            </p>
            <img src="it-image1.png" alt="programmer" />
          </section>

          {/* 資格 */}
          <h2>3. 目指せる資格</h2>
          <ul className="career-list">
            <li>
              <strong>基本情報技術者試験</strong>
              <p>ITの基礎知識を評価する国家資格です。</p>
            </li>
            <li>
              <strong>応用情報技術者試験</strong>
              <p>より高度な技術と実践力を問う国家資格です。</p>
            </li>
          </ul>

          {/* 職業 */}
          <h2>4. 目指せる職業</h2>
          <ul className="career-list">
            <li>
              <strong>システムエンジニア</strong>
              <p>業務システムの設計・開発・運用に携わる職業。</p>
            </li>
            <li>
              <strong>プログラマ</strong>
              <p>ソフトウェアやアプリのコーディングを行います。</p>
            </li>
            <li>
              <strong>モバイルアプリエンジニア</strong>
              <p>スマートフォン向けアプリの開発を行います。</p>
            </li>
            <li>
              <strong>Webアプリエンジニア</strong>
              <p>Webサービスのフロント・バックエンド両方を担当。</p>
            </li>
          </ul>
        </article>
      </div>

      {/* フッター */}
      <footer>
        <p>Copyright &copy; IT engineer department. reserved.</p>
      </footer>
    </div>
  );
};

export default OneClickHome;
