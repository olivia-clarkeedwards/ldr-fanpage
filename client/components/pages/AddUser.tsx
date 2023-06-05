function AddUser() {
  return (
    <>
      <div className="form-container">
        <form className="form signup-form">
          <label htmlFor="userName">Choose a unique username:</label>
          <input id="userName"></input>
          <br></br>
          <label htmlFor="firstName">First name:</label>
          <input id="firstName"></input>
          <br></br>
          <label htmlFor="lastName">Last name:</label>
          <input id="lastName"></input>
          <br></br>
          <label htmlFor="userBirthday">Date of birth:</label>
          <input id="userBirthday"></input>
          <br></br>
          <label htmlFor="userTheme">Choose a theme:</label>
          <input id="userTheme"></input>
          <br></br>
          <label htmlFor="faveAlbum">Choose your favourite LDR album:</label>
          <input id="faveAlbum"></input>
          <br></br>
          <label htmlFor="faveSong">Choose your favourite LDR song:</label>
          <input id="faveSong"></input>
          <br></br>
          <button type="submit">Sign me up!</button>
          <br></br>
        </form>
      </div>
    </>
  )
}

export default AddUser
