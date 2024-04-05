import Select from "react-select";

function GenderCategory() {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  return (
    <>
      <div className="dropdownBorder mb-4" data-testid="role-selector">
        {/* <h6 className="mb-2">Gender</h6> */}
        <Select defaultValue={options[1]} options={options} />
      </div>
    </>
  );
}

export default GenderCategory;
