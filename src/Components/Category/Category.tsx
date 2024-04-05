import Select from "react-select";

function GenderCategory() {
  const options = [
    { value: "Top wear", label: "Top wear" },
    { value: "Bottom wear", label: "Bottom wear" },
  ];
  return (
    <>
      <div className="dropdownBorder mb-4" data-testid="role-selector">
        <Select defaultValue={options[0]} options={options} />
      </div>
    </>
  );
}

export default GenderCategory;
