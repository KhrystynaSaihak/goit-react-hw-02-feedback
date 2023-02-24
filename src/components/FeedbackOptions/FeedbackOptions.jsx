import { BtnContainer, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => (
        <Btn
          key={option}
          value={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Btn>
      ))}
    </BtnContainer>
  );
};
