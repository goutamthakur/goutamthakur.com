interface TagsProps {
  items: string[];
}

const Tags = ({ items }: TagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((tag, idx) => (
        <span
          key={idx}
          className="bg-bg text-sm px-2 py-1 rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
