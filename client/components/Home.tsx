function Home() {
  return (
    <>
      <h1>Welcome to the Lana Del Rey Universe</h1>
      <p>
        Select an existing username or click the button to create a new profile.
      </p>
      <label htmlFor="existing-users">Existing users:</label>
      <select id="existing-users" name="existing-users">
        <option value="existing-user2">This is an existing user</option>
        <option value="existing-user1">This is an existing user</option>
        <option value="existing-user3">This is an existing user</option>
      </select>
      <button>I&apos;m a fan, sign me up!</button>
    </>
  )
}

export default Home
