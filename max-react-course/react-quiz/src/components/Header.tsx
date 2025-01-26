import QuizLogo from "../assets/quiz-logo.png";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <img src={QuizLogo} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
