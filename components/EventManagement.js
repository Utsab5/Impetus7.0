import CallIcon from "@mui/icons-material/Call";

const EventMag = ({ person }) => {
  const { name, post, phone } = person;
  return (
    <div className="max-w-sm flex flex-col items-center px-10 py-4 justify-center border rounded-lg shadow bg-gray-800 border-gray-700">
      
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {name}
        </h5>
      
      <p className="mb-3 font-normal text-gray-400">
        <CallIcon className="h-4" />
        {phone}
      </p>
    </div>
  );
};

export default EventMag;
