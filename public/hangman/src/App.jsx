import Hanging from "./components/Hanging";
import Keyboard from "./components/Keyboard";

function App() {
  const data = [
    {
      hint: "A round usually sweet juicy fruit",
      word: "ORANGE",
    },
    {
      hint: "Reddish-orange coats with prominent black stripes",
      word: "TIGER",
    },
    {
      hint:
        "The world's tallest mammals, thanks to their towering legs and long necks",
      word: "GIRAFFE",
    },
    {
      hint:
        "An instrument in the shape of a tube with special pieces of glass (lenses) inside it.",
      word: "TELESCOPE",
    },
    {
      hint: "Current measurement",
      word: "AMMETER",
    },
    {
      hint: "Voltage measurement",
      word: "VOLTMETER",
    },
    {
      hint: "Greatest Poet",
      word: "SHAKESPEARE",
    },
    {
      hint:
        "A fundamental constant, equal to the energy of a quantum of electromagnetic radiation divided by its frequency, with a value of 6.626 × 10−34 joule-seconds.",
      word: "PLANKSCONSTANT",
    },
    {
      hint:
        "I have keys, but no locks. I have space, but no room. You can enter, but you can’t go outside. What am I?",
      word: "KEYBOARD",
    },
    {
      hint:
        "A man shaves several times a day but still has a beard. Who is he?",
      word: "BARBER",
    },
    {
      hint: "What disappears as soon as you say its name?",
      word: "SILENCE",
    },
    {
      hint: "This belongs to you, but everyone else uses it more.",
      word: "YOURNAME",
    },
    {
      hint: "I have branches, but no fruit, trunk, or leaves. What am I?",
      word: "BANK",
    },
    {
      hint: "I am a bird, I am fruit and I am person. What I am?",
      word: "KIWI",
    },
    {
      hint:
        "I am tall when I am young, and I am short when I am old. What am I?",
      word: "CANDLE",
    },
    {
      hint: "What month of the year has 28 days?",
      word: "ALL",
    },
    {
      hint: "What is full of holes but still holds water?",
      word: "SPONGE",
    },
    {
      hint: "What is always in front of you but can not be seen?",
      word: "FUTURE",
    },
    {
      hint: "What can you break, even if you never pick it up or touch it?",
      word: "PROMISE",
    },
    {
      hint: "What goes up but never comes down?",
      word: "AGE",
    },
    {
      hint: "What can not talk but will reply when spoken to?",
      word: "ECHO",
    },
    {
      hint: "The more of this there is, the less you see. What is it?",
      word: "DARKNESS",
    },
    {
      hint:
        "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?",
      word: "NOON",
    },
    {
      hint: "Which word in the dictionary is spelled incorrectly?",
      word: "INCORRECTLY",
    },
    {
      hint:
        "I touch the earth and I touch the sky, but if I touch you, you’ll likely die. What am I?",
      word: "LIGHTNING",
    },
    {
      hint: "Where does today come before yesterday?",
      word: "DICTIONARY",
    },
    {
      hint:
        "If you have got me, you want to share me; if you share me, you haven’t kept me. What am I?",
      word: "SECRET",
    },
    {
      hint: "What goes up and down but does not move?",
      word: "STAIRCASE",
    },
    {
      hint: "having the colour of a clear sky when the sun shines",
      word: "BLUE",
    },
    {
      hint: "What am I? I am an animal. I eat bananas.",
      word: "MONKEY",
    },
    {
      hint: "You have to break me before you can use me.",
      word: "EGG",
    },
    {
      hint: "Who makes it, does not need it. Who buys it, has no use for it.",
      word: "COFFIN",
    },
    {
      hint: "I can travel all the world without leaving my corner.",
      word: "STAMP",
    },
    {
      hint: "I have many teeths but can't bite.",
      word: "COMB",
    },
    {
      hint: "I am tall when i am young and I am short when i am old.",
      word: "CANDLE",
    },
    {
      hint: "I can only be seen in lights.",
      word: "SHADOW",
    },
    {
      hint: "I have it when i don't share it. I don't have it when i share.",
      word: "SECRET",
    },
    {
      hint: "A father's child, a mother's child but no one's son.",
      word: "DAUGHTER",
    },
  ];
  return (
    <>
      <div className="contain">
        <div className="container">
          <Hanging />
        </div>
        <div className="container">
          <Keyboard data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
