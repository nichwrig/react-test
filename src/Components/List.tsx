function List(){
    return(
    <div className='w-1/4 p-4 h-screen overflow-hidden'>
    <h1 className='text-3xl'>[List]</h1>
        <ol className='overflow-auto to max-h-screen max-h-[calc(100vh-150px)]: text-mint'>
            <li><a href="#" className='hover:bg-mint hover:text-darkGrey'>PROPS</a></li>
        </ol>
    </div>
      
    );

}


export default List