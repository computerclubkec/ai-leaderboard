const CardStats = ({ icon, count, color }) => {
    return (
        <span
            className="inline-flex gap-1 items-center text-base"
            style={{ color }}
        >
            {icon} {count}
        </span>
    );
};

export default CardStats;
