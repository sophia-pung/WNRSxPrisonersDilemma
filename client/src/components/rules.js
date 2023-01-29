import React from "react";
import "./rules.css";

function Rules() {
  return (
    <div className="RulesMain">
      <h2>General Rules:</h2>
      <ul>
        <li>Each player starts out with 5 blue marbles and 5 red marbles.</li>
        <li>
          There are five rounds of questions, and the event lasts an hour. Every
          12 minutes people are partnered and pinged.
        </li>
        <li>
          People join the game before the start and are able to see the
          leaderboard.
        </li>
        <li>
          People are randomly paired every 12 minutes and get a randomly
          generated question.
        </li>
        <li>
          Based on if they lie or tell the truth and if their partner lies or
          tells the truth, they will exchange a certain number of red or blue
          marbles (see Section II), prisoner's dilemma style.
        </li>
      </ul>

      <h2>End Objective:</h2>
      <ul>
        <li>The end goal is to be the player with the most blue marbles after the game is over.</li>
      </ul>
      <h2>Game Format:</h2>
      <ul>
        <li>Every 12 minutes, you will be paired with a random person. You must find this person, and will receive a random “We’re Not Really Strangers” card. You then decide how likely it is that you could lie, given the card you have, and strategize accordingly.</li>
        <li>Once you’ve decided if you’re going to lie or tell the truth, submit this in the app (30 seconds).</li>
        <li>Answer the question out loud with your partner and ask follow-up questions to determine if they’re telling the truth (two minutes- approximately one minute each partner).</li>
        <li>Mark in the app if your opponent was telling the truth or not (30 seconds).</li>
      </ul>
      <h2>General Theory Ideas:</h2>
      <ul>
        <li>It's easier to tell the truth.</li>
        <li>You should be rewarded for lying successfully.</li>
        <li>If you successfully lie (e.g. your opponent thinks you're telling the truth when you're really lying), you will be rewarded.</li>
        <li>If you fail to lie (e.g. you lie and your opponent thinks you're lying), you will be penalized.</li>
        <li>If you get caught in a lie, you will be penalized.</li>
        <li>If both players tell the truth successfully, there will be no exchange of marbles.</li>
      </ul>
    </div>
  );
}

export default Rules;
