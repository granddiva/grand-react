export default function ErrorPage({
  code,
  description,
  image,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <img
        src={image}
        alt="error"
        className="w-48 mb-6"
      />

      <h1 className="text-6xl font-bold">{code}</h1>

      <p className="text-xl text-gray-500 mt-2">
        {description}
      </p>
    </div>
  );
}