import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
// import { useFeedbackItemsContext } from "../../lib/hooks";

type feedbackFromProps = {
  onAddToList: (text: string) => void;
};

const FeedbackForm = ({ onAddToList }: feedbackFromProps) => {
  // const { handleAddToList } = useFeedbackItemsContext();

  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  const charCount = MAX_CHARACTERS - text.length;

  // const handleSubmit = (event: React.FormEventHandler<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    onAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
    >
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        value={text}
        onChange={handleChange}
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        {" "}
        Enter your feedback here, remember to #tag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
