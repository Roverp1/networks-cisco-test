import { Fragment } from "react/jsx-runtime";
import { dataPIP } from "../../shared/data/dataPIP";

import "./PagePIP.scss";

type Props = {
  inputValue: string;
};

const PagePIP = ({ inputValue }: Props) => {
  const filteredQuestions = dataPIP.filter(
    (item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.answer.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="page-pip">
      <div className="page-pip__header">
        <h1 className="page-pip__title">PROJEKTOWANIE I PROGRAMOWANIE Z UŻYCIEM WZORCÓW PROJEKTOWYCH</h1>
        <p className="page-pip__subtitle">Pytania i Odpowiedzi</p>
      </div>

      {filteredQuestions.map((item, index) => (
        <Fragment key={item.id}>
          <article className="page-pip__item">
            <h2 className="page-pip__question">
              <span className="page-pip__question-number">{String(item.id).padStart(2, "0")}.</span>
              {item.question}
            </h2>
            <div className="page-pip__answer">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </article>
          {index < filteredQuestions.length - 1 && <hr className="page-pip__divider" />}
        </Fragment>
      ))}

      {filteredQuestions.length === 0 && (
        <div className="page-pip__empty">
          <p>Nie znaleziono wyników dla: "{inputValue}"</p>
        </div>
      )}
    </section>
  );
};

export default PagePIP;
