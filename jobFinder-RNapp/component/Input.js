export default function Input({ value, label, onChange }) {

    const handlerChange = (event) => {
      onChange(event.target.value);
    };
    return (
      <div className={styles.container}>
        <label>{label}</label>
        <input 
          className={styles.input} 
          onChange={handlerChange} 
          value={value} 
        />
      </div>
    );
  }
  