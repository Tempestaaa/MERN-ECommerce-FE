const DescriptionBox = () => {
  return (
    <div className="container mx-auto">
      <div role="tablist" className="tabs tabs-lifted tabs-lg font-semibold">
        <label
          role="tab"
          className="tab bg-neutral-content has-[:checked]:tab-active has-[:checked]:bg-white duration-300 !border-b-transparent"
        >
          <input type="radio" name="tabs" className="sr-only" defaultChecked />
          <a>Description</a>
        </label>

        <label
          role="tab"
          className="tab bg-neutral-content has-[:checked]:tab-active has-[:checked]:bg-white duration-300 !border-b-transparent"
        >
          <input type="radio" name="tabs" className="sr-only" />
          <a>Review ( 122 )</a>
        </label>
      </div>

      <div className="flex flex-col gap-6 border border-t-transparent p-12 pb-20">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          eaque molestias aliquam voluptatum eius eligendi unde assumenda
          veritatis cumque dolore illo quia hic, ex tempore perspiciatis
          explicabo vero laborum rem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non
          laborum debitis ipsa delectus repellendus dolor, illo atque distinctio
          id sequi, officia porro. Cum ratione quisquam explicabo accusantium
          voluptatum libero.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
