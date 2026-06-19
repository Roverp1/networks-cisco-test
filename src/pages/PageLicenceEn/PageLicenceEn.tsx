import { Fragment } from "react/jsx-runtime";
import { dataLicenceEn } from "../../shared/data/dataLicenceEn";
import "./PageLicenceEn.scss";

type Props = {
  inputValue: string;
};

const PageLicenceEn = ({ inputValue }: Props) => {
  const filteredQuestions = dataLicenceEn.filter(
    (item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.answer.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="page-licence-en">
      {filteredQuestions.map((item, index) => (
        <Fragment key={item.id}>
          <article className="page-licence-en__item">
            <h2 className="page-licence-en__question">
              <span className="page-licence-en__question-number">{String(item.id).padStart(2, "0")}.</span>
              {item.question}
            </h2>
            <div className="page-licence-en__answer">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </article>
          {index < filteredQuestions.length - 1 && <hr className="page-licence-en__divider" />}
        </Fragment>
      ))}

      {filteredQuestions.length === 0 && (
        <div className="page-licence-en__empty">
          <p>No results found for: "{inputValue}"</p>
        </div>
      )}
    </section>
  );
};

export default PageLicenceEn;
