export default function MovieSelector() {
  return (
    <form>
      <label htmlFor="">
        Select the first movie:
        <br/>
        <input type="text" name="firstMovie" id="firstMovie" />
      </label>
      <br/>
      <label htmlFor="">
      Select the second movie:
        <br/>
        <input type="text" name="secondMovie" id="secondMovie" />
      </label>
    </form>
  )
}
