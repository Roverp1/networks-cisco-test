import { Fragment } from "react/jsx-runtime";
import { dataPW } from "../../shared/data/dataPW";

import "./PagePW.scss";

type Props = {
  inputValue: string;
};

const PagePW = ({ inputValue }: Props) => {
  const filteredQuestions = dataPW.filter(
    (item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.answer.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="page-pw">
      <div className="page-pw__header">
        <h1 className="page-pw__title">PROGRAMOWANIE WSPÓŁBIEŻNE</h1>
        <p className="page-pw__subtitle">Pytania i Odpowiedzi</p>
      </div>

      {filteredQuestions.map((item, index) => (
        <Fragment key={item.id}>
          <article className="page-pw__item">
            <h2 className="page-pw__question">
              <span className="page-pw__question-number">{String(item.id).padStart(2, "0")}.</span>
              {item.question}
            </h2>
            <div className="page-pw__answer">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </article>
          {index < filteredQuestions.length - 1 && <hr className="page-pw__divider" />}
        </Fragment>
      ))}

      {filteredQuestions.length === 0 && (
        <div className="page-pw__empty">
          <p>Nie znaleziono wyników dla: "{inputValue}"</p>
        </div>
      )}
    </section>
  );
};

export default PagePW;
