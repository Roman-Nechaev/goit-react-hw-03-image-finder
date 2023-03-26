import { Button } from './Button.styled';
import { ThreeDots } from 'react-loader-spinner';

export const LoadMoreBtn = ({ onClick, isLoadingSpin }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          onClick();
        }}
      >
        {!isLoadingSpin ? (
          'Load More'
        ) : (
          <ThreeDots
            height="24"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        )}
      </Button>
    </>
  );
};
