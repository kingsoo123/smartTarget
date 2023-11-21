const FeatCard = ({ total, text }) => {
  return (
    <div>
      <p className="text-[70px] font-mono font-bold">{total}</p>
      <p className="w-3/4">{text}</p>
    </div>
  );
};

export default FeatCard;
