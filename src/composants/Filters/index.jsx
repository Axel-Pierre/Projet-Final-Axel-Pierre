import Form from 'react-bootstrap/Form';
import './styles.css';
function Filters(props) {
  const {name} = props
  return (
    <Form.Select className="size" aria-label="Default select example">

      <option>{name}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default Filters;