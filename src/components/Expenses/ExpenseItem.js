import ExpenseDate from './ExpenseDate';
import Card from'../UI/Card';
import './ExpenseItem.css';
const ExpenseItem=(props)=>{
    const clickHandler=()=>{
        console.log('clicked!!!');
    }
    const deleteHandler=()=>{
        console.log('item deleted');
    }
        return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                <button onClick={clickHandler}>change title</button>
                <button onClick={deleteHandler}>Delete item</button>
            </div>
        </Card>
    );
}
export default ExpenseItem