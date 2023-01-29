import React, { useState } from "react";
import "./gameTracker.css";

function GameTracker() {
  const [questions] = useState([
    "What's been your happiest memory this past year?",
    "Have you changed your mind about anything recently?",
    "What has been your earliest recollection of happiness?",
    "What lesson took you the longest to un-learn?",
    "Are you lying to yourself about anything?",
    "What questions are you trying to answer most in your life right now?",
    "When was the last time you surprised yourself?",
    "What title would you give this chapter in your life?",
    "What's the worst pain you have ever been in that wasn't physical?",
    "What would your younger self not believe about your life today?",
    "What are you more afraid of: failure or success and why?",
    "What is a dream you let go of?",
    "If you could get to know someone in your life on a deeper level who would it be and why?",
    "Do you think the image you have of yourself matches the image other people see you as?",
    "How are you, really?",
    "What's the most unexplainable thing that happened to you?",
    "What advice would you give your younger self?",
    "What are you passionate about?",
    ]);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [youTruth, setYouTruth] = useState(null);
  const [youLie, setYouLie] = useState(null);
  const [partnerTruth, setPartnerTruth] = useState(null);
  const [partnerLie, setPartnerLie] = useState(null);

  const handleRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }

  const handleYouTruth = () => {
    setYouTruth(true);
    setYouLie(false);
  }

  const handleYouLie = () => {
    setYouLie(true);
    setYouTruth(false);
  }

  const handlePartnerTruth = () => {
    setPartnerTruth(true);
    setPartnerLie(false);
  }

  const handlePartnerLie = () => {
    setPartnerLie(true);
    setPartnerTruth(false);
  }

  return (
    <div className="gameTracker">
      <div className="questionGenerator">
        <button onClick={handleRandomQuestion}>Generate Random Question</button>
        {currentQuestion && <p>{currentQuestion}</p>}
      </div>
      <div className="responseTracker">
        <div className="youResponse">
          <p>You</p>
          <button className={youTruth ? "truthSelected" : "truth"} onClick={handleYouTruth}>Truth</button>
          <button className={youLie ? "lieSelected" : "lie"} onClick={handleYouLie}>Lie</button>
        </div>
        <div className="partnerResponse">
          <p>Partner</p>
          <button className={partnerTruth ? "truthSelected" : "truth"} onClick={handlePartnerTruth}>Truth</button>
          <button className={partnerLie ? "lieSelected" : "lie"} onClick={handlePartnerLie}>Lie</button>
        </div>
      </div>
    </div>
  );
}

export default GameTracker;