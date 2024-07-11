import Input from "../commons/Input";

const NewLetter = () => {
  return (
    <div className="container mx-auto flex items-center flex-col p-12 gap-4 bg-gradient-to-b from-pink-200">
      <h1 className="text-5xl font-semibold">
        Get exclusive offers on your email
      </h1>
      <p>Subcribe to our newletter and stay update</p>
      <div className="w-96 flex items-end gap-4">
        <Input
          type="email"
          placeholder="abc@gmail.com"
          className="rounded-full"
        />
        <button className="btn btn-neutral rounded-full px-8">Submit</button>
      </div>
    </div>
  );
};

export default NewLetter;
