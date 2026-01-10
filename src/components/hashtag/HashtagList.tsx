// import { useFeedbackItemsContext } from "../../lib/hooks";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashTagItem from "./HashTagItem";

const HashtagList = () => {
  // const { companyList } = useFeedbackItemsContext();
  // const companyList = useFeedbackItemsStore((state) => state.getCompanyList());

  const feedbacks = useFeedbackItemsStore((state) => state.feedbackItems);

  const companyList = feedbacks
    .map((feedback) => feedback.company)
    .filter((company, index, array) => index === array.indexOf(company));
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem key={company} company={company} onSelectCompany={selectCompany} />
      ))}
    </ul>
  );
};

export default HashtagList;
