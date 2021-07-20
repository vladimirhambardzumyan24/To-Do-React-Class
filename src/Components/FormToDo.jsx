export default function FormToDo({onSubmit,value,onChange}){

    return(
        <form onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            value={value}
            onChange={onChange}
          />
          <input className="add" type="submit" value="ADD" />
        </form>
    )
}