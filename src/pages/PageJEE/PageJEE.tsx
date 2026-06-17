import { Fragment } from "react/jsx-runtime";
import { dataJEE } from "../../shared/data/dataJEE";

import "./PageJEE.scss";

type Props = {
  inputValue: string;
};

const PageJEE = ({ inputValue }: Props) => {
  const filteredQuestions = dataJEE.filter(
    (item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.answer.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="page-jee">
      <div className="page-jee__header">
        <h1 className="page-jee__title">SYSTEMY SZKIELETOWE</h1>
        <p className="page-jee__subtitle">Pytania i Odpowiedzi</p>
      </div>

      {filteredQuestions.map((item, index) => (
        <Fragment key={item.id}>
          <article className="page-jee__item">
            <h2 className="page-jee__question">
              <span className="page-jee__question-number">{String(item.id).padStart(2, "0")}.</span>
              {item.question}
            </h2>
            <div className="page-jee__answer">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </article>
          {index < filteredQuestions.length - 1 && <hr className="page-jee__divider" />}
        </Fragment>
      ))}

      {filteredQuestions.length === 0 && (
        <div className="page-jee__empty">
          <p>Nie znaleziono wyników dla: "{inputValue}"</p>
        </div>
      )}
    </section>
  );
};

export default PageJEE;
