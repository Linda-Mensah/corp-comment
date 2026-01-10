// import { useFeedbackItemsContext } from "../../lib/hooks";

type HashTagItemProps = {
  onSelectCompany: (company: string) => void;
  company: string;
};

const HashTagItem = ({ company, onSelectCompany }: HashTagItemProps) => {
  // const { handleSelectCompany } = useFeedbackItemsContext();

  return (
    <li>
      <button type="button" onClick={() => onSelectCompany(company)}>
        #{company}
      </button>
    </li>
  );
};

export default HashTagItem;
