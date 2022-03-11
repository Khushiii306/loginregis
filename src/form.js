import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import View from './view';
import './form.css';




//useeffect can be use when some new method when be render that time useeffct call
//getting the value of local storage
//JSON using the data will be take in the object nd json format
const getDatafromLs = () =>{

    const data = localStorage.getItem('books');
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}

 const Form = () => {


    let navigate = useNavigate();
    function redirect(){
    navigate(`/Secondform`)
}


    const[books, setbooks]=useState(getDatafromLs());
    const [isEdit , setIsEdit] = useState(false);
    console.log("isEdit", isEdit);

    console.log("books",books);
    

    const[title, setTitle]=useState('');
    const[author, setAuthor]=useState('');
    const[isbn, setIsbn]=useState('');

    const handleAddBookSubmit = (e) =>{
        e.preventDefault();

        if(isEdit){
            let book={
                title,
                author,
                isbn
            }
            setbooks([book]);
        }else{
            let book={
                title,
                author,
                isbn
            }
            setbooks([...books,book]);
            setTitle('');
            setAuthor('');
            setIsbn('');
        }
        
} 

    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books));
    },[books])

    //delete book from ls
    const deleteBook=(isbn)=>{
        const filterdBooks=books.filter((element,index)=>{
            return element.isbn !== isbn
        })
        setbooks(filterdBooks);
    }

    //edit book from ls
    const editBook=(isbn)=>{
        setIsEdit(true);
        // setIsEdit(true)
        let newEdititem = books.find((element) =>{
            return element.isbn === isbn
        })
        console.log(newEdititem);
        setTitle(newEdititem.title);
        setAuthor(newEdititem.author);
        setIsbn(newEdititem.isbn);
        // setbooks(newEdititem.title);

        // setIsEdit(isbn);
    }


  
    return (
        <div className='wrapper'>
            <h1>Booklist App</h1>
            <p>Add and View Your Books Using Storage </p>
            <div className='main'>
            <div  className='form-container'>
            <form autoComplete="off" className='form-group'
            
            >

            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}
            ></input>
            <br></br>
            <label>Author</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}
            ></input>
            <br></br>
            <button type='submit'  onClick={handleAddBookSubmit}  className='btn btn-success btn-md'>ADD</button>
            </form>
            </div>


            <div  className='view-container'>
            {books.length>0&&<>
            <div className='table_responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ISBN#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                <View books={books} deleteBook={deleteBook} editBook={editBook} />
                {/* <View books={books} editBook={editBook} /> */}
                </tbody>
            </table>
            </div>
            <button className='btn btn-danger btn-md' 
            onClick={()=>setbooks([])}>Remove all</button>
            </>}
            {books.length < 1 && <div>No Books Are Added Yet</div>}
            </div>
            </div>
            <button onClick={()=>redirect()} >next page</button>
        </div>
        
    )
}
 export default Form;