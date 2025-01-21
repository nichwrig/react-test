
function About(){
    return(
    <div className='w-1/4 p-4'>   
        <h1 className='text-3xl'>[About]</h1>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur alias quasi fugiat, beatae rerum facilis, cupiditate pariatur autem necessitatibus illo expedita assumenda dolore accusamus hic similique? Qui, eveniet laborum.</p>
        <div>
            <h2 className='text-xl'>[Links]</h2>
            <ul>
                <li><a className='text-neonAqua hover:bg-neonAqua hover:text-darkGrey' href="#">[Instagram]</a></li>
                <li><a className='text-neonOrange hover:bg-neonOrange hover:text-darkGrey' href="#">[Reddit]</a></li>
                <li><a className='text-neonPurple hover:bg-neonPurple hover:text-darkGrey' href="#">[Github]</a></li>
                <li><a className='text-red-600 hover:bg-red-600 hover:text-darkGrey' href="#">[Last.fm]</a></li>
            </ul>

            <div>
                <h2 className='text-xl'>[Education]</h2>
                <ul>
                    <li><p className='text-gold'>Florida International University<br/>Summer 2021 - Fall 2025<br/>BBA in Manegment Information Systems</p></li>
                    <li><p className='text-neonAqua'>Christopher Columbus High School<br/>Fall 2017 - Spring 2021</p></li>
                </ul>
                
            </div>    
        </div>
    </div>  
    );
}


export default About