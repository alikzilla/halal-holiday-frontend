const Error = ({ error }: { error: string }) => {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="text-red-500">{error}</div>
    </div>
  );
};

export default Error;
