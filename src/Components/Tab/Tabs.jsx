

function GenderSelection() {
  return (
    <div className={`flex flex-col`}>
      <label className={`mb-2`}>
        <input
          type="radio"
          name="gender"
          value="male"
          aria-label="Select Male as your gender"
          className={`mr-2`}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          aria-label="Select Female as your gender"
          className={`mr-2`}
        />
        Female
      </label>
    </div>
  );
}

export default GenderSelection;
