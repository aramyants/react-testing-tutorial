export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Fullname"
            value="Aram"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location" name="job-location">
            <option value="">select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IT">Italy</option>
            <option value="ES">Spain</option>
            <option value="JP">Japan</option>
            <option value="IN">India</option>
            <option value="CH">Switzerland</option>
            <option value="AU">Australia</option>
            <option value="BR">Brazil</option>
            <option value="RU">Russia</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="PE">Peru</option>
            <option value="CL">Chile</option>
            <option value="EC">Ecuador</option>
            <option value="VE">Venezuela</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" name="terms" />I agree with terms
            and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
