import sese from "./images/sese.gif";
import beach from "./images/beach.png";
import green from "./images/green.png";
import snow from "./images/snow.png";
import purple from "./images/purple.png";
import preview from "./images/preview.gif";
import  TSHIRTJJ from "./images/TSHIRTJJ.png";
import lll from "./images/lll.png";
import nkl from "./images/nkl.png";
import kh from "./images/kh.png";
import polygonscan from "./images/polygonscan.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="contain">
        {/*  */}
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div></div>
              <span className="ml-3 mr-5 text-xl" id="TopHeading">
                {" "}
                Rock Monster CORP.
              </span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a id="slidebar" className="ml-9 " href="#buy">
                BUY
              </a>
              <a id="slidebar" className="ml-5 " href="#roadmap">
                ROADMAP
              </a>
              <a id="slidebar" className="ml-5 mr-9 " href="#Merch">
                MERCH
              </a>
            </nav>
          </div>
        </header>
        {/*  */}
        <div className="container">
          <div className="id">
            <img
              src={sese}
              alt="Don't worry it will load"
              width="100%"
              height="100%"
            />
          </div>
          <br />
          <br />
          <br />
          <div className="promo">
            <div className="text">
              <h1 className="title">WELCOME TO THE ROCK MONSTER CORP.</h1>
              <br />
              <p className="para">
                RMC is a collection of 1000 Rock Monsters. Each NFT is unique
                and surfing on the Polygon blockchain. The person holding the
                maximum number of Rock Monsters will get free Merchandise after
                the roadmap activation. These NFTs are made up of different
                traits. More NFTs will come after roadmap activation.
              </p>
            </div>
            <br />
            <br />
            <div className="grid">
              <div className="wrapper">
                <div>
                  <img src={beach} alt="" id="rockImg" />
                </div>
                <div>
                  <img src={green} alt="" id="rockImg" />
                </div>
                <div>
                  <img src={snow} alt="" id="rockImg" />
                </div>
                <div>
                  <img src={purple} alt="" id="rockImg" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="opensea">
            <h1 className="buy" id="buy">
              BUY A NFT
            </h1>
            <br />
            <p className="buyp">
              There are 1000 NFT's. Buying an NFT cost 0.005 ETH to 0.001 ETH
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="box">
          <div>
            <h3 className="h3">BUY A MONSTER</h3>
          </div>
          <div>
            <p className="boxp">
              To get your ROCK MONSTER, check out <br />
              the collection on OpenSea.
            </p>
          </div>
          <div className="bbn">
            <a
              className="btn"
              href="https://opensea.io/collection/rockmonsterscorp"
            >
              Buy a monster on OpenSea
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <div className="promo">
          <div className="text">
            <h1 className="title">THE SPECS</h1>
            <br />
            <p className="para">
              RMC is a collection of 1000 Rock Monster NFTs—unique digital
              collectibles surfing on the Polygon blockchain.
            </p>
            <br />
            <p className="para">
              The person holding the maximum number of Rock Monsters will get
              free Merchandise after the roadmap activation.
            </p>
            <br />
            <p className="para">
              The Monsters are stored as ERC-721 tokens on the Polygon
              blockchain and hosted on IPFS (
              <a
                className="ipfs"
                href="https://gateway.pinata.cloud/ipfs/QmbUZL42Q6rd5Z13DMowdpwUy5ujTGsZWfsJ2mQk2N2etU"
              >
                IPFS
              </a>
              ). Purchasing an monster costs 0.005 ETH to 0.001 ETH.
            </p>
          </div>
          <br />
          <br />
          <div>
            <img className="gif" src={preview} alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <h2 id="roadmap" className="roadmapHeading">
          ROADMAP ACTIVATION
        </h2>
        <br />
        <p className="para">We're in this for the long haul.</p>
        <br />
        <p className="para">
          We've set up some goalposts for ourselves. Once we hit a target sell
          through percentage, we will begin to work on realizing the stated
          goal.
        </p>
        <br />
        <div className="percent">
          <div>
            <div className="success">
              <p className="cent">10%</p>
              <p className="p">We pay back our moms.</p>
            </div>
            <div className="success">
              <p className="cent">20%</p>
              <p className="p">
                We will do a massive Giveaway in which a person will win our
                five 5 Monster NFT and chance to win upto 4 ETH.
              </p>
            </div>
            <div className="success">
              <p className="cent">40%</p>
              <p className="p">We will launch our own you tube channel.</p>
            </div>
            <div className="success">
              <p className="cent">60%</p>
              <p className="p">
                The merchandise store will get unlocked amd the maximum Monster
                holder will get a free merch.
              </p>
            </div>
            <div className="success">
              <p className="cent">80%</p>
              <p className="p">
                We will launch our new pixel NFTs of different monsters and
                animals.
              </p>
            </div>
            <div className="success">
              <p className="cent">90%</p>
              <p className="p">
                We will make our own coin with the name monster coin.
              </p>
            </div>
            <div className="success">
              <p className="cent">100%</p>
              <p className="p">
                We will make a pixel land in the metaverse and will open it for
                everyone.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div id="Merch" className="merch">
          <h2 className="merchtitle">MERCH STORE</h2>
          <p className="merchp">
            The merch store will get unlock after the roadmap activation.
          </p>
          <div className="Merchimg">
            <img
              src={ TSHIRTJJ}
              width="25%"
              height="25%"
              alt=""
              className="merchimg"
            />
            <img
              src={lll}
              width="25%"
              height="25%"
              alt=""
              className="merchimg"
            />
            <img
              src={nkl}
              width="25%"
              height="25%"
              alt=""
              className="merchimg"
            />
            <img
              src={kh}
              width="25%"
              height="25%"
              alt=""
              className="merchimg"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="contract">
          <h2 className="contractTitle">
            VERIFIED SMART CONTRACT:{" "}
            <a
              className="contractlink"
              href="https://polygonscan.com/address/0xbeeF46DB9b963d72bca4Eaad2be2453f1F282F36"
            >
              0xbeeF46DB9b963d72bca4Eaad2be2453f1F282F36
            </a>
          </h2>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="footer">
          <div className="follow">
            <p>ROCK MOSTER CORP.</p>
            <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a
                className="text-xl mr-2"
                href="https://www.instagram.com/rockmonsterscorp/"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a className="text-xl mr-2">
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                className="text-xl mr-2"
                href="https://polygonscan.com/address/0xbeeF46DB9b963d72bca4Eaad2be2453f1F282F36"
              >
                <img
                  src={polygonscan}
                  alt=""
                  width="28px"
                  height="28px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footercolor" />
    </div>
  );
}

export default App;
