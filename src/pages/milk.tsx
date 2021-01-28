import React from 'react';
import Helmet from 'react-helmet';

const title = '小杉湯のミルク風呂';
const description =
  '昭和八年創業、高円寺の老舗銭湯小杉湯。その伝統のミルク風呂を家庭のお風呂でも体験できるよう開発した入浴剤。こころもからだも、ととのえる「小杉湯のミルク風呂」。';
const keywords =
  '小杉湯,高円寺,入浴剤,ミルク風呂,小杉湯のミルク風呂,入浴,銭湯,交互浴,銭湯ぐらし,整う,公衆浴場,株式会社小杉湯';

const ogImage = 'http://kosugiyu.co.jp/milk/images/og.jpg';

const url = 'https://kosugiyu.co.jp/milk';

const staticPath = '/features/milk/';

const MilkPage: React.FC = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'ja',
        }}
        title={title}
        meta={[
          {
            name: 'viewport',
            content:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
          },
          {
            name: 'keywords',
            content: keywords,
          },
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: url,
          },
          {
            property: 'og:image',
            content: ogImage,
          },
        ]}
        link={[
          {
            href:
              'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;500&display=swap',
            rel: 'stylesheet',
            type: 'text/css',
          },
          {
            href: `${staticPath}css/reset.css`,
            rel: 'stylesheet',
            type: 'text/css',
          },
          {
            href: `${staticPath}css/swiper.min.css`,
            rel: 'stylesheet',
            type: 'text/css',
          },
          {
            href: `${staticPath}css/style.css`,
            rel: 'stylesheet',
            type: 'text/css',
          },
        ]}
        script={[
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-KL8HCH6PVM',
            type: 'text/javascript',
            async: true,
          },
          {
            src: `${staticPath}js/jquery.js`,
            type: 'text/javascript',
          },
          {
            src: `${staticPath}js/swiper.min.js`,
            type: 'text/javascript',
          },
          {
            src: `${staticPath}js/common.js`,
            type: 'text/javascript',
          },
        ]}
      />
      <header>
        <div className="header__Con">
          <h1>
            <a href="http://kosugiyu.co.jp/">
              <img src={`${staticPath}images/icon_main.svg`} />
            </a>
          </h1>
          <nav className="header__Con--nav">
            <ul>
              <li>
                <a href="#sec1">小杉湯について</a>
              </li>
              <li>
                <a href="#sec2">小杉湯のミルク風呂とは</a>
              </li>
              <li>
                <a href="#sec3">製品特徴</a>
              </li>
              <li>
                <a href="#sec4">ご縁販売店</a>
              </li>
            </ul>
            <div className="bottom">
              <p className="logo">
                <a href="http://kosugiyu.co.jp/" target="_blank" rel="noreferrer">
                  <img src={`${staticPath}images/logo.svg`} />
                </a>
              </p>
              <p className="copy fontG">© 2020 Kosugiyu,inc.</p>
            </div>
          </nav>
          <p className="menu">
            <a className="menu-trigger" href="index.html#">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </p>
        </div>
      </header>

      <div id="wrapper">
        <section className="main__Area">
          <div className="main__Area--img">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img className="pcD" src={`${staticPath}images/main1.jpg`} />
                  <img className="spD" src={`${staticPath}images/main1_sp.jpg`} />
                </div>
                <div className="swiper-slide">
                  <img className="pcD" src={`${staticPath}images/main2.jpg`} />
                  <img className="spD" src={`${staticPath}images/main2_sp.jpg`} />
                </div>
                <div className="swiper-slide">
                  <img className="pcD" src={`${staticPath}images/main3.jpg`} />
                  <img className="spD" src={`${staticPath}images/main3_sp.jpg`} />
                </div>
              </div>
            </div>

            <div className="img__back">
              <img src={`${staticPath}images/icon_main.svg`} />
            </div>
          </div>
          <div className="main__Area--title">
            <h2>
              <img src={`${staticPath}images/title.svg`} />
            </h2>
          </div>
        </section>
        <section id="sec1" className="main__sec1 sec">
          <div className="sec__Content">
            <div className="txtBox">
              <div className="titleArea">
                <p className="titleArea__num">01</p>
                <p className="titleArea__lead">小杉湯について</p>
                <p className="imgBox__img spD anime_tate">
                  <img src={`${staticPath}images/img_sec1_sp.jpg`} />
                </p>
              </div>
              <div className="txtArea">
                <h3 className="txtArea__title">
                  昭和八年創業
                  <br />
                  高円寺の老舗銭湯
                  <br />
                  小杉湯
                </h3>
                <p className="txtArea__txt">
                  　高円寺駅から徒歩五分、活気あふれる商店街を通り抜け住宅街に入ると、昭和にタイムスリップしたような破風屋根のレトロな建物が存在感をしめしています。音楽、ファッション、サブカルチャーを中心とした多様な中央線カルチャーと、古き良き歴史が混在する高円寺の憩いの場として、多くの方から愛されている銭湯です。名物ミルク風呂、週替り・日替り風呂、水風呂があり、温冷交互浴は小杉湯の代名詞となっています。
                </p>
              </div>
            </div>
            <div className="imgBox pcD">
              <p className="imgBox__img">
                <img src={`${staticPath}images/img_sec1.jpg`} />
              </p>
            </div>
          </div>
        </section>

        <section id="sec2" className="main__sec2 sec">
          <div className="sec__Content rev">
            <div className="txtBox">
              <div className="titleArea">
                <p className="titleArea__num">02</p>
                <p className="titleArea__lead">小杉湯のミルク風呂とは</p>
                <p className="imgBox__img spD anime_tate">
                  <img src={`${staticPath}images/img_sec2_sp.jpg`} />
                </p>
                <p className="bottomArea__img spD anime_tate">
                  <img src={`${staticPath}images/i_1.png`} />
                </p>
              </div>
              <div className="txtArea">
                <h3 className="txtArea__title">小杉湯のミルク風呂</h3>
                <p className="txtArea__txt">
                  初代から引き継がれる伝統のお風呂
                  <br />
                  こころとからだに寄り添うお風呂
                </p>
                <p className="txtArea__txt">
                  落ち込んだ日も、悔しい日も
                  <br />
                  自分をゆるせなくなった日も
                </p>
                <p className="txtArea__txt">
                  銭湯とともにあって、
                  <br />
                  あなたを受け入れる
                </p>
                <p className="txtArea__txt">
                  こころもからだも、ととのえる
                  <br />
                  <span className="fontY">｢</span>まあいいか<span className="fontY">｣</span>
                  と明日に進むためのミルク風呂
                </p>
                <div className="bottomArea pcD">
                  <p className="bottomArea__img">
                    <img src={`${staticPath}images/i_1.png`} />
                  </p>
                </div>
              </div>
            </div>
            <div className="imgBox pcD">
              <p className="imgBox__img">
                <img src={`${staticPath}images/img_sec2.jpg`} />
              </p>
            </div>
          </div>
        </section>
        <section id="sec3" className="main__sec3 sec">
          <div className="sec__Content">
            <div className="txtBox">
              <div className="titleArea">
                <p className="titleArea__num">03</p>
                <p className="titleArea__lead">製品特徴</p>
              </div>
              <div className="col2Area anime_delay">
                <div className="col2Box rev active_tate">
                  <div className="col2Box__con">
                    <h4>優しいミルクの香りと柔らかな肌触りの液状入浴剤</h4>
                    <p>
                      ミルク香料によるやさしく甘い香りと、3つの保湿成分（ワセリン、ミツロウ、ミネラルオイル）を配合したことによる、お風呂上がりにお肌がしっとりとなる入浴剤です。
                    </p>
                  </div>
                  <p className="col2Box__img">
                    <img src={`${staticPath}images/img_sec3_1.jpg`} />
                  </p>
                </div>
                <div className="col2Box active_tate">
                  <div className="col2Box__con">
                    <h4>ご使用法</h4>
                    <p>
                      180～200Lのお湯に1包（40mL）を入れ、よくかき混ぜてとかしてからご入浴ください。
                    </p>
                  </div>
                  <p className="col2Box__img">
                    <img src={`${staticPath}images/img_sec3_2.jpg`} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec4" className="main__sec4 sec">
          <div className="sec__Content">
            <div className="txtBox">
              <div className="titleArea">
                <p className="titleArea__num">04</p>
                <p className="titleArea__lead">ご縁販売店</p>
              </div>
              <div className="txtArea">
                <h3 className="txtArea__title">ご縁で広がる入浴剤</h3>
                <p className="txtArea__txt">
                  小杉湯のミルク風呂がずっと繋がるご縁でできているものならば、
                  <br />
                  卸先もご縁を大事にしたものにしたいと思いました。
                  <br />
                  あえて広げず、小杉湯と直接関わりにある人たちと始めます。
                </p>
              </div>
            </div>
            <div className="shopBox anime_delay">
              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img className="yoko" src={`${staticPath}images/logo/ur.png`} />
                </div>
                <div className="shopBox__con--title">
                  <h4>アーバンリサーチ なんばCITY店</h4>
                  <p>
                    JAPAN MADE PROJECT TOKYOで「URBAN
                    SENTO」を一緒に立ち上げ。銭湯を起点とし街の回遊が、その一着で叶うようなアパレルを展開し、都市における新たなライフスタイル「銭湯のあるくらし」を発信しています。
                  </p>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">ADDRESS</p>
                    <p className="txt">
                      <a
                        href="http://maps.google.co.jp/maps?q=〒542-0076 大阪府大阪市中央区難波5-1-60 なんばCITY 本館B1F"
                        target="_blank"
                        rel="noreferrer"
                      >
                        〒542-0076 大阪府大阪市中央区難波5-1-60 なんばCITY 本館B1F
                      </a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">PHONE</p>
                    <p className="txt">
                      <a href="tel:050-2017-9044">050-2017-9044</a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a
                        href="http://www.urban-research.co.jp/shop/store1/1_54/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://www.urban-research.co.jp/shop/store1/1_54/
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img className="yoko" src={`${staticPath}images/logo/ur.png`} />
                </div>
                <div className="shopBox__con--title">
                  <h4>アーバンリサーチ KYOTO</h4>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">ADDRESS</p>
                    <p className="txt">
                      <a
                        href="http://maps.google.co.jp/maps?q=〒604-8045 京都府京都市中京区寺町通円福寺前町285"
                        target="_blank"
                        rel="noreferrer"
                      >
                        〒604-8045 京都府京都市中京区寺町通円福寺前町285
                      </a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">PHONE</p>
                    <p className="txt">
                      <a href="tel:075-255-3808">075-255-3808</a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a
                        href="http://www.urban-research.co.jp/shop/store1/1_8/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://www.urban-research.co.jp/shop/store1/1_8/
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img className="tate" src={`${staticPath}images/logo/unnamed.jpg`} />
                </div>
                <div className="shopBox__con--title">
                  <h4>アーバン・ファミマ!! 虎ノ門ヒルズビジネスタワー店</h4>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">ADDRESS</p>
                    <p className="txt">
                      <a
                        href="http://maps.google.co.jp/maps?q=〒105-6402 東京都港区虎ノ門1丁目17番1号 虎ノ門ヒルズビジネスタワー 2F"
                        target="_blank"
                        rel="noreferrer"
                      >
                        〒105-6402 東京都港区虎ノ門1丁目17番1号 虎ノ門ヒルズビジネスタワー 2F
                      </a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">PHONE</p>
                    <p className="txt">
                      <a href="tel:03-6205-8995">03-6205-8995</a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a
                        href="http://www.urban-research.co.jp/shop/store50/50_1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://www.urban-research.co.jp/shop/store50/50_1/
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img className="tate" src={`${staticPath}images/logo/logo_8.png`} />
                </div>
                <div className="shopBox__con--title">
                  <h4>アーバンリサーチ ストア 東京スカイツリータウン・ソラマチ店</h4>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">ADDRESS</p>
                    <p className="txt">
                      <a
                        href="http://maps.google.co.jp/maps?q=〒131-0045 東京都墨田区押上1-1-2 東京スカイツリータウン・ソラマチ 3F"
                        target="_blank"
                        rel="noreferrer"
                      >
                        〒131-0045 東京都墨田区押上1-1-2 東京スカイツリータウン・ソラマチ 3F
                      </a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">PHONE</p>
                    <p className="txt">
                      <a href="tel:03-5809-71508">03-5809-7150</a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a
                        href="http://www.urban-research.co.jp/shop/store8/8_3/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://www.urban-research.co.jp/shop/store8/8_3/
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img
                    className="tate"
                    src={`${staticPath}images/logo/kimura_sekken_logo_base.png`}
                  />
                </div>
                <div className="shopBox__con--title">
                  <h4>くらしの丁度品店（運営: 木村石鹸工業株式会社）</h4>
                  <p>
                    大正13年創業の大阪の石鹸屋さん。子どもからお年寄りまで安心して使えて、自然にもやさしく効果が高い石鹸や洗剤づくりをされています。小杉湯のタオルはすべて、木村石鹸のSOMALIで洗われているから、いつもふんわり。
                  </p>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a href="https://store.kimurasoap.co.jp" target="_blank" rel="noreferrer">
                        https://store.kimurasoap.co.jp
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img
                    className="yoko"
                    src={`${staticPath}images/logo/4295450e61fc58796957b6eb9b3bc76f.jpg`}
                  />
                </div>
                <div className="shopBox__con--title">
                  <h4>シンカイ（運営: 株式会社Huuuu）</h4>
                  <p>
                    「人生のわからない、を増やす」を企業理念とし、全国のクリエイター、生産者、職人、地方行政と関係を築いているHuuuuのメンバーが数ヶ月ごとにオフィスを間借りしていく「移動式オフィス」で小杉湯にやってきました。そのHuuuuが運営する長野市善光寺近くのお土産物屋「シンカイ」で小杉湯のミルク風呂を取り扱ってもらっています。
                  </p>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">ADDRESS</p>
                    <p className="txt">
                      <a
                        href="http://maps.google.co.jp/maps?q=〒380-0803 長野県長野市三輪7-8-5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        〒380-0803 長野県長野市三輪7-8-5
                      </a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a href="https://huuuu.jp/shinkai/" target="_blank" rel="noreferrer">
                        https://huuuu.jp/shinkai/
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="shopBox__con active_tate">
                <div className="shopBox__con--icon">
                  <img
                    className="yoko"
                    src={`${staticPath}images/logo/126276160_1007883483059497_4550214536862569790_n.jpg`}
                  />
                </div>
                <div className="shopBox__con--title">
                  <h4>青山ブックセンター本店</h4>
                  <p>
                    小杉湯三代目の平松も選書などでご一緒させていただいており、青山ブックセンターさんが開催しているオンラインサロンのメンバーには、小杉湯を応援してくれる方々がいっぱいいます。
                  </p>
                </div>
                <div className="shopBox__con--spec">
                  <div className="specBox">
                    <p className="title">ADDRESS</p>
                    <p className="txt">
                      <a
                        href="http://maps.google.co.jp/maps?q=〒150-0001 東京都渋谷区神宮前５丁目５３−６７ コスモス青山地下 2階"
                        target="_blank"
                        rel="noreferrer"
                      >
                        〒150-0001 東京都渋谷区神宮前５丁目５３−６７ コスモス青山地下 2階
                      </a>
                    </p>
                  </div>
                  <div className="specBox">
                    <p className="title">WEBSITE</p>
                    <p className="txt">
                      <a href="http://www.aoyamabc.jp/" target="_blank" rel="noreferrer">
                        http://www.aoyamabc.jp/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="main__itemSpec sec fontG">
          <div className="sec__Content">
            <div className="itemName">
              <p>小杉湯の入浴料M</p>
              <p>40mL/5包入</p>
              <p>(浴用化粧料)</p>
            </div>
            <div className="itemTxt">
              <p>
                ＜ご注意＞
                <br />
                ●本品は食べられません。万一大量に飲み込んだときは、水を飲ませるなどの処置を行ってください。●浴槽や洗い場がすべりやすくなりますのでご注意ください。●お肌あるいは体質に異常がある場合は皮膚科専門医などに相談して使用してください。●化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。(1)使用中、赤味、はれ、かゆみ、刺激等の異常があらわれた場合(2)使用したお肌に、直射日光があたって上記のような異常があらわれた場合●本品が目に入らないようにご注意ください。本品が目に入ったときは、直ちに洗い流してください。●本品と他の入浴剤との併用はお止めください。●本品には浴槽・風呂釜をいためるイオウは入っていません。●24時間風呂、木製・天然大理石の浴槽には使用しないでください。●全自動給湯器、循環式の風呂釜によってはご使用になれない機種があります。必ずお使いの機種の説明書をご確認の上使用してください。●浴槽の底やまわりが白くなることがありますので、残り湯を長時間放置しないで使用後はすぐに洗い流してください。●本品の成分が風呂釜内部や循環孔のフィルターに付き、浴槽内に出てくることがあります。使用後は風呂釜内部、循環孔のフィルターを水洗いしてください。●残り湯は洗濯に使用しないでください。●乳幼児の手の届かないところに保管してください。●直射日光のあたる場所、高温多湿の場所、温度変化の激しい場所を避けて常温で保管してください。●開封後はすぐにお使いください。●入浴以外の用途には使用しないでください。
              </p>
            </div>
            <div className="itemSpec">
              <p>
                ＜成分＞
                <br />
                ミネラルオイル、水、香料、セテス－６、ワセリン、ＰＧ、ステアリン酸グリセリル、安息香酸Na、セタノール、セチル硫酸Na、ダイマージリノール酸（フィトステリル／イソステアリル／セチル／ステアリル／ベヘニル）、ブチルパラベン、ミツロウ、メチルパラベン
              </p>
            </div>
            <p className="itemPrice">希望小売価格 2,000円(税抜) </p>
          </div>
        </section>
      </div>

      <footer>
        <p className="logo">
          <a href="/" target="_blank" rel="noreferrer">
            <img src={`${staticPath}images/logo.svg`} />
          </a>
        </p>
        <p className="copy fontG">© {new Date().getFullYear()} Kosugiyu,inc.</p>
      </footer>
    </>
  );
};

export default MilkPage;
