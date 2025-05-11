

const Form = (props) => {
  // console.log(props);
  let { item, price, handleChange,
     handleSubmit } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item</label>
          <input
            type="text"
            placeholder="Enter Item"
            name="item"
            value={item}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
            name="price"
            value={price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
