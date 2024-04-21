const ApplyForm = () => {
  const formElements = [
    {
      name: "First Name",
      type: "text",
    },
    {
      name: "Last Name",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Phone Number",
      type: "number",
    },
    {
      name: "Address",
      type: "text",
    },
    {
      name: "Date Of Birth",
      type: "date",
    },
    {
      name: "Employment Details",
      placeholder: "Self Employed",
      type: "text",
    },
  ];

  const selectOptions = [
    "Instagram",
    "Facebook",
    "Google Search",
    "Twitter",
    "LinkedIn",
    "Thread",
    "From A Friend",
  ];

  return (
    <form className="grid gap-3">
      {formElements.map((item) => (
        <div key={item.name}>
          <label
            className="font-medium"
            htmlFor={item.name.replaceAll(" ", "")}>
            {item.name}
          </label>
          <input
            id={item.name.replaceAll(" ", "")}
            className="dark:border-[#bdd2fc] border-[#1c5bd9] bg-transparent placeholder:text-inherit formElement"
            type={item.type}
            placeholder={
              item.placeholder === undefined ? item.name : item.placeholder
            }
          />
        </div>
      ))}
      <div>
        <label className="font-medium" htmlFor="HeardAboutUsFrom">
          How Did You Hear About Us
        </label>
        <select className="dark:border-[#bdd2fc] border-[#1c5bd9] bg-transparent placeholder:text-inherit formElement">
          {selectOptions.map((item) => (
            <option key={item} value={item} className="text-[#1e4fb0]">
              {item}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn text-sm bg-[#1e4fb0] mr-auto">Apply</button>
    </form>
  );
};

export default ApplyForm;
