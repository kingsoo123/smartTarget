const FeatCard = ({ total, text }) => {
  return (
    <div className="sm:mt-0 mt-[40px]">
      <p className="text-[70px] font-mono font-bold sm:text-left text-center">
        {total}
      </p>
      <p className="w-3/4 sm:text-left text-center">{text}</p>
    </div>
  );
};

export default FeatCard;
