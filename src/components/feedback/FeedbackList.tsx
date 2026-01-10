import { ErrorMessage } from "../ErrorMessage";
import FeedbackItem from "./FeedbackItem";
import { Spinner } from "../Spinner";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// import { useFeedbackItemsContext } from "../../lib/hooks";

const FeedbackList = () => {
  // const { isLoading, errorMessage, filteredFeedbackItems }
  //   useFeedbackItemsContext();

  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
};

export default FeedbackList;
