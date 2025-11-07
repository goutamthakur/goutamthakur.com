interface TagsProps {
  items: string[];
}

const Tags = ({ items }: TagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((tag, idx) => (
        <span
          key={idx}
          className="bg-bg text-sm px-3 py-1 rounded-xl"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
