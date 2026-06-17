import { Fragment } from "react/jsx-runtime";
import { dataBDIA } from "../../shared/data/dataBDIA";

import "./PageBDIA.scss";

type Props = {
  inputValue: string;
};

const PageBDIA = ({ inputValue }: Props) => {
  const filteredQuestions = dataBDIA.filter(
    (item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.answer.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="page-bdia">
      <div className="page-bdia__header">
        <h1 className="page-bdia__title">BAZY DANYCH I APLIKACJE</h1>
        <p className="page-bdia__subtitle">Pytania i Odpowiedzi</p>
      </div>

      {filteredQuestions.map((item, index) => (
        <Fragment key={item.id}>
          <article className="page-bdia__item">
            <h2 className="page-bdia__question">
              <span className="page-bdia__question-number">{String(item.id).padStart(2, "0")}.</span>
              {item.question}
            </h2>
            <div className="page-bdia__answer">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </article>
          {index < filteredQuestions.length - 1 && <hr className="page-bdia__divider" />}
        </Fragment>
      ))}

      {filteredQuestions.length === 0 && (
        <div className="page-bdia__empty">
          <p>Nie znaleziono wyników dla: "{inputValue}"</p>
        </div>
      )}
    </section>
  );
};

export default PageBDIA;
