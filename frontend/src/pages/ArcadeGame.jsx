import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../contexts/GameContext";
import ScreenArcade from "../components/ScreenArcade";

function ArcadeGame() {
  const navigate = useNavigate();
  const {
    isJoystickSelected,
    setIsJoystickSelected,
    setIsPressedRed,
    setIsPressedBlue,
    setIsPressedGreen,
    setIsPressedYellow,
    isPressedYellow,
    isPressedGreen,
    isPressedBlue,
    isPressedRed,
    openGames,
    setOpenGames,
    chooseScreen,
    setChooseScreen,
    gameSelected,
    setGameSelected,
    chooseArrow,
    setChooseArrow,
    scorePlayer,
    setScorePlayer,
    // count,
    // setCount,
  } = useContext(GameContext);

  function handleClose() {
    setOpenGames(!openGames);
    navigate("/");
  }

  function handlePushBlue() {
    setIsPressedBlue(true);
    setTimeout(() => {
      setIsPressedBlue(false);
    }, 100);

    if (chooseScreen === "guitarHero") {
      if (chooseArrow[0]) {
        const newChooseArrow = [false, false, false, false];
        setChooseArrow(newChooseArrow);
        setScorePlayer(scorePlayer + 100);
      }
    }
  }
  function handlePushRed() {
    setIsPressedRed(true);
    setTimeout(() => {
      setIsPressedRed(false);
    }, 100);
    if (chooseScreen === "start") {
      setChooseScreen("menu");
    }
    if (chooseScreen === "menu" && gameSelected[0] === "choose") {
      setChooseScreen("guitarHero");
    }
    if (chooseScreen === "guitarHero") {
      if (chooseArrow[3]) {
        const newChooseArrow = [false, false, false, false];
        setChooseArrow(newChooseArrow);
        setScorePlayer(scorePlayer + 100);
      }
    }
  }
  function handlePushGreen() {
    setIsPressedGreen(true);
    setTimeout(() => {
      setIsPressedGreen(false);
    }, 100);
    if (chooseScreen === "guitarHero") {
      if (chooseArrow[1]) {
        const newChooseArrow = [false, false, false, false];
        setChooseArrow(newChooseArrow);
        setScorePlayer(scorePlayer + 100);
      }
    }
  }
  function handlePushYellow() {
    setIsPressedYellow(true);
    setTimeout(() => {
      setIsPressedYellow(false);
    }, 100);
    if (chooseScreen === "guitarHero") {
      if (chooseArrow[2]) {
        const newChooseArrow = [false, false, false, false];
        setChooseArrow(newChooseArrow);
        setScorePlayer(scorePlayer + 100);
      }
    }
  }
  function handleNavigateJoystick() {
    setIsJoystickSelected(true);
    setTimeout(() => {
      setIsJoystickSelected(false);
    }, 100);
    if (chooseScreen === "menu") {
      const newGameSelected = [...gameSelected];
      const indexTrue = gameSelected.indexOf("choose");
      newGameSelected[indexTrue] = "notChoose";
      if (indexTrue === newGameSelected.length - 1) {
        newGameSelected[0] = "choose";
        setGameSelected(newGameSelected);
      } else {
        newGameSelected[indexTrue + 1] = "choose";
        setGameSelected(newGameSelected);
      }
    }
  }

  return (
    <div className="container-gameOnline">
      <div className="gameOnline">
        <img
          className="closeButton"
          onClick={handleClose}
          role="presentation"
          src="/images/Jeux_ligne/x.png"
          alt="Exit"
        />
        <div className="spaceRules">
          <h2>Règles</h2>
          <img src="/images/Jeux_ligne/manetteRules.png" alt="manette" />
          {chooseScreen === "start" ? (
            <p>Cliquez sur le bouton rouge pour démarrer la borne.</p>
          ) : (
            ""
          )}
          {chooseScreen === "menu" ? (
            <p>
              Choisissez votre jeu en naviguant avec le joystick et sélectionnez
              avec le bouton rouge.
            </p>
          ) : (
            ""
          )}
          {chooseScreen === "guitarHero" ? (
            <p>Cliquez sur le bon bouton à l'apparition de la note!</p>
          ) : (
            ""
          )}
        </div>
        <div className="spaceBorne">
          <img
            className="borne"
            src="/images/Jeux_ligne/borne6.png"
            alt="borne arcade en ligne"
          />
          <div className="screenArcade">
            <ScreenArcade />
          </div>

          <img
            className="joystick"
            role="presentation"
            onClick={handleNavigateJoystick}
            style={{
              transform: isJoystickSelected
                ? "rotate(20deg) translateX(21px)"
                : "none",
              transition: "transform 0.1s ease-out, background 0.1s ease-out",
            }}
            src="/images/Jeux_ligne/Joystick2.png"
            alt="borne arcade en ligne"
          />
          <img
            className="buttonBlue"
            src="/images/Jeux_ligne/boutonBleu2.png"
            alt="borne arcade en ligne"
            onClick={handlePushBlue}
            role="presentation"
            style={{
              transform: isPressedBlue ? "translateY(4px)" : "none",
              transition: "transform 0.1s ease-out, background 0.1s ease-out",
            }}
          />
          <img
            className="buttonYellow"
            onClick={handlePushYellow}
            role="presentation"
            style={{
              transform: isPressedYellow ? "translateY(4px)" : "none",
              transition: "transform 0.1s ease-out, background 0.1s ease-out",
            }}
            src="/images/Jeux_ligne/BoutonJaune2.png"
            alt="borne arcade en ligne"
          />
          <img
            onClick={handlePushRed}
            role="presentation"
            style={{
              transform: isPressedRed ? "translateY(4px)" : "none",
              transition: "transform 0.1s ease-out, background 0.1s ease-out",
            }}
            className="buttonRed"
            src="/images/Jeux_ligne/Boutonrouge2.png"
            alt="borne arcade en ligne"
          />
          <img
            className="buttonGreen"
            onClick={handlePushGreen}
            role="presentation"
            style={{
              transform: isPressedGreen ? "translateY(4px)" : "none",
              transition: "transform 0.1s ease-out, background 0.1s ease-out",
            }}
            src="/images/Jeux_ligne/boutonVert2.png"
            alt="borne arcade en ligne"
          />
        </div>
        <div className="areaScores">
          <div className="spaceScores">
            <h2>Meilleurs scores</h2>
            <img src="/images/Jeux_ligne/CoupeScores.png" alt="coupe" />
            <p>1 - Rondoudou - 1350 pts</p>
            <p>2 - Gertrude - 1275 pts</p>
            <p>3 - Max - 899 pts</p>
          </div>
        </div>
        <div className="RulesScoresResponsive">
          <div className="spaceRules2">
            <h2>Règles</h2>
            <img src="/images/Jeux_ligne/manetteRules.png" alt="manette" />
            {chooseScreen === "start" ? (
              <p>Cliquez sur le bouton rouge pour démarrer la borne.</p>
            ) : (
              ""
            )}
            {chooseScreen === "menu" ? (
              <p>
                Choisissez votre jeu avec le joystick et sélectionnez avec le
                bouton rouge.
              </p>
            ) : (
              ""
            )}
            {chooseScreen === "guitarHero" ? (
              <p>Cliquez sur le bon bouton à l'apparition de la note!</p>
            ) : (
              ""
            )}
          </div>
          <div className="spaceScores2">
            <h2>Meilleurs scores</h2>
            <img src="/images/Jeux_ligne/CoupeScores.png" alt="coupe" />
            <p>1 - Rondoudou - 1350 pts</p>
            <p>2 - Gertrude - 1275 pts</p>
            <p>3 - Max - 899 pts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArcadeGame;
