import { Fragment } from "react/jsx-runtime";
import { dataLicence } from "../../shared/data/dataLicence";
import "./PageLicence.scss";

type Props = {
  inputValue: string;
};

const PageLicence = ({ inputValue }: Props) => {
  const filteredQuestions = dataLicence.filter(
    (item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.answer.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="page-licence">
      {filteredQuestions.map((item, index) => (
        <Fragment key={item.id}>
          <article className="page-licence__item">
            <h2 className="page-licence__question">
              <span className="page-licence__question-number">{String(item.id).padStart(2, "0")}.</span>
              {item.question}
            </h2>
            <div className="page-licence__answer">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </article>
          {index < filteredQuestions.length - 1 && <hr className="page-licence__divider" />}
        </Fragment>
      ))}

      {filteredQuestions.length === 0 && (
        <div className="page-licence__empty">
          <p>Nie znaleziono wyników dla: "{inputValue}"</p>
        </div>
      )}
    </section>
  );
};

export default PageLicence;
